import { useEffect, useState } from "react";
import { PagePath, Table } from "../../Components";
import metamask from '../../assets/metamask.png'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from '../../Redux/actions/API'
import { toast } from "react-toastify";


const Profile = () => {
   
    const [spinnerload, setspinnerload] = useState(false)
    const [showemail, setshowemail] = useState('')
    const [showAddress, setshowAddress] = useState('')

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        mobile: yup.string().required(" Wallet Address is required")
            // .min(10, "Mobile number length should be at least 10 characters")
            // .max(10, "Mobile number cannot exceed more than 10 characters"),

    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const user = localStorage.getItem("user");
    const getData=async()=>{
        try{
            let res=await API.get(`/getDashboardValues?id=${user}`)
            res=res.data.data[0]
            setshowemail(res.email)
            setshowAddress(res.address)
            console.log("res",res);

        }catch(e){
            console.log("Error while Fatch Api",e);
        }
    }







    const onSubmitHandler = async (data) => {
    
        setspinnerload(true)



        let res = await API.post('/updateprofile',
            {
                "uid": user,
                "email": data.email,
                "mobile": "",
                "address":data.mobile
            }

        )
        console.log("Data", res.data.data);
        if (res.data.data == "Successfull") {
            toast.success(' Profile Update Successfull')
        } else {
            toast.error(`${res.data.data}`)
            setspinnerload(false)

        }
        setspinnerload(false)


    }


    useEffect(() => {
        getData()
    }, [])
    

    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Profile", page_path: "Activation / Profile" }} />
                <div className="col-12 d-flex justify-content-center py-5">
                    <div className="col-md-6">
                        <form className="d-flex flex-column align-items-center profile-border profile-login  py-4" onSubmit={handleSubmit(onSubmitHandler)}>
                            <label className="h-color col-10 p-2">Enter Email Address</label>
                            <input type="email" placeholder="Enter Email Address" className="p-3 profile-border bg-gray col-10" defaultValue={showemail} {...register("email", { required: true })} />
                            <p className="p_tage mt-2">{errors.email?.message}</p>

                            <label className="h-color p-2  col-10">Enter Wallet Address  </label>
                            <input type="text" placeholder="Enter Wallet Address" className="p-3 profile-border bg-gray col-10" defaultValue={showAddress} {...register("mobile", { required: true })} />
                            <p className="p_tage mt-2">{errors.mobile?.message}</p>


                            {/* <input type="submit" value="Change Password" className="col-5 py-3 mt-5 bg-success btn text-white mb-3" /> */}
                            <button className="col-5 py-3 mt-5 bg-success btn text-white mb-3"  > {spinnerload ? (<><div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div></>):"Update Profile"} </button>

                            {/* <button className="col-5 my-3 py-3 btn text-white btn-meta-mask">
                                    <img src={metamask} className="col-2 me-2" />
                                    Meta Mask</button> */}
                            {/* <input type="submit" className="col-5 py-3 bg-success btn text-white mb-3"/> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;