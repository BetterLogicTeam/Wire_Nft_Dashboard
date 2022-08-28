import React, { useEffect, useState } from "react";
import { PagePath } from "../../Components";
import user3red from '../../assets/red-icon.png'
import treeimg1 from '../../assets/treeimg1new.png'
import Default from '../../assets/defaultnew.png'
import treeimg2 from '../../assets/treeimg2new.png'
import Active from '../../assets/user3green.png'

import treeimg from '../../assets/treeimgnew.png'
import { API } from '../../Redux/actions/API'
import { ListItemSecondaryAction } from "@material-ui/core";


const Matching_Tree = () => {
    const user = localStorage?.getItem("user");

    const [Idnumer, setIdnumer] = useState(user)


    const [userdata, setuserdata] = useState(
        [
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '0',
                right_business: '',
                sponser: ''

            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                sponser: ''
            },
        ]

    )

    const referral_API = async () => {
        try {

            // let ress = JSON?.parse(user);
            // let uId = ress?.uid;
            // let status = ress?.status

            
            let responce = await API?.post('/binary_tree', {
                "uid": Idnumer,
                "usersession_uid": "1"
            })
            responce = responce?.data?.data?.recordset;
            
            setuserdata( [
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '0',
                    right_business: '',
                    sponser: ''
    
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    topup_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    sponser: ''
                },
            ])
            console.log("Res_API", responce[0].totalright);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    name: item.fname,
                    id: item.uid,
                    registration_date: item?.activationdate,
                    status: item.activationdate ? 'Active' : 'UnActive',
                    total_left: item.totalleft,
                    total_left_active: item.lcount,
                    left_business: item.lbv,
                    package_amount: item.packageamount,
                    topup_date: item.activationdate,
                    package: item.package,
                    total_right: item.totalright,
                    total_right_active: item.lcount,
                    right_business: item.rbv,
                    sponser: item.sid
                    // date: item?.dd
                });



            }
            )
            console.log("responce", arr);


            setuserdata(arr)





        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }

    const onhover  = (x) => {
            
        let team_info_div_data = document.querySelectorAll('.team-info p')
        
        let team_info_div = document.querySelector('.team-info');
        
        let user_img = document.querySelectorAll('.user-img');
        let sponser = document.querySelector('.sponser');
        console.log("Data",userdata[x].sponser);
        team_info_div_data[0].innerHTML += userdata[x].registration_date;
        team_info_div_data[1].innerHTML += userdata[x].status;
        team_info_div_data[2].innerHTML += userdata[x].total_left;
        team_info_div_data[3].innerHTML += userdata[x].total_left_active;
        team_info_div_data[4].innerHTML += userdata[x].left_business;
        team_info_div_data[5].innerHTML += userdata[x].package_amount;
        team_info_div_data[6].innerHTML += userdata[x].topup_date;
        team_info_div_data[7].innerHTML += userdata[x].package;
        team_info_div_data[8].innerHTML += userdata[x].total_right;
        team_info_div_data[9].innerHTML += userdata[x].total_right_active;
        team_info_div_data[10].innerHTML += userdata[x].right_business;
        sponser.innerHTML += userdata[x].sponser;

        team_info_div.classList.remove('d-none');
        team_info_div.setAttribute('style', `top:${user_img[x].getBoundingClientRect().top + 50}px; left:${user_img[x].getBoundingClientRect().left + 50};`);
    }
    const onhoverout = () => {
        let team_info_div_data = document.querySelectorAll('.team-info p')
        let sponser = document.querySelector('.sponser');
        let team_info_div = document.querySelector('.team-info');


            team_info_div_data[0].innerHTML = 'Registration Date :';
            team_info_div_data[1].innerHTML = 'Status :';
            team_info_div_data[2].innerHTML = 'Total Left :';
            team_info_div_data[3].innerHTML = 'Total Left Active :';
            team_info_div_data[4].innerHTML = 'Left Business :';
            team_info_div_data[5].innerHTML = 'Packgae Amount :';
            team_info_div_data[6].innerHTML = 'Topup Date: ';
            team_info_div_data[7].innerHTML = 'Packgae : ';
            team_info_div_data[8].innerHTML = 'Total Right : ';
            team_info_div_data[9].innerHTML = 'Total Right Active : ';
            team_info_div_data[10].innerHTML = 'Right Business : ';
            team_info_div.classList.add('d-none');
            sponser.innerHTML = "Sponser : ";
            
        }
    useEffect(() => {
        referral_API()
    }, [Idnumer])



    // const [userdata, setuserdata] = new useState(
    //     [
    //         {
    //             name: 'User',
    //             id: '364734',
    //             registration_date: '31 Dec 2020',
    //             status: 'Active',
    //             total_left: '0',
    //             total_left_active: '0',
    //             left_business: '0',
    //             package_amount: '2500',
    //             topup_date: '31 Dec 2020',
    //             package: '',
    //             total_right: '0',
    //             total_right_active: '0',
    //             right_business: '0'
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //         {
    //             name: '',
    //             id: '',
    //             registration_date: '',
    //             status: '',
    //             total_left: '',
    //             total_left_active: '',
    //             left_business: '',
    //             package_amount: '',
    //             topup_date: '',
    //             package: '',
    //             total_right: '',
    //             total_right_active: '',
    //             right_business: ''
    //         },
    //     ]
    // )

    console.log("userdata", userdata);
    // React.useEffect(() => {
    //     // let team_info_div = document.querySelector('.team-info');
    //     // let team_info_div_data = document.querySelectorAll('.team-info p')
    //     // let user_img = document.querySelectorAll('.user-img');
    //     // let sponser = document.querySelector('.sponser');
        
    //     // const onhover  = (x) => {
    //     //     console.log("Data",userdata[x].sponser);
    //     //     team_info_div_data[0].innerHTML += userdata[x].registration_date;
    //     //     team_info_div_data[1].innerHTML += userdata[x].status;
    //     //     team_info_div_data[2].innerHTML += userdata[x].total_left;
    //     //     team_info_div_data[3].innerHTML += userdata[x].total_left_active;
    //     //     team_info_div_data[4].innerHTML += userdata[x].left_business;
    //     //     team_info_div_data[5].innerHTML += userdata[x].package_amount;
    //     //     team_info_div_data[6].innerHTML += userdata[x].topup_date;
    //     //     team_info_div_data[7].innerHTML += userdata[x].package;
    //     //     team_info_div_data[8].innerHTML += userdata[x].total_right;
    //     //     team_info_div_data[9].innerHTML += userdata[x].total_right_active;
    //     //     team_info_div_data[10].innerHTML += userdata[x].right_business;
    //     //     sponser.innerHTML += userdata[x].sponser;

    //     //     team_info_div.classList.remove('d-none');
    //     //     team_info_div.setAttribute('style', `top:${user_img[x].getBoundingClientRect().top + 50}px; left:${user_img[x].getBoundingClientRect().left + 50};`);
    //     // }
    //     // const onhoverout = () => {
    //     //     team_info_div_data[0].innerHTML = 'Registration Date :';
    //     //     team_info_div_data[1].innerHTML = 'Status :';
    //     //     team_info_div_data[2].innerHTML = 'Total Left :';
    //     //     team_info_div_data[3].innerHTML = 'Total Left Active :';
    //     //     team_info_div_data[4].innerHTML = 'Left Business :';
    //     //     team_info_div_data[5].innerHTML = 'Packgae Amount :';
    //     //     team_info_div_data[6].innerHTML = 'Topup Date: ';
    //     //     team_info_div_data[7].innerHTML = 'Packgae : ';
    //     //     team_info_div_data[8].innerHTML = 'Total Right : ';
    //     //     team_info_div_data[9].innerHTML = 'Total Right Active : ';
    //     //     team_info_div_data[10].innerHTML = 'Right Business : ';
    //     //     team_info_div.classList.add('d-none');
    //     //     sponser.innerHTML = "Sponser : ";
            
    //     // }
        
    //     // for (let x = 0; x < 15; x++) {
    //     //     user_img[x].addEventListener('mouseover', ()=>{onhover(x)})
    //     //     user_img[x].addEventListener('mouseout', ()=>{onhoverout()})
    //     // }
    // },[userdata])
    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Matching Tree", page_path: "Team Details / Matching Tree" }} />
                <div className="col-12 row justify-content-center py-5">
                    <div className="col-md-4 col-10 gy-2 py-2 col-lg-5 row profile-border justify-content-center align-items-center profile-login">
                        <input type="text" className="p-2 my-2 mx-3 profile-border col-10 col-md-10 col-lg-4 col-xl-6" onChange={(e)=>setIdnumer(e.target.value)} />
                        <button className="btn btn-success col-7 col-md-4 col-lg-3 col-xl-2" onClick={()=>referral_API()}>Submit</button>
                        <button className="ms-md-3 btn btn-danger col-7 col-md-6 col-lg-3 col-xl-2">Go Back</button>
                    </div>
                    <div className="tree container align-items-center d-flex mt-5 flex-column text-white text-center">
                        
                        {userdata[0].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(0)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[0].id)} />) : userdata[0].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(0)}} onMouseOut={()=>{onhoverout()}}  onClick={()=>setIdnumer(userdata[0].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(0)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[0].id)}  />) }


                        <p className="m-0 p-0">{userdata[0].name}</p>
                        <p className="m-0 p-0">{userdata[0].id}</p>
                        <img src={treeimg} className="treeimg" />
                        <div className="d-flex flex-row justify-content-between">
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[1].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(1)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[1].id)}  />) : userdata[1].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(1)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[1].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(1)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[1].id)}  />)}



                                <p className="m-0 p-0">{userdata[1].name}</p>
                                <p className="m-0 p-0">{userdata[1].id}</p>
                                <img src={treeimg1} className="treeimg1" />
                            </div>
                            <div style={{ width: '170px' }} className="gap-img-1">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[2].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(2)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[2].id)} />) : userdata[2].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(2)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[2].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(2)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[2].id)} />)}


                                <p className="m-0 p-0">{userdata[2].name}</p>
                                <p className="m-0 p-0">{userdata[2].id}</p>
                                <img src={treeimg1} className="treeimg1" />
                            </div>
                        </div>


                        <div className="d-flex flex-row justify-content-between">
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={Default} className="user-img" /> */}
                                {userdata[3].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(3)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[3].id)} />) : userdata[3].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(3)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[3].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(3)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[3].id)} />)}


                                <p className="m-0 p-0">{userdata[3].name}</p>
                                <p className="m-0 p-0">{userdata[3].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                            <div style={{ width: '70px' }} className="gap-img-2">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[4].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(4)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[4].id)} />) : userdata[4].name !== "" ? (<img src={user3red} className="user-img"  onMouseOver={()=>{onhover(4)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[4].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(4)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[4].id)}/>)}


                                <p className="m-0 p-0">{userdata[4].name}</p>
                                <p className="m-0 p-0">{userdata[4].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                            <div style={{ width: '70px' }} className="gap-img-2">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[5].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(5)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[5].id)} />) : userdata[5].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(5)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[5].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(5)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[5].id)} />)}
                                <p className="m-0 p-0">{userdata[5].name}</p>
                                <p className="m-0 p-0">{userdata[5].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                            <div style={{ width: '70px' }} className="gap-img-2" >
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[6].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(6)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[6].id)} />) : userdata[6].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(6)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[6].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(6)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[6].id)} />)}

                                <p className="m-0 p-0">{userdata[6].name}</p>
                                <p className="m-0 p-0">{userdata[6].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}

                                {userdata[7].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(7)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[7].id)} />) : userdata[7].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(7)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[7].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(7)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[7].id)} />)}


                                <p className="m-0 p-0">{userdata[7].name}</p>
                                <p className="m-0 p-0">{userdata[7].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[8].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(8)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[8].id)} />) : userdata[8].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(8)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[8].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(8)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[8].id)} />)}


                                <p className="m-0 p-0">{userdata[8].name}</p>
                                <p className="m-0 p-0">{userdata[8].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {/* {userdata[9].name !=="" ?(<img src={user3red} className="user-img" />):(<img src={Default} className="user-img" />)}  */}
                                {userdata[9].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(9)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[9].id)} />) : userdata[9].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(9)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[9].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(9)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[9].id)} />)}


                                <p className="m-0 p-0">{userdata[9].name}</p>
                                <p className="m-0 p-0">{userdata[9].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[10].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(10)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[10].id)} />) : userdata[10].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(10)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[10].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(10)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[10].id)} />)}


                                <p className="m-0 p-0">{userdata[10].name}</p>
                                <p className="m-0 p-0">{userdata[10].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[11].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(11)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[11].id)} />) : userdata[11].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(11)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[11].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(11)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[11].id)} />)}


                                <p className="m-0 p-0">{userdata[11].name}</p>
                                <p className="m-0 p-0">{userdata[11].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[12].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(12)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[12].id)} />) : userdata[12].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(12)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[12].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(12)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[12].id)} />)}


                                <p className="m-0 p-0">{userdata[12].name}</p>
                                <p className="m-0 p-0">{userdata[12].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* {userdata[13].name !=="" ?(<img src={user3red} className="user-img" />):(<img src={Default} className="user-img" />)}  */}
                                {userdata[13].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(13)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[13].id)} />) : userdata[13].name != "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(13)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[13].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(13)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[13].id)} />)}


                                {console.log("userdata[13]", userdata[14].name)}
                                <p className="m-0 p-0">{userdata[13].name}</p>
                                <p className="m-0 p-0">{userdata[13].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[14].package >= 1 ? (<img src={Active} className="user-img" onMouseOver={()=>{onhover(14)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[14].id)} />) : userdata[14].name !== "" ? (<img src={user3red} className="user-img" onMouseOver={()=>{onhover(14)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[14].id)} />) : (<img src={Default} className="user-img" onMouseOver={()=>{onhover(14)}} onMouseOut={()=>{onhoverout()}} onClick={()=>setIdnumer(userdata[14].id)} />)}


                                <p className="m-0 p-0">{userdata[14].name}</p>
                                <p className="m-0 p-0">{userdata[14].id}</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-info d-none position-absolute text-white col-10 col-lg-6 col-md-7 col-xl-4 col-xxl-3 px-2 py-3 br-1">
                        <h6 className="border_bottom m-0 sponser">Sposer:</h6>
                        <div className="d-flex flex-row justify-content-between align-items-start">
                            <div className="d-flex flex-column pt-2 align-items-start justify-content-start" style={{ width: '50%' }}>
                                <p className="bg-b m-0 p-1">Registration Date :</p>
                                <p className=" m-0 p-1">Status :</p>
                                <p className="bg-b m-0 p-1">Total Left :</p>
                                <p className=" m-0 p-1">Total Left Active :</p>
                                <p className="bg-b m-0 p-1">Left Business :</p>
                                <p className=" m-0 p-1">Packgae Amount :</p>
                            </div>
                            <div className="d-flex flex-column pt-2 align-items-start border_start justify-content-start" style={{ width: '50%' }}>
                                <p className="bg-b m-0 p-1">Topup Date: </p>
                                <p className=" m-0 p-1">Packgae : </p>
                                <p className="bg-b m-0 p-1">Total Right : </p>
                                <p className=" m-0 p-1">Total Right Active : </p>
                                <p className="bg-b m-0 p-1">Right Business : </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Matching_Tree;