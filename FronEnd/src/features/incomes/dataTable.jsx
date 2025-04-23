import { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { FaTrashAlt, FaSearch } from "react-icons/fa";
import moment from 'moment'
import DataTableComponent from '../../components/dataTable/index';
import ObservationModal from '../../components/modals/observationModal';

export default function DataTableIncomes({ data, remove }){
    const columns = [
        {
            name: 'Fecha',
            selector: row => moment(row.dateEntry).utc().format('DD-MM-YYYY'),
            sortable: true
        },
        {
            name: 'Descripción',
            selector: row => row.description,
            sortable: true
        },
        {
            name: 'Etiquetas',
            selector: row => row.tags,
            sortable: true
        },
        {
            button: true,
            cell: (row) => 
                row.observation ? (
                    <Button 
                        type="button"
                        variant="outline-primary"
                        onClick={() => ObservationModal(row.observation)}>
                        <FaSearch />
                    </Button>
                ) : null
        },
        {
            button: true,
            cell: (row) =>
                <Button
                    type="button"
                    variant="outline-danger"
                    onClick={() => remove(row)}>
                    <FaTrashAlt />
                </Button>
        }
    ];

    return(
        <Fragment>
            <DataTableComponent
                columns={columns}
                data={data}
            />
        </Fragment>
    );
}