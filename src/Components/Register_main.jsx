import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loadWeb3 } from '../apis/api'
import { API } from '../Redux/actions/API'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function Register_main() {

    let history = useNavigate()
    const [checkbox, setcheckbox] = useState(false)
    const [userId, setuserId] = useState(null)
    const [spinnerload, setspinnerload] = useState(false)
    const [positionSid, setposition] = useState(null);
    const [RefID, setRefID] = useState(null)


    const schema = yup.object().shape({
        // sid: yup.string().required("Sponser id is required"),
        f_name: yup.string().required("User name is required"),
        mob: yup.string().required("Mobile number is required"),
        // .min(10, "Mobile number length should be at least 10 characters")
        // .max(10, "Mobile number cannot exceed more than 10 characters"),
        position: yup.string().required("Position is required"),
        email: yup.string().email().required(),
        psw: yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters"),
        cpsw: yup.string()
            .required("Confirm Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters")
            .oneOf([yup.ref("psw")], "Passwords do not match")
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });
    const onSubmitHandler = async (data) => {
        setspinnerload(true)
        console.log("tayyabLoading",data.sid)
        let res = await API.post("/registration", 
        {
            "sid": data.sid,
            "f_name": data.f_name,
            "uid": "0",
            "email": data.email,
            "accountnumber": "",
            "psw": data.psw,
            "mob": data.mob,
            "position": data.position
        }
        );
        console.log("tayyabLoading", res);

        if (res.data.data == "Successfull") {
            localStorage.setItem("Name", data.f_name);

            toast(`${res.data.data}`)
            history(`/wellComePage/${data.email}`)
        } else {
            toast(`${res.data.data}`)
            setspinnerload(false)
        }
        setspinnerload(false)

    };

    const getresponseId = async (e) => {
        let { value } = e.target;
        console.log("Tayyab", value);
        if (value == "") {
            setuserId(null)

        } else {
            let res = await API.get(`/checkSponser?id=${value}`)
            if (res.data.data.length) {
                let { f_name } = res.data.data[0]
                // console.log("res", f_name);
                setuserId(f_name)
            } else {
                setuserId("Wrong sponser id")
            }
        }
    }

    const ReferralAddress = async () => {
        const user = localStorage.getItem("user");

        let ress = JSON.parse(user);
        let uId = ress?.user_id;
        console.log("UID", uId);
        try {

            let URL = window.location.href;

            console.log("LAST", URL);

            if (URL.includes("referrallink")) {
                let pathArray = URL.split('&');
                // console.log("LAST");
                let UserID = pathArray[pathArray.length - 2]
                UserID = UserID.split('=')
                UserID = UserID[UserID.length - 1]
                setRefID(UserID)
                let res = await API.get(`/checkSponser?id=${UserID}`)
                if (res.data.data.length) {
                    let { f_name } = res.data.data[0]
                    // console.log("res", f_name);
                    setuserId(f_name)
                } else {
                    setuserId("Wrong sponser id")
                }

                let urllast = pathArray[pathArray.length - 1]
                let n = urllast.split('=')
                setposition(n[n.length - 1])
                // console.log("SID",UserID);


            } else {

            }



        } catch (e) {
            console.log("Erroe Whille Referral Fuction Call", e);
        }
    }

    useEffect(() => {

        ReferralAddress()
    }, []);

    return (
        <div class="theme-orange ">
            <div class="wrapper">
                <section class="login-content">
                    <div class="container h-100">
                        <div class="row align-items-center justify-content-center h-100">
                            <div class="col-12">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 ">
                                        <h2 class="mb-2">Sign Up</h2>
                                        <p className='Styelnone'>Enter your personal details and start journey with us.</p>
                                        <div id="error-msg"></div>
                                        <form class="login-signup-form form-signin" onSubmit={handleSubmit(onSubmitHandler)}>
                                            <div class="alert alert-block alert-danger error-login-t" id="ajax_message" style={{ display: "none" }}>

                                            </div>
                                            <div class="form-group">
                                                <div id="ajax_loading" align="center"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="floating-label form-group">
                                                        {/* {
                                                            RefID == null ? (<><input class="form-control mb-3"
                                                            {...register("sid", { required: true })}
                                                            placeholder="Enter Sponsor Id" type="text"
                                                            value={RefID}
                                                            onChange={
                                                                (e) => {
                                                                    getresponseId(e)
                                                                }
                                                            }
                                                        />
                                                        <p className="p_tage">{errors.sid?.message}</p></>):
                                                        (<><input class="form-control mb-3"
                                                        placeholder="Enter Sponsor Id" type="text"
                                                        value={RefID}
                                                        onChange={
                                                            (e) => {
                                                                getresponseId(e)
                                                            }
                                                        }
                                                    />
                                                    <p className="p_tage">{errors.sid?.message}</p>
                                                    </>)
                                                        } */}


                                                        <input class="form-control mb-3"
                                                            {...register("sid", { required: true })}
                                                            placeholder="Enter Sponsor Id" type="text"
                                                            value={RefID}
                                                            onChange={
                                                                (e) => {
                                                                    getresponseId(e)
                                                                }
                                                            }
                                                        />
                                                        <p className="p_tage">{errors.sid?.message}</p>

                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="floating-label form-group">
                                                        <input class="form-control mb-3 floating-input" placeholder="Sponsor Name" type="text" value={userId} disabled={true} />
                                                        {/* <p className="p_tage">{errors.sid?.message}</p> */}

                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="floating-label form-group">
                                                        <input class="form-control mb-3" placeholder="User Name" type="text" {...register("f_name", { required: true })} />
                                                        <p className="p_tage">{errors.f_name?.message}</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="floating-label form-group">
                                                        <input class="floating-input mb-3 form-control" placeholder="Mobile Number" type="number"  {...register("mob", { required: true })} />
                                                        <p className="p_tage">{errors.mob?.message}</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="floating-label form-group">
                                                        {
                                                            positionSid == null ? (<><select class="floating-input form-control select_bg" data-val="true" data-val-required="Position is required" {...register("position", { required: true })}>
                                                                <option value="">Select Postion</option>
                                                                <option value="1">Left</option>
                                                                <option value="2">Right</option>
                                                            </select>
                                                                <p className="p_tage">{errors.position?.message}</p></>

                                                            ) : (<input class="form-control mb-3 input-log-cls"
                                                                placeholder="postion" type="text" value={positionSid} />)
                                                        }

                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="floating-label form-group">
                                                        <input class="form-control mb-3 input-log-cls"
                                                            placeholder="example@gmail.com" type="text" {...register("email", { required: true })} />
                                                        <p className="p_tage">{errors.email?.message}</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="floating-label form-group">
                                                        <input class="floating-input mb-3 form-control" placeholder="Password" type="password" {...register("psw", { required: true })} />
                                                        <p className="p_tage">{errors.psw?.message}</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="floating-label form-group">
                                                        <input class="floating-input mb-3 form-control" placeholder="Confirm Password" {...register("cpsw", { required: true })} type="password" />
                                                        <p className="p_tage">{errors.cpsw?.message}</p>

                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="custom-control custom-checkbox mb-3">
                                                        <input class="" type="checkbox" value="true" checked={checkbox} onChange={(e) => setcheckbox(e.target.checked)} /><input name="TermsAndConditions" type="hidden" value="false" />
                                                        <label class="" for="customCheck1" className='Styelnone'> I Agree Your <a href="#">Terms and Conditions</a></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary"
                                                disabled={!checkbox}>{spinnerload ? (<><div class="spinner-border" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div></>) : "Sign up"}</button>
                                            <p class="mt-3" className='Styelnone'>
                                                Already have an Account <a href="Login_main" class="text-primary">Sign In</a>
                                            </p>
                                        </form>
                                    </div>
                                    <div class="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                                        <img src="./Assets/001.png" class="img-fluid w-80" alt="" />
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

export default Register_main