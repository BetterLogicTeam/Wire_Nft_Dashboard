import './App.css';
import store from "./Redux/index";
import { Navbar, Footer } from './Containers';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import {
  Home, Activate_History, Staking_Details, Profile, About_main, Explore_main, How_to_play_main, Tokenomics_main, Header,
  Contact_main, Login_main, Register_main, Referral_Income, Matching_Income, Reward_Income, Roi_Income, Matching_Level_Income,
  Buy_NFT, Withdrawal_History, Withdrawal, Direct_Leg_Business, Matching_Tree, My_Referral, My_Team, Coin_Address, NFT_Address,
  Self_Address, Level_Details, Index_main
} from './Routes';
import WellComePage from './Components/Welcom_page/wellComePage'
import LoginIndex from './Components/LogIn/LoginIndex';
import { Provider } from "react-redux";
import Mint from './Components/Mint/Mint';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Change_Password from './Components/Change_password/Change_Password';
import Wallet_Address_change from './Components/Wallet_Address/Wallet_Address_change';
import Forgat_Password from './Components/Forgat_Password/Forgat_Password';
import OTP from './Components/Varify-OTP/OTP';
import Varify_forget_Password from './Components/OTP_varify_forget_password/Varify_forget_Password';
import Get_Password_result from './Components/OTP_varify_forget_password/Get_Password_result';
import ChangePasswor_eamil from './Components/Change_password/ChangePasswor_eamil';
import Varify_email_change_password from './Components/Change_password/Varify_email_change_password';
import Update_profile_email from './Routes/Activation/Update_profile_email';
import ProtectedRoute from "./Paths/protectedRoutes";
import PublicRoutes from "./Paths/publicRoutes";
function App() {
  const [userAddress, setuserAddress] = useState();
  console.log("userAddress",userAddress);
  return (

    <div className="App">
      <BrowserRouter>

      <ToastContainer />

        <Routes>
          <Route exact path="/" element={<Index_main />} />
          <Route path="About_main" element={<About_main />} />
          <Route path="Explore_main" element={<Explore_main />} />
          <Route path="How_to_play_main" element={<How_to_play_main />} />
          <Route path="Tokenomics_main" element={<Tokenomics_main />} />
          <Route path="Contact_main" element={<Contact_main />} />
          <Route path="Login_main" element={<Login_main />} />
          <Route path="Register_main" element={<Register_main />} />
          <Route path="wellComePage/:email" element={<WellComePage  />} />
          <Route path="Wallet_Address_change" element={<Wallet_Address_change  />} />
          <Route path='Forgat_Password' element={<Forgat_Password />} />
          <Route path='Forget_Password_Result' element={<Get_Password_result />} />

          <Route path='OTP/:email' element={<OTP  />} />
          <Route path='Varify_forget_Password/:email' element={<Varify_forget_Password  />} />

          



          <Route exact path="/Login" element={<LoginIndex  setuserAddress={setuserAddress} />} />
          <Route exact path="/Mint" element={<Mint />} />


          <Route path="/dashboard" element={<Navbar />} >
            <Route path='/dashboard/Home' element={<Home />} />
            <Route path='/dashboard/Activate_History' element={<Activate_History />} />
            <Route path='/dashboard/Staking_Details' element={<Staking_Details />} />
            <Route path='/dashboard/Profile' element={<Profile />} />
            <Route path='/dashboard/Update_profile_email/:email/:wallet' element={<Update_profile_email />} />

            <Route path='/dashboard/ChangePasswor_eamil' element={<ChangePasswor_eamil />} />
            <Route path='/dashboard/Varify_email_change_password/:email/:password' element={<Varify_email_change_password />} />


            <Route path='/dashboard/Change_Password' element={<Change_Password />} />
            {/* <Route path='/dashboard/Forgat_Password' element={<Forgat_Password />} /> */}


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
                <Route path='/dashboard/Self_Address' element={<Self_Address userAddress={userAddress} />} />
                <Route path='/dashboard/Mint' element={<Mint  />} />
         



         
          </Route>



        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
