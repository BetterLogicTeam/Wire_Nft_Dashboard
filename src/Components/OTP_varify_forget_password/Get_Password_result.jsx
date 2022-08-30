import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Get_Password_result() {
    let history = useNavigate()

    let Result = localStorage.getItem("Result");
    Result=JSON.parse(Result)

    console.log("Result",Result.email);

    const Rendepage=()=>{
        history(`/Login_main`)


    }

    return (
        <div>
            <div class="wrapper">
                <section class="login-content">
                    <div class="container h-100">
                        <div class="row align-items-center justify-content-center h-100">
                            <div class="col-12">

                                <div class="row align-items-center">
                                    <div class="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">

                                        <img src="./Assets/22.png" class="img-fluid w-80" alt="" />
                                    </div>
                                    <div class="col-lg-6">
                                       
                                        <h1 class="mb-2 mt-5">Your Data is</h1>
                                                    <h5 className='Styelnone'>Email:<span className='ml-2 text-info'>{Result.email}</span></h5>
                                                    <h5 className='Styelnone'>Password:<span className='ml-2 text-info'>{Result.password}</span></h5>

                                                    <h5 className='Styelnone'>User id:<span className='ml-2 text-info'>{Result.uid}</span></h5>
                                        {/* <p className='text-white'>We've sent an email to <span>{email } </span>
                                            Please Check your email to verify and continue</p> */}

                                        <br />
                                        <form className=""
                                        // onSubmit={handleSubmit(onSubmitHandler)}
                                        >

                                            <div class="row">
                                                <div id="error-msg"></div>
                                                <div class="col-lg-12">
                                                    {/* <div class="floating-label form-group">
                                                        <input type="email" class="floating-input form-control" name="uid" id="uid"
                                                         {...register("email", { required: true })}
                                                        readonly value={email} 
                                                        />
                                                        <p className="p_tage mt-2">{errors.email?.message}</p>

                                                        <label>Email Address</label>
                                                    </div> */}
                                                </div>
                                                <div class="col-lg-12">
                                                    {/* <div class="floating-label form-group">
                                                        <input type="text" class="floating-input  form-control" name="address" id="address"  {...register("otp", { required: true })} />
                                                        <p className="p_tage mt-2">{errors.otp?.message}</p>

                                                        <label>OTP</label>
                                                    </div> */}
                                                </div>

                                            </div>
                                            <button type="submit" class="btn btn-primary" id="dloginshine" name="submitRegisterMember" onClick={()=>Rendepage()}>Sign In<span id="spinner1" style={{ visibility: "hidden" }}><i class="fa fa-spinner fa-spin"></i></span></button>
                                        </form>



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
