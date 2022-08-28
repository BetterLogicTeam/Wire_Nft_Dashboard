import React from "react";
import './Total_Earning.css'
import Chart from 'react-apexcharts'
const Total_Earning = (props) => {
    console.log("props.opt.options",props.opt.options);
    console.log("props.opt.series",props.opt.series);
    return (
        <div className="bg-color br-1 col-lg-3 text-white px-0 py-3">
            <p className="p-color text-center">Total Earning</p>
            <Chart
                options={props.opt.options}
                series={props.opt.series}
                type="radialBar"
                height={'350'}
            />
            <div className="row px-2">
                <div className=" col-6 d-flex flex-column text-center">
                    <h2 className="h3 h-color">{props.data.netbalance}</h2>
                    <p className="p-color">Net Balance</p>
                </div>
                <div className=" col-6 d-flex flex-column text-center">
                    <h2 className="h3 h-color">{props.data.withdrawal}</h2>
                    <p className="p-color">Total Withdrawal</p>
                </div>
            </div>
        </div>
     );
}
 
export default Total_Earning;