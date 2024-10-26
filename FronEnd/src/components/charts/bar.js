import { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as chartjs, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

chartjs.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

export const BarGraphComponent = ({ data }) => {
    const options = {
        indexAxis: 'y'
    }

    return (        
        <Fragment>
            <Bar data={data} options={options} />
        </Fragment>
    );
}