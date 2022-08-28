import React from 'react'
import { useMoralis, useMoralisFile } from "react-moralis";

export default function Newfile() {
    const {
        authenticate,
        isAuthenticated,
        isAuthenticating,
        user,
        account,
        logout,
        initialize,
      } = useMoralis();
      const login = async () => {
        let web3 = window.web3;
        // console.log("Web3", web3);
        await authenticate({ signingMessage: "Log in using Moralis" }).then(
         async function (user) {
            console.log("loged in", user);
          }
        );
      };
  return (
    <div>
<button className='btn btn-success' onClick={()=>login()}>Connect</button>


    </div>
  )
}
