import React from "react";
import './Joining.css';
import Chart from 'react-apexcharts'
const Joining = (props) => {
    return ( 
        <div className="Joining bg-color row p-0 m-0 br-1">
            <div className="p-3">
                <p className="p-color">Joining</p>
                <h1 className="h3 h-color">{props.data.joined}</h1>
            </div>
            <Chart
                    options={props.opt.options}
                    series={props.opt.series}
                    type='area'
                    height= '150'
                    width="100%"
                    className="chart-joining"
                 />
        </div>
     );
}
 
export default Joining;