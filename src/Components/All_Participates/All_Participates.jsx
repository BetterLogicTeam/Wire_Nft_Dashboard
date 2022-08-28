import React from "react";
import './All_Participates.css'
const All_Participates = (props) => {
    return ( 
        <div className="All_Participates bg-color row p-0 m-0 br-1">
            <div className=" p-3 row">
                <p className="p-color">All Participates</p>
                <h1 className="h3 h-color">{props.data.participates_count}</h1>
                <div className="d-flex flex-row justify-content-between">
                    <p className="p-color">Join Last 24 Hours </p>
                    <p className="p-color">{props.data.active_participates_count}</p>
                </div>
            </div>
            <div className="progress-row bg-transparent br-1">
                <div className="progress-bar-row bg-white  br-1" style={{width:((1/props.data.participates_count)*100)+'%'}}></div>
            </div>
        </div>
     );
}
 
export default All_Participates;