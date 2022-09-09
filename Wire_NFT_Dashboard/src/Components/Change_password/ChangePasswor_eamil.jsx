import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from '../../Redux/actions/API'
import { toast } from "react-toastify";
import { PagePath, Table } from "../../Components";
import { useNavigate } from 'react-router-dom';
export default function ChangePasswor_eamil() {
    let history = useNavigate()

    const [spinnerload, setspinnerload] = useState(false)
    const [varifyemail, setvarifyemail] = useState(false)
    const [otpcheck, setotpcheck] = useState(false)


    const schema = yup.object().shape({
            email: yup.string().email().required(),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const user = localStorage.getItem("user");
  

    
    const onSubmitHandler = async (data) => {

        setspinnerload(true)



        otpcheck ? updateProfile(data) : sendOTP(data)



        // history(`/dashboard/Update_profile_email/${emailAddress}/${wallet}`)

        setspinnerload(false)


    }




    const sendOTP = async (data) => {
        setotpcheck(true)
        let res = await API.post('/verify_email_changepass',
        {
            "email":data.email
        }

    )
    toast.success('Email with Varify code has been send to you Successfull')
        setspinnerload(false)
       
    }


    const updateProfile = async (data) => {
        setotpcheck(true)

        console.log("OTP", data.otp);

        let res = await API.post('/updateprofile',
            {
                // "uid": user,
                // "email": emailAddress,
                // "mobile": "",
                // "address": wallet,
                // "otp": data.otp
            }

        )
        console.log("Data", res.data.data);
        if (res.data.data == "Successfull") {
            toast.success(' Profile Update Successfull')
        setotpcheck(false)

            // history('/dashboard/Update_profile_email')
        } else {
            toast.error(`${res.data.data}`)
            setspinnerload(false)
            // history('/dashboard/Update_profile_email')


        }

    }
  return (
    <div>

<div className="row justify-content-center">
                <div className="col-md-11 py-3">
                    <PagePath data={{ page_name: "Change Password", page_path: "Activation / Change Password" }} />
                    <div className="col-12 d-flex justify-content-center py-5">
                        <div className="col-md-6">
                            
                                <form className="d-flex flex-column align-items-center profile-border profile-login  py-4" onSubmit={handleSubmit(onSubmitHandler)}>
                                <label className="h-color col-10 p-2">Email Address</label>
                                <input type="email" placeholder="Email Address" className="p-3 profile-border bg-gray col-10" {...register("email", { required: true })} />
                                <p className="p_tage mt-2">{errors.email?.message}</p>

                        

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
