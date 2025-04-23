import { Fragment, useEffect, useState } from "react";
import DataTableIncomes from "./dataTable";
import { FaPlusCircle } from "react-icons/fa";
import ShowModalIncomesAdd from '../../components/modals/addVehicule';
import RemoveModel from '../../components/modals/removeModal';
import { Button, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { url, user } from "../../globals";

export default function IncomePrincipal(){
    const [getData, setData] = useState([]);

    useEffect(() => {
        getAllIncomes();
    }, []);

    const getAllIncomes = async () => {
        await axios.get(`${url}/income/incomeAll/${user}`)
            .then((result) => {
                setData(result.data.data.result);
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            });
    }

    const newIncome = async () => {
        ShowModalIncomesAdd();
    }
    
    const removeIncome = async (data) => {
        RemoveModel('Eliminar Ingreso', '/income', data);
    }

    return(
        <Fragment>
            <Card>
                <Card.Title className="text-center">Gestión de Vehiculos</Card.Title>
                    <Button variant="dark" onClick={newIncome}>
                        <FaPlusCircle className="mr-2 h-4 w-4" /> 
                        Agregar Ingreso
                    </Button>
                <Card.Body>
                    <DataTableIncomes
                        data={getData}
                        remove={removeIncome}
                    />
                </Card.Body>
            </Card>
        </Fragment>
    )
}