import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const Reward_Income = () => {
    var [reward_income,set_reward_income]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'Business',accessor:'business'},
                {Header:'Income($)',accessor:'income'},
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',business:'12345',income:'12345 $',date:'20/07/2022'},
                {sr:'2',business:'12345',income:'12345 $',date:'20/07/2022'},
                {sr:'3',business:'12345',income:'12345 $',date:'20/07/2022'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Reward Income",page_path:"All Income / Reward Income"}} />
                <Table
                    data={reward_income.rows}
                    columns={reward_income.cols}
                />
            </div>
        </div>
     );
}
 
export default Reward_Income;