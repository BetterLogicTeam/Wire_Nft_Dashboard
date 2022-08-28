import { useState } from "react";
import {PagePath,Table} from "../../Components";

const Staking_Details = () => {
    var [staking_details,set_staking_details]= new useState({
        cols:[
                {Header:'#',accessor:'sr'},
                {Header:'Package Amount',accessor:'package_amount'},
                {Header:'Remark',accessor:'remark'},
                {Header:'TXN',accessor:'txn'},
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',package_amount:'100 USD',reamrk:'Activate',txn:'View txn',date:'20-05-2022'},
                {sr:'2',package_amount:'100 USD',reamrk:'Upgrade',txn:'View txn',date:'20-05-2022'},
                {sr:'3',package_amount:'100 USD',reamrk:'Upgrade',txn:'View txn',date:'20-05-2022'},                
                {sr:'4',package_amount:'100 USD',reamrk:'Upgrade',txn:'View txn',date:'20-05-2022'},
                {sr:'5',package_amount:'100 USD',reamrk:'Upgrade',txn:'View txn',date:'20-05-2022'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Staking Details",page_path:"Activation / Staking Details"}} />
                <Table
                    data={staking_details.rows}
                    columns={staking_details.cols}
                />
            </div>
        </div>
     );
}
 
export default Staking_Details;