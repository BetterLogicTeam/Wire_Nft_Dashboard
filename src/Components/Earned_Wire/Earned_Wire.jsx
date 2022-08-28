import React from "react";
import './Earned_Wire.css';
import Chart from 'react-apexcharts'
const Earned_Wire = (props) => {
    return ( 
        <div className="Earned_Wire bg-color br-1 col-lg-6 p-0">
            <div className="px-3 pt-3">
                <p className="p-color">Participates have Earned Wire</p>
                <h1 className="h3 h-color">{props.data.joined}</h1>
            </div>
            <Chart
                    options={props.opt.options}
                    series={props.opt.series}
                    type='area'
                    height= '100'
                    width="100%"
                 />
        </div>
     );
}
 
export default Earned_Wire;