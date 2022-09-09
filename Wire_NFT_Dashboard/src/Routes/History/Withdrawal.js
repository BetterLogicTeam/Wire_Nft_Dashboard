import { useState } from "react";
import {PagePath,Table} from "../../Components";

const Withdrawal = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Withdrawal",page_path:"History / Withdrawal"}} />
                <div className="col-12 d-flex justify-content-center py-5">      
                    <div className="col-md-6 col-lg-5 col-xxl-4 col-10">                                     
                            <form className="d-flex flex-column align-items-center profile-border profile-login  py-4 shadow-withdraw">                                 
                                <h1 className="h-color col-12 py-2 px-4 border_bottom">Withdrawal</h1>
                                <p className="text-danger col-11">wallet is not connected..!..Wait...</p>
                                <div className="col-11 mt-3 row align-items-center">
                                    <p className="col-5 m-0 p-0 text-white">Wallet Net USD Value</p>                                    
                                    <input type="text" className="p-2 profile-border col-7"/>
                                </div>
                                <div className="col-11 mt-3 row align-items-center">
                                    <p className="col-5 m-0 p-0 text-white">Enter USD Amount</p>                                    
                                    <input type="text" className="p-2 profile-border col-7"/>
                                </div>
                                <div className="col-11 mt-3 row align-items-center">
                                    <p className="col-5 m-0 p-0 text-white">Withdrawal Token</p>                                    
                                    <input type="text" className="p-2 profile-border col-7"/>
                                </div>
                                <input type="submit"value="Withdrawal" className="col-5 mt-3 py-3 bg-success btn text-white mb-3"/>
                            </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Withdrawal;