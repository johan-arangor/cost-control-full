import { Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as chartjs, Tooltip, Legend, ArcElement } from 'chart.js';

chartjs.register(Tooltip, Legend, ArcElement)

export const DonutGraphComponent = ({ data }) => {
    return (        
        <Fragment>
                <Doughnut data={data}/>
        </Fragment>
    );
}