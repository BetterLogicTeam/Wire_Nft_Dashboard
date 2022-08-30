import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from '../../Redux/actions/API'
import { toast } from "react-toastify";
import { PagePath, Table } from "../../Components";
import { useNavigate, useParams } from 'react-router-dom';


export default function Change_Password() {
    const [spinnerload, setspinnerload] = useState(false)
    const [varifyemail, setvarifyemail] = useState(false)
    const [emailchek, setemailchek] = useState("")
    const [addresscheck, setaddresscheck] = useState("")
    const [otpcheck, setotpcheck] = useState(false)

    let { email } = useParams()
    let history = useNavigate()

    const schema = yup.object().shape({
        olpassword: yup.string()
            .required(" Old Password is required"),
        // uid: yup.string()
        // .required(" User id is required"),
        // otp: yup.string("Enter Correct OTP is required").required(),

        password: yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters"),
        cpsw: yup.string()
            .required("Confirm Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters")
            .oneOf([yup.ref("password")], "Passwords do not match")

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
        otpcheck ? updateProfile(data) : sendOTP(data)
        setspinnerload(false)


    }




    const sendOTP = async (data) => {
        setspinnerload(true)

        let response = await API.get(`/getDashboardValues?id=${user}`)
       
        response = response.data.data[0].password
        if (response == data.olpassword) {

            let res = await API.post('/verify_email_changepass',
            {
                "email":emailchek
            }

        )
        toast.success('Email with Varify code has been send to you Successfull')
        setotpcheck(true)

            setspinnerload(false)
            // history(`/dashboard/Varify_email_change_password/${emailchek}/${data.password}`)

        } else {
            toast.error("Please Enter correct old Password")
            setspinnerload(false)

        }
       
    }


    const updateProfile = async (data) => {
        setspinnerload(true)

        // console.log("Email Address", password);
    
        let res = await API.post('/ChangePassword',
            {
                "uid": user,
                "password": data.password,
                "otp": data.otp
            }

        )
        console.log("Data", res.data);
        if (res.data.data == "OK") {
            toast.success('Your Password Update Successfull')
        setotpcheck(false)

            // history(`/dashboard/Change_Password`)

            setspinnerload(false)

        } else {
            // console.log("Error", res.data.data);

            toast.error(`${res.data.data}`)
            setspinnerload(false)
        }

    }

    useEffect(() => {
        getData()
       }, [])

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-11 py-3">
                    <PagePath data={{ page_name: "Change Password", page_path: "Activation / Change Password" }} />
                    <div className="col-12 d-flex justify-content-center py-5">
                        <div className="col-md-6">

                            <form className="d-flex flex-column align-items-center profile-border profile-login  py-4" onSubmit={handleSubmit(onSubmitHandler)}>
                                <label className="h-color col-10 p-2"> Email Address</label>
                                <input type="email" placeholder=" Email Address" className="p-3 profile-border bg-gray col-10" readonly value={emailchek} />
                                {/* <p className="p_tage mt-2">{errors.olpassword?.message}</p> */}
                                {/* <label className="h-color col-10 p-2"> User ID</label>
                                <input type="password" placeholder=" User ID" className="p-3 profile-border bg-gray col-10" {...register("uid", { required: true })} />
                                <p className="p_tage mt-2">{errors.uid?.message}</p> */}

                                {/* <label className="h-color p-2  col-10"> OTP  </label>
                                <input type="text" placeholder="OTP" className="p-3 profile-border bg-gray col-10" {...register("otp", { required: true })} />
                                <p className="p_tage mt-2">{errors.otp?.message}</p> */}

                                <label className="h-color col-10 p-2"> Old Password</label>
                                <input type="password" placeholder=" Old Password" className="p-3 profile-border bg-gray col-10" {...register("olpassword", { required: true })} />
                                <p className="p_tage mt-2">{errors.olpassword?.message}</p>

                                <label className="h-color p-2  col-10"> New Password  </label>
                                <input type="password" placeholder=" New Password" className="p-3 profile-border bg-gray col-10" {...register("password", { required: true })} />
                                <p className="p_tage mt-2">{errors.password?.message}</p>

                                <label className="h-color p-2  col-10"> Confirm Password  </label>
                                <input type="password" placeholder=" Confirm Password" className="p-3 profile-border bg-gray col-10" {...register("cpsw", { required: true })} />
                                <p className="p_tage mt-2">{errors.cpsw?.message}</p>

                                {
                                otpcheck ?
                                    <>
                                        <label className="h-color col-10 p-2">OTP</label>
                                        <input type="text" placeholder=" Enter OTP" className="p-3 profile-border bg-gray col-10" {...register("otp", { required: true })} />
                                        <p className="p_tage mt-2">{errors.otp?.message}</p>

                                    </> : <></>
                            }

                               
{
                                otpcheck ?
                                    <>
                                        <button className="col-5 py-3 mt-5 bg-success btn text-white mb-3"  > {spinnerload ? (<><div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div></>) : "Update Password"} </button>

                                    </>
                                    :
                                    <>

                                        <button className="col-5 py-3 mt-5 bg-success btn text-white mb-3"  > {spinnerload ? (<><div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div></>) : "Send OTP"} </button>
                                    </>
                            }
                            </form>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
