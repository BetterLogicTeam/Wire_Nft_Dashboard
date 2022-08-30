import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API } from '../Redux/actions/API'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Web3 from 'web3'
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'

import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';






function Login_main() {

    let history = useNavigate()
    const [inputdata, setinputdata] = useState({ uid: "", password: "" })
    const [Ip, setIP] = useState()
    const [formError, setformError] = useState({})
    const [isSubmit, setisSubmit] = useState(false)
    const [checkbox, setcheckbox] = useState(false)
    const [spinnerload, setspinnerload] = useState(false)
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });


      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    const schema = yup.object().shape({
        uid: yup.string().required("Id is required"),
        password: yup.string().required("Password is required")
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = async (data) => {
        setspinnerload(true)
        let response = await axios.get('https://geolocation-db.com/json/')
        console.log(response.data.IPv4);
        setIP(response.data.IPv4)
        response = response.data.IPv4
        let res = await API.post('/userlogin',
            {
                "uid": data.uid,
                "password": data.password,
                "ipaddress": response
            }

        )
        let res_here = await API.get(`/getDashboardValues?id=${data.uid}`)
        // console.log("Response",res_here.data.data.address);
        console.log("Res", res_here.data.data[0].address);
        if (res.data.data == "Successfull") {
            toast.success(`Login Successfull`)
            localStorage.setItem("user", data.uid);
            // if(res_here.data.data[0].address==""){

            //     history('/Wallet_Address_change')
            // }else{
            history('/dashboard')
            window.onload()


        } else {
            toast.error(`${res.data.data}`)
            setspinnerload(false)

        }
        setspinnerload(false)

    }





    return (
        <div class="theme-orange ">
            <div class="wrapper">
                <section class="login-content">
                    <div class="container h-100">
                        <div class="row align-items-center justify-content-center h-100">
                            <div class="col-12">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <h2 class="mb-2">Sign in your account</h2>
                                        {/* <button className='btn' onClick={() => ethereum()}>Connect</button> */}
                                        <p className='Styelnone'>To Keep connected with us please login with your personal info.</p>
                                        <form class="login-signup-form form-signin" onSubmit={handleSubmit(onSubmitHandler)}>
                                            <div class="row">
                                                <div id="error-msg"></div>
                                                <div class="col-lg-12">
                                                    <div class="floating-label form-group">
                                                        <input type="text" class="floating-input form-control" name="uid" id="uid"  {...register("uid", { required: true })} />
                                                        <p className="p_tage">{errors.uid?.message}</p>


                                                        <label>Login Id</label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                               
                                                    <div class="floating-label form-group">
                                                    <OutlinedInput
                                                    className=" floating-input  form-control" name="password"
                                                        id="outlined-adornment-password"
                                                        type={values.showPassword ? 'text' : 'password'}
                                                        // value={values.password}
                                                        {...register("password", { required: true })}
                                                        onChange={handleChange('password')}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickShowPassword}
                                                                    // onMouseDown={handleMouseDownPassword}
                                                                    edge="end"
                                                                >
                                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        label="Password"
                                                    />


                                                        {/* <input type="password" class="floating-input  form-control" name="password" id="password" {...register("password", { required: true })}
                                                        /> */}
                                                        {/* <span className=''>{values ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}</span> */}
                                                        <p className="p_tage">{errors.password?.message}</p>


                                                        <label>Password</label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    
                                                    <div class="custom-control custom-checkbox mb-3">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1" checked={checkbox} onChange={(e) => setcheckbox(e.target.checked)} />
                                                        <label class="custom-control-label text-white" for="customCheck1"> Remember Me</label>
                                                    </div>
                                                </div>

                                                
                                                <div class="col-lg-6 rtl-left">
                                                    <Link to="/Forgat_Password">
                                                        <a class="text-primary float-right">Forgot Password?</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary" value="1" id="dloginshine" name="submitRegisterMember" > {spinnerload ? (<><div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div></>) : "Sign In"} <span id="spinner1" style={{ visibility: "hidden" }}><i class="fa fa-spinner fa-spin"></i></span></button>
                                        </form>
                                        <p class="mt-3" className='Styelnone'>
                                            Create an Account  <Link to="/Register_main"> <a class="text-primary" >Sign Up</a></Link>
                                        </p>

                                    </div>
                                    <div class="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                                        {/* <img src="./Assets/001.png" class="img-fluid w-80" alt=""/> */}
                                        <img src="./Assets/1.webp" alt="shape-image" class="img-fluid w-80" />
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

export default Login_main