import {PagePath} from "../../Components";

const Coin_Address = () => {
    return ( 
        <div className="row justify-content-center" >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"NFT Address",page_path:"Address / NFT Address"}} />   
                <h5 className="text-white mt-5">NFT Address : { (<a href={`https://bscscan.com/address/0xa8B29c8dB66E7641213DDE45092c32E7D3f58c58`} className="Txn_here" target="_blank">{"0xa8B29c8dB66E7641213DDE45092c32E7D3f58c58" || "Connect Wallet" }</a>)}  </h5>

            </div>
        </div>
     );
}
 
export default Coin_Address;