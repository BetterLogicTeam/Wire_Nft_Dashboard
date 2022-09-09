import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from '../../Redux/actions/API'
import { toast } from "react-toastify";
import { PagePath, Table } from "../../Components";
import { useNavigate, useParams } from 'react-router-dom';
export default function Update_profile_email() {
    let history = useNavigate()
    let { email,wallet } = useParams()


    const [spinnerload, setspinnerload] = useState(false)
    const [varifyemail, setvarifyemail] = useState("")
    const [emailchek, setemailchek] = useState("")
    const [addresscheck, setaddresscheck] = useState("")

    const schema = yup.object().shape({
            otp: yup.string().required(),
            
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const user = localStorage.getItem("user");

    const getData=async()=>{
        try{
            let res=await API.get(`/getDashboardValues?id=${user}`)
            res=res.data.data[0]
            setemailchek(res.email)
            setaddresscheck(res.address)
            
           
            console.log("res",res);

        }catch(e){
            console.log("Error while Fatch Api",e);
        }
    }


    const onSubmitHandler = async (data) => {
        setspinnerload(true)

        if(emailchek !==""){
            setvarifyemail(email)
        }
        console.log("Email Address", emailchek);
        addresscheck == wallet ? console.log("already") :console.log("Not");

        
           let res = await API.post('/updateprofile',
          
            {
                "uid": user,
                "email": email,
                "mobile": "",
                "address":wallet,
                "otp":data.otp
            }

        )
        console.log("Data", res.data.data);
        if (res.data.data == "Successfull") {
            toast.success(' Profile Update Successfull')
            history('/dashboard/Profile')
        } else {
            toast.error(`${res.data.data}`)
            setspinnerload(false)
            // history('/dashboard/Profile')
        }
       
    }

    useEffect(() => {
     getData()
    }, [])
    
  return (
    <div>

<div className="row justify-content-center">
                <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Profile", page_path: "Activation / Profile" }} />
                  
                    <div className="col-12 d-flex justify-content-center py-5">
                        <div className="col-md-6">
                            
                                <form className="d-flex flex-column align-items-center profile-border profile-login  py-4" onSubmit={handleSubmit(onSubmitHandler)}>
                                <label className="h-color col-10 p-2">Email Address</label>
                                <input type="email" placeholder="Email Address" className="p-3 profile-border bg-gray col-10" value={email} />
                                {/* <p className="p_tage mt-2">{errors.email?.message}</p> */}

                                <label className="h-color col-10 p-2">OTP</label>
                                <input type="text" placeholder=" Enter OTP" className="p-3 profile-border bg-gray col-10" {...register("otp", { required: true })} />
                                <p className="p_tage mt-2">{errors.otp?.message}</p>

                                {/* <input type="submit" value="Change Password" className="col-5 py-3 mt-5 bg-success btn text-white mb-3" /> */}
                                <button className="col-5 py-3 mt-2 bg-success btn text-white mb-3"  > {spinnerload ? (<><div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div></>) : "Varify"} </button>

                                {/* <button className="col-5 my-3 py-3 btn text-white btn-meta-mask">
                                    <img src={metamask} className="col-2 me-2" />
                                    Meta Mask</button> */}
                                {/* <input type="submit" className="col-5 py-3 bg-success btn text-white mb-3"/> */}
                            </form>
                               
                              

                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
