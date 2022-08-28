import React from "react";
import './Profit.css'
import Chart from 'react-apexcharts'
const Profit = (props) => {
    return (
        <div className="bg-color br-1 text-white px-0 m-0 py-3 row">
            <div className="col-lg-6">
                <Chart               
                    options={props.opt.options}
                    series={[500]}
                    type="radialBar"
                    height={'300'}    
                />       
            </div>
            <div className="col-lg-6">
                <Chart
                    options={props.opt.options}
                    series={[((props.data.EarnAmount/props.data.earned_outof)*500).toFixed(0)]}
                    // series={[props.data.maxIncome]}

                    type="radialBar"
                    height={'300'}
                />                
                <p className="p-color text-center">Your total earning is {props.data.EarnAmount} USD out of {props.data.earned_outof} USD (Your earned {props.data.maxIncome} out of 500% of your investment )</p>
            </div>

                
        </div>
     );
}
 
export default Profit;