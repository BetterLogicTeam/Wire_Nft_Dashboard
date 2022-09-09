import React from 'react'
import './LoginStyle.css'
import loginbg from "./loginbg.jpg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory,useNavigate } from "react-router-dom";
import { loginAction } from "../../Redux/actions/login";
import Web3 from "web3";
import Model from "./model";
import Confirm from "./confirm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function LoginIndex({setuserAddress}) {
    const [inputValue, setInputValue] = useState("");
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChangeInput = (e) => {
      setInputValue(e.target.value);
    };
    const handleLogin = async () => {
      let res = await dispatch(loginAction(inputValue));
      if (res) {
        setTimeout(() => {
          setAccount("");
  
          Navigate("/dashboard");
        }, 1000);
        // window.location.reload()
      } else {
        toast.error("Something went wrong ! ");
      }
    };
    const handleLogin2 = async (ids) => {
      let res = await dispatch(loginAction(ids));
      if (res) {
        setTimeout(() => {
          setAccount("");
          Navigate("/dashboard");
        }, 1000);
        // window.location.reload()
      } else {
        toast.error("Something went wrong ! ");
      }
    };
  
    const [account, setAccount] = useState(null);
    const [registered, setRegistered] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    // setRegistered ,handleLogin
    const [chainId, setChainId] = useState(null);
    const metamask = async () => {
      let isConnected = false;
      try {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
          isConnected = true;
        } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
          isConnected = true;
        } else {
          isConnected = false;
        }
        if (isConnected === true) {
          const web3 = window.web3;
          let accounts = await web3.eth.getAccounts();
          if (account !== accounts[0]) {
            setAccount(accounts[0]);
            setuserAddress(account[0])
          }
          if (inputValue !== accounts[0]) {
            setInputValue(accounts[0]);
          }
          let chain = await web3.eth.getChainId();
          setChainId(chain);
          if (chain === 56) {
            // handleLogin2(accounts[0]);
          }
          window.ethereum.on("accountsChanged", async function (accounts) {
            if (account !== accounts[0]) {
              setAccount(accounts[0]);
            setuserAddress(account[0])

            }
            if (inputValue !== accounts[0]) {
              setInputValue(accounts[0]);
              
            }
            let chain = await web3.eth.getChainId();
            setChainId(chain);
            if (chain === 56) {
              // handleLogin2(accounts[0]);
            }
          });
        }
      } catch (error) {
        console.log("error message", error?.message);
      }
    };
    // useEffect(() => {
    //   metamask();
    //   interv = setInterval(() => {
    //     metamask();
    //   }, 1500);
    // }, []);
    useEffect(() => {
      return () => {
        setInputValue("");
        setAccount("");
        // if (interv) {
        //   clearInterval(interv);
        // }
      };
    }, []);
  return (
    <>
    <div
        id="reg-layout"
        className="devsBg"
        style={{
          backgroundImage: `url(${loginbg})`,
          backgroundSize: "cover",
        //   backgroundColor: "#000",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <ToastContainer />

        {openLogin && <Confirm handleLogin={handleLogin} setRegistered={setOpenLogin} />}
        {registered && <Model setRegistered={setRegistered} />}
        <div class="container">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <div class="row bx_hover">
                <div class="col-md-6 bdr_non">
                  <div class="reg-box">
                    <div class="reg-content">
                      <div class="login_hd">
                        <h2>
                          <a href="#">Login</a>
                        </h2>
                      </div>
                      <div class="subtitle">
                        Connect wallet or Enter Id to Login
                      </div>
                      <div class="ule_logo">
                        <img src="assets/images/Icon/metamask.png" />
                      </div>
                      {account === null && (
                        <span id="metamaskConnections" style={{ color: "red" }}>
                          MetaMask is not connected..!..Wait...
                        </span>
                      )}
                      {chainId !== null && chainId !== 56 && (
                        <span id="metamaskConnections" style={{ color: "red" }}>
                          Please Select BSC Network ..!
                        </span>
                      )}
                      <button
                        class="btn loginbtn"
                        onClick={metamask}
                        id="vendor"
                      >
                        Connect Wallet
                      </button>
                      
                      <form>
                        <div class="form-row">
                          <input
                            id="loginid"
                            class="input_bg"
                            type="text"
                            maxlength="100"
                            onChange={handleChangeInput}
                            value={inputValue}
                            placeholder="Please enter ID or MetaMask address "
                            className="form-input"
                          />
                        </div>
                        <div class="form-row">
                          <input
                            type="button"
                            onClick={()=>setOpenLogin(true)}
                            class="btn loginbtn"
                            value="Login"
                            id="myBtn25"
                            readonly
                          />
                        </div>
                        {
                          <div class="form-row">
                            <input
                              type="button"
                              onClick={() => setRegistered(true)}
                              class="btn loginbtn"
                              value="Registered"
                              id="myBtn25"
                              readonly
                            />
                          </div>
                        }
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 bdl_non">
                  <div class="reg-box">
                    <div class="reg-content">
                      <center>
                        <a href="index.html">
                          <img
                            src="assets/images/logo.png"
                            style={{ width: "109px" }}
                          />
                        </a>
                        <br />
                        <p style={{ color: "#000", fontSize: "13px" }}>
                          Follow us on Telegram
                        </p>
                        <br />
                        <ul class="social-media">
                          <li>
                            <a
                              href="https://t.me/joinchat/U8ot8F38yb4zZjY1"
                              target="_blank"
                            >
                              <img src="assets/images/Icon/telegram.png" />
                            </a>
                          </li>
                        </ul>
                        <br />
                        <p style={{ color: "#000", fontSize: "13px" }}>
                          Any query you can get support:
                        </p>
                        <br />

                        <input
                          class="right-btn-styl"
                          type="button"
                          value="Support in Telegram EN"
                        />
                        <br />
                        <br />
                        <br />
                        <a
                          class="left-btn-styl loginbtn"
                          href="/"
                          title="Go To Home"
                          id="gotohome"
                        >
                          Go To Home
                        </a>
                        <br />
                        <br />

                        <div class="form-row displayNone"></div>
                        {/* <span id="metamaskConnection" style={{ color: "red" }}>Please Install MetaMask!</span> */}
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        type="text/css"
        href="assets/loginAssets/css/2.d34346ea.chunk.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/loginAssets/css/main.f70df022.chunk.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/loginAssets/css/bootstrap.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/loginAssets/css/login.css"
      />
        
    </>
  )
}
