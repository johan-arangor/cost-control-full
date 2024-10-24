import { Fragment } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const BarGraph = ({ data, dataKeyValue, dataKeyName }) => {
    return (
        <Fragment>
                <BarChart data={data} width={500} height={300}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={dataKeyName} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={dataKeyValue} fill='#8874d8'/>
                </BarChart>
        </Fragment>
    );
}