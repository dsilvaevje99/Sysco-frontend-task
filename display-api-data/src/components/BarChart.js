import { Bar } from 'react-chartjs-2';

const BarChart = ({data}) => {
    return ( 
        <Bar
            data={data}
            height={80}
        />
     );
}
 
export default BarChart;