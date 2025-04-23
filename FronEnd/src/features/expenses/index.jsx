import { Fragment, useEffect, useState } from "react";
import DataTableExponses from "./dataTable";
import { FaPlusCircle } from "react-icons/fa";
import ShowModalExponsesAdd from '../../components/modals/addExpense';
import RemoveModel from '../../components/modals/removeModal';
import { Button, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { url, user } from "../../globals";

export default function ExpensePrincipal(){
    const [getData, setData] = useState([]);

    useEffect(() => {
        getAllExpenses();
    }, []);

    const getAllExpenses = async () => {
        await axios.get(`${url}/expense/expenseAll/${user}`)
            .then((result) => {
                console.log('result',result);
                
                setData(result.data.data.result);
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            });
    }

    const newExpense = async () => {
        ShowModalExponsesAdd();
    }
    
    const removeExponse = async (data) => {
        RemoveModel('Eliminar Gasto', '/expense', data);
    }

    return(
        <Fragment>
            <Card>
                <Card.Title className="text-center">Gestión de Gastos</Card.Title>
                    <Button variant="dark" onClick={newExpense}>
                        <FaPlusCircle className="mr-2 h-4 w-4" /> 
                        Agregar Gasto
                    </Button>
                <Card.Body>
                    <DataTableExponses
                        data={getData}
                        remove={removeExponse}
                    />
                </Card.Body>
            </Card>
        </Fragment>
    )
}