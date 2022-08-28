import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from '../../Redux/actions/API'
import { toast } from "react-toastify";
import { PagePath, Table } from "../../Components";


export default function Change_Password() {
    const [spinnerload, setspinnerload] = useState(false)

    const schema = yup.object().shape({
        olpassword: yup.string()
            .required(" Old Password is required"),

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
    const onSubmitHandler = async (data) => {
        setspinnerload(true)

        let response = await API.get(`/getDashboardValues?id=${user}`)
        // console.log("Response", response.data.data[0].password);
        response = response.data.data[0].password
        if (response == data.olpassword) {
            let res = await API.post('/ChangePassword',
                {
                    "uid": user,
                    "password": data.password
                }

            )
            // console.log("Data", res.data.data);
            if (res.data.data == "OK") {
                toast.success('Your Password Update Successfull')
                setspinnerload(false)

              
            } else {
                // console.log("Error", res.data.data);

                toast(`${res.data.data}`)
                setspinnerload(false)
            }
          
        }else{
            toast.error("Please Enter correct old Password")
            setspinnerload(false)

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
                                <label className="h-color col-10 p-2"> Old Password</label>
                                <input type="password" placeholder=" Old Password" className="p-3 profile-border bg-gray col-10" {...register("olpassword", { required: true })} />
                                <p className="p_tage mt-2">{errors.olpassword?.message}</p>

                                <label className="h-color p-2  col-10"> New Password  </label>
                                <input type="password" placeholder=" New Password" className="p-3 profile-border bg-gray col-10" {...register("password", { required: true })} />
                                <p className="p_tage mt-2">{errors.password?.message}</p>

                                <label className="h-color p-2  col-10"> Confirm Password  </label>
                                <input type="password" placeholder=" Confirm Password" className="p-3 profile-border bg-gray col-10" {...register("cpsw", { required: true })} />
                                <p className="p_tage mt-2">{errors.cpsw?.message}</p>


                                {/* <input type="submit" value="Change Password" className="col-5 py-3 mt-5 bg-success btn text-white mb-3" /> */}
                                <button className="col-5 py-3 mt-5 bg-success btn text-white mb-3"  > {spinnerload ? (<><div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div></>) : "Confirm"} </button>

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
