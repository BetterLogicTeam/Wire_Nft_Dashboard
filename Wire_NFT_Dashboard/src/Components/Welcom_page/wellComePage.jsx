import React, { useEffect, useState } from 'react'
import './Welcom_style.css'
import { API } from '../../Redux/actions/API'
import { useNavigate, useParams } from 'react-router-dom'

export default function WellComePage() {
    let history=useNavigate();
  const name = localStorage.getItem("Name");
  console.log("name",name);

    let {email}=useParams()
    const [getEmail, setgetEmail] = useState()
    const [getAllData, setgetAllData] = useState()
    const [btndisable, setbtndisable] = useState(true)

    const LoninApi = async () => {
        let res = await API.post(`/getuserlogindata`,
        {
            "email":email
            
            })
        setgetAllData(res.data.data[0][0])
        console.log("res.data.data[0][0]",res.data.data[0][0]);
        localStorage.setItem("user", JSON.stringify(res.data.data[0][0]));
        if(res.data.data[0][0]==undefined){
        }else{
            setbtndisable(false)
        }
    }
useEffect(() => {
    LoninApi()  
}, [getEmail])


    return (
        <div>
            <form id="form1">
                <div class="wrapper_main mt-5">
                    <div class="wrapper">

                        <div class="main1">
                            <div class="main welcom_main" >
                                <h1 className='text-white'>Hi {name}, Welcome to wirenft.io</h1>
                                <p>Its nice to meet you and we thank you for creating an account with us. wirenft.io, now a
                                    global community, is an amazing platform to high profits.</p>                   

                                <h2>
                                    Your User Id is <strong>
                                        {getAllData ? getAllData.uid:"ID" }
                                    </strong><br />
                                    Your email Id is <strong>{getAllData ? getAllData.email : " Email"}</strong>
                                  <br />
                                    Your Password is <strong>{getAllData ? getAllData.password : " Password"}</strong> 
                
                                </h2>


                                <p style={{ color: "#d8ff00" }}>Your User Id and Password has been sent to your registered email.</p>

                                <p>Please do not delete this email as you may want to refer it later.</p>

                                <p>You can talk to us anytime on <a style={{ color: "#d8ff00" }}
                                    href="mailto:info@wirenft.io">info@wirenft.io</a> for any queries whats oever.</p>

                                <br />
                                <p>
                                    Any time, you would like to write to us, do not hesitate to send an email to
                                    <br />
                                    <a style={{ textDecoration: "none", color: "#d8ff00" }} href="/index"> info@wirenft.io </a>
                                </p>
                                <p style={{ width: "100%", float: "left", textAlign: "center" }}>
                                    <button  type="button" className='WelcomBTN' disabled={btndisable} onClick={()=>history('/Login_main')}  >Go To LogIn</button>
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
            </form>


        </div>
    )
}
