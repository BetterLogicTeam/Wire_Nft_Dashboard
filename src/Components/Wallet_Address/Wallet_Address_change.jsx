import React, { useState } from 'react'
import { API } from '../../Redux/actions/API'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Wallet_Address_change() {
    const user = localStorage.getItem("user");
    const [spinnerload, setspinnerload] = useState(false)
    let history = useNavigate()


    const schema = yup.object().shape({
        WalletAddress: yup.string()
            .required(" WalletAddress is required"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmitHandler = async (data) => {


        setspinnerload(true)

        let res = await API.post('/UpdateWalletAddress',
            {
                "uid":user,
                "WalletAddress":data.WalletAddress
            }

        )
        // console.log("Data", res.data.data);
        if (res.data.data == "Successfull") {
            toast(`${res.data.data}`)
            history('/dashboard')

        } else {
            toast(`${res.data.data}`)
            setspinnerload(false)

        }
        setspinnerload(false)

    }


    return (
        <div>
            <div class="wrapper">
                <section class="login-content">
                    <div class="container h-100">
                        <div class="row align-items-center justify-content-center h-100">
                            <div class="col-12">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <h2 class="mb-2">Update Wallet Address </h2>
                                        <br />
                                        <form className="" onSubmit={handleSubmit(onSubmitHandler)}>

                                            <div class="row">
                                                <div id="error-msg"></div>
                                                <div class="col-lg-12">
                                                    <div class="floating-label form-group">
                                                        <input type="text" class="floating-input form-control" name="uid" id="uid" readonly value={user} />

                                                        <label>User Id</label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="floating-label form-group">
                                                        <input type="address" class="floating-input  form-control" name="address" id="address"  {...register("WalletAddress", { required: true })} />
                                                        <p className="p_tage mt-2">{errors.WalletAddress?.message}</p>

                                                        <label>Wallet Address</label>
                                                    </div>
                                                </div>

                                            </div>
                                            <button type="submit" class="btn btn-primary" id="dloginshine" name="submitRegisterMember">{spinnerload ? (<><div class="spinner-border" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div></>) : "Sign up"}<span id="spinner1" style={{ visibility: "hidden" }}><i class="fa fa-spinner fa-spin"></i></span></button>
                                        </form>



                                    </div>

                                    <div class="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">

                                        <img src="./Assets/1.webp" class="img-fluid w-80" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    )
}
