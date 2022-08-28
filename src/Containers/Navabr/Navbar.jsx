import React from 'react';
import './Navbar.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { BiHomeCircle, BiLineChart, BiBook, BiMessageSquareEdit } from 'react-icons/bi';
import { TbAtom } from 'react-icons/tb';
import { MdOutlineGroup } from 'react-icons/md';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Logo from '../../assets/logo.png'

import { FaLock } from 'react-icons/fa'
import { Activate_History, Buy_NFT, Coin_Address, Direct_Leg_Business, Home, Level_Details, Matching_Income, Matching_Level_Income, Matching_Tree, My_Referral, My_Team, NFT_Address, Profile, Referral_Income, Reward_Income, Roi_Income, Self_Address, Staking_Details, Withdrawal, Withdrawal_History } from '../../Routes';
import Change_Password from '../../Components/Change_password/Change_Password';
import Mint from '../../Components/Mint/Mint';
import Forgat_Password from '../../Components/Forgat_Password/Forgat_Password';
const Navbar = () => {
    const history = useNavigate();
    const handleLogout = () => {
      localStorage.setItem("isAuthenticated", false);
      localStorage.setItem("user", null);
      history("/Login_main");
      window.location.reload();
    };
    
    const onClick_DNone = ()=>{
        let expand_list_MD = document.querySelectorAll('.expand-nav');
        for (let y = 0; y < 6; y++) {
            expand_list_MD[y].classList.forEach((class_item) => {
                if (class_item == 'd-flex') {
                    expand_list_MD[y].classList.remove('d-flex');
                    expand_list_MD[y].classList.add('d-none');
                }
            })
        }
    }
    const sm_nav_dnone = ()=>{        
        let nav_panel = document.querySelector('.nav-panel')
        if (nav_panel.classList.contains('d-none')) {
            nav_panel.classList.remove('d-none');
            nav_panel.classList.add('d-flex');
        }
        else {
            nav_panel.classList.remove('d-flex');
            nav_panel.classList.add('d-none');
        }
    }
    React.useEffect(() => {
       
        let nav_btn_expand = document.querySelectorAll('.nav-btn-expand');
        let nav_btn = document.querySelector('.nav-btn');
        let nav_panel = document.querySelector('.nav-panel')
        let expand_list = document.querySelectorAll('.expand-nav');
        let expand_list_sm = document.querySelectorAll('.expand-nav-sm');
        nav_btn.addEventListener('click', () => {
            console.log('NAv Clicked');
            if (nav_panel.classList.contains('d-none')) {
                nav_panel.classList.remove('d-none');
                nav_panel.classList.add('d-flex');
            }
            else {
                nav_panel.classList.remove('d-flex');
                nav_panel.classList.add('d-none');
            }
        })
        for (let x = 0; x < 6; x++) {
            nav_btn_expand[x].addEventListener('click', () => {
                console.log('clicked');
                for (let y = 0; y < 6; y++) {
                    if (x != y) {
                        expand_list[y].classList.forEach((class_item) => {
                            if (class_item == 'd-flex') {
                                expand_list[y].classList.remove('d-flex');
                                expand_list[y].classList.add('d-none');
                            }
                        })
                    }
                }
                let d_flex = false;
                expand_list[x].classList.forEach((class_item) => {
                    if (class_item == 'd-flex') {
                        d_flex = true;
                    }
                })
                if (d_flex == true) {
                    expand_list[x].classList.remove('d-flex');
                    expand_list[x].classList.add('d-none');
                }
                else {
                    expand_list[x].classList.remove('d-none');
                    expand_list[x].classList.add('d-flex');
                }
            })
        }
        for (let x = 6; x < 12; x++) {
            nav_btn_expand[x].addEventListener('click', () => {
                console.log('clicked');
                for (let y = 0; y < 6; y++) {
                    if ((x - 6) != y) {
                        expand_list_sm[y].classList.forEach((class_item) => {
                            if (class_item == 'd-flex') {
                                expand_list_sm[y].classList.remove('d-flex');
                                expand_list_sm[y].classList.add('d-none');
                            }
                        })
                    }
                }
                let d_flex = false;
                expand_list_sm[(x - 6)].classList.forEach((class_item) => {
                    if (class_item == 'd-flex') {
                        d_flex = true;
                    }
                })
                if (d_flex == true) {
                    expand_list_sm[(x - 6)].classList.remove('d-flex');
                    expand_list_sm[(x - 6)].classList.add('d-none');
                }
                else {
                    expand_list_sm[(x - 6)].classList.remove('d-none');
                    expand_list_sm[(x - 6)].classList.add('d-flex');
                }
            })
        }
    }, [])
    return (
        <div className='row justify-content-center'>
            <div className='col-md-11'>
                <nav class="navbar navbar-expand-lg navbar-light row d-flex flex-column">
                    <div className='row justify-content-between brand-bar'>
                        <img src={Logo} className='navbar-brand col-lg-1 col-md-2 col-5' />
                        <button class="navbar-toggler nav-btn col-md-1 col-2 me-3" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse row px-5 py-1" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                            <Link to="/dashboard">
                                <button className='btn1 fs-5'><BiHomeCircle className="me-1 mb-1 fs-4" /> Dashboard</button>
                                </Link>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand fs-5'><TbAtom className="me-1 mb-1 fs-4" /> Activation</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link to="/dashboard/Activate_History" onClick={onClick_DNone}><a><BsArrowRightShort /> Activate History</a></Link>
                                        {/* <Link to="/dashboard/Staking_Details" onClick={onClick_DNone}><a><BsArrowRightShort /> Staking Details</a></Link> */}
                                        <Link to="/dashboard/Profile" onClick={onClick_DNone}><a><BsArrowRightShort /> Profile</a></Link> 
                                        <Link to="/dashboard/Change_Password" onClick={onClick_DNone}><a><BsArrowRightShort /> Change Password</a></Link>                                        

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand fs-5'> <BiLineChart className="me-1 mb-1 fs-4" /> All Income</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link  onClick={onClick_DNone} to="/dashboard/Referral_Income"><BsArrowRightShort /> Referral Income </Link>
                                        <Link  onClick={onClick_DNone} to="/dashboard/Matching_Income"><BsArrowRightShort /> Matching Income</Link>
                                        <Link  onClick={onClick_DNone} to="/dashboard/Matching_Level_Income"><BsArrowRightShort /> Matching Level Income</Link>
                                        <Link  onClick={onClick_DNone} to="/dashboard/Roi_Income"><BsArrowRightShort /> Roi Income</Link>
                                        {/* <Link  onClick={onClick_DNone} to="/dashboard/Reward_Income"><BsArrowRightShort /> Reward Income</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand fs-5'><BiBook className="me-1 mb-1 fs-4" /> History</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        {/* <Link  onClick={onClick_DNone} to="/dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link>  */}
                                        <Link  onClick={onClick_DNone} to="/dashboard/Withdrawal"><BsArrowRightShort /> Withdrawal</Link> 
                                        <Link  onClick={onClick_DNone} to="/dashboard/Withdrawal_History"><BsArrowRightShort /> Withdrawal History</Link> 
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand fs-5'><BiBook className="me-1 mb-1 fs-4" /> Mint</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link  onClick={onClick_DNone} to="/dashboard/Mint"><BsArrowRightShort /> Mint</Link> 
                                        <Link  onClick={onClick_DNone} to="/dashboard/Mint_History"><BsArrowRightShort /> Mint History</Link> 
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand fs-5'><MdOutlineGroup className="me-1 mb-1 fs-4" /> Team Details</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link  onClick={onClick_DNone} to="/dashboard/My_Referral"><BsArrowRightShort /> My Referral</Link> 
                                        <Link  onClick={onClick_DNone} to="/dashboard/My_Team"><BsArrowRightShort /> My Team</Link> 
                                        <Link  onClick={onClick_DNone} to="/dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link> 
                                        <Link  onClick={onClick_DNone} to="/dashboard/Level_Details"><BsArrowRightShort /> Level Details</Link> 
                                        <Link  onClick={onClick_DNone} to="/dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Leg Business</Link> 
                                    </div>
                                </div>
                            </li>
                            
         
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand fs-5'><BiMessageSquareEdit className="me-1 mb-1 fs-4" /> Address</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link  onClick={onClick_DNone} to="/dashboard/Self_Address"><BsArrowRightShort /> Self Address</Link> 
                                        <Link  onClick={onClick_DNone} to="/dashboard/Coin_Address"><BsArrowRightShort /> Coin Address</Link> 
                                        <Link  onClick={onClick_DNone} to="/dashboard/NFT_Address"><BsArrowRightShort /> NFT Address</Link> 
                                        {/* <Link  onClick={onClick_DNone} to="/dashboard/Mint"><BsArrowRightShort /> Mint</Link>  */}

                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className='btn1 fs-5' onClick={()=>handleLogout()}><FaLock className="me-1 mb-1 fs-4" /> Logout</button>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-panel d-none bg-black col-10'>
                        <ul class="row p-0 justify-content-center list-unstyled">
                            <li class="col-xl-10 col-12 border_bottom">
                                <Link to="/dashboard" onClick={sm_nav_dnone}>
                                <button className='btn1 col-12 text-start fs-5'>
                                    <BiHomeCircle className="me-1 mb-1" /> Dashboard</button>
                                </Link>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5'><TbAtom className="me-1 mb-1" /> Activation</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Activate_History"><BsArrowRightShort /> Activate History</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Staking_Details"><BsArrowRightShort /> Staking Details</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Profile"><BsArrowRightShort /> Profile</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Change_Password"><BsArrowRightShort /> change Password</Link>

                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5'> <BiLineChart className="me-1 mb-1" /> All Income</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Referral_Income"><BsArrowRightShort /> Referral Income</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Matching_Level_Income"><BsArrowRightShort /> Matching Level Income</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Matching_Income"><BsArrowRightShort /> Matching Income</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Roi_Income"><BsArrowRightShort /> Roi Income</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Reward_Income"><BsArrowRightShort /> Reward Income</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5'><BiBook className="me-1 mb-1" /> History</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        {/* <Link  onClick={sm_nav_dnone} to="/dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link> */}
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Withdrawal"><BsArrowRightShort /> Withdrawal</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Withdrawal_History"><BsArrowRightShort /> Withdrawal History</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5'><BiBook className="me-1 mb-1" /> Mint</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Mint"><BsArrowRightShort /> Mint</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Mint_History"><BsArrowRightShort /> Mint History</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5'><MdOutlineGroup className="me-1 mb-1" /> Team Details</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/My_Referal"><BsArrowRightShort /> My Referal</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Matching_Income"><BsArrowRightShort /> My Team</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Level_Details"><BsArrowRightShort /> Level Details</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Leg Business</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5'><BiMessageSquareEdit className="me-1 mb-1" /> Address</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Self_Address"><BsArrowRightShort /> Self Address</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/Coin_Address"><BsArrowRightShort /> Coin Address</Link>
                                        <Link  onClick={sm_nav_dnone} to="/dashboard/NFT_Address"><BsArrowRightShort /> NFT Address</Link>
                                        {/* <Link  onClick={sm_nav_dnone} to="/dashboard/Mint"><BsArrowRightShort /> Mint</Link> */}

                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <button className='btn1 col-12 text-start fs-5' onClick={()=>handleLogout()}><FaLock className="me-1 mb-1" /> Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/dashboard/Activate_History' element={<Activate_History />} />
                <Route path='/dashboard/Staking_Details' element={<Staking_Details />} />
                <Route path='/dashboard/Profile' element={<Profile />} />
                <Route path='/dashboard/Referral_Income' element={<Referral_Income />} />
                <Route path='/dashboard/Matching_Income' element={<Matching_Income />} />
                <Route path='/dashboard/Reward_Income' element={<Reward_Income />} />
                <Route path='/dashboard/Roi_Income' element={<Roi_Income />} />
                <Route path='/dashboard/Matching_Level_Income' element={<Matching_Level_Income />} />
                <Route path='/dashboard/Buy_NFT' element={<Buy_NFT />} />
                <Route path='/dashboard/Withdrawal_History' element={<Withdrawal_History />} />
                <Route path='/dashboard/Withdrawal' element={<Withdrawal />} />
                <Route path='/dashboard/Direct_Leg_Business' element={<Direct_Leg_Business />} />
                <Route path='/dashboard/Level_Details' element={<Level_Details />} />
                <Route path='/dashboard/Matching_Tree' element={<Matching_Tree />} />
                <Route path='/dashboard/My_Referral' element={<My_Referral />} />
                <Route path='/dashboard/My_Team' element={<My_Team />} />
                <Route path='/dashboard/Coin_Address' element={<Coin_Address />} />
                <Route path='/dashboard/NFT_Address' element={<NFT_Address />} />
                <Route path='/dashboard/Self_Address' element={<Self_Address />} />
            <Route path='/dashboard/Change_Password' element={<Change_Password />} />
            <Route path='/dashboard/Mint' element={<Mint  />} />
            <Route path='/dashboard/Forgat_Password' element={<Forgat_Password />} />



            </Routes>
            <Outlet />
        </div>
    );
}

export default Navbar;