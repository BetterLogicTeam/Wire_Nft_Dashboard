import {PagePath} from "../../Components";

const Coin_Address = () => {
    return ( 
        <div className="row justify-content-center" >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Coin Address",page_path:"Address / Coin Address"}} />   
                <h5 className="text-white mt-5">Coin Address : { (<a href={`https://bscscan.com/address/0x3a549866a592C81719F3b714a356A8879E20F5d0`} className="Txn_here" target="_blank">{"0x3a549866a592C81719F3b714a356A8879E20F5d0" || "Connect Wallet" }</a>)}  </h5>

            </div>
        </div>
     );
}
 
export default Coin_Address;