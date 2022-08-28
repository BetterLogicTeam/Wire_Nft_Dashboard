import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Web3 from "web3";
import { API } from "../../Redux/actions/API";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { loginAction } from "../../Redux/actions/login";
import { useDispatch } from "react-redux";
import { useHistory,useNavigate } from "react-router-dom"
export default function FormDialog({ setRegistered }) {
  const history = useNavigate();
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [RefID, setRefID] = useState()
  const user = localStorage.getItem("user");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRegistered(false);
  };
  const [sId, setSId] = useState(null);
  const [account, setAccount] = useState(null);
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
        setAccount(accounts[0]);
        let chain = await web3.eth.getChainId();
        setChainId(chain);
        window.ethereum.on("accountsChanged", async function (accounts) {
          setAccount(accounts[0]);
          let chain = await web3.eth.getChainId();
          setChainId(chain);
        });
      }

      console.log("Account",account);
    } catch (error) {
      console.log("error message", error?.message);
    }
  };



  const ReferralAddress = async () => {
    const user = localStorage.getItem("user");

    let ress = JSON.parse(user);
    let uId = ress?.user_id;
    console.log("UID", uId);
    try {

      let URL = window.location.href;


      // const str = 'https://www.ulenft.network/login?referrallink=464867';
      // var pathArray = str.split( '=' );
      // alert(pathArray[pathArray.length-1]);
      // console.log("last",pathArray[pathArray.length-1])
      console.log("LAST", URL);

      if (URL.includes("referrallink")) {
        let pathArray = URL.split('=');
        // console.log("LAST");
        setRefID(pathArray[pathArray.length - 1])
        setSId(pathArray[pathArray.length - 1])


      } else {

      }



    } catch (e) {
      console.log("Erroe Whille Referral Fuction Call", e);
    }
  }

  const registered = async () => {
    try {
      console.log("SID", sId);
      alert(`Are You Sure! Your referral ID is This: ${sId}`)
      const res = await API.post(`/registration`, {
        sid: sId,
        uid: "",
        accountnumber: account,
        email: "",
        addresslist: "",
        paymentType: "",
        amount: "",
        traxn: account,
        status: "success",
        amount1: "",
        amount2: "",
      });
      console.log(res);
      handleLogin2(account);
      toast.success("Successfully registered !");
    } catch (e) {
      console.log("error", e);
      toast.error("Something went wrong !");
    }
  };
  const handleLogin2 = async (ids) => {
    let res = await dispatch(loginAction(ids));
    console.log("Res",res);
    if (res) {
      setTimeout(() => {
        history("/dashboard");
      }, 1000);
      window.location.reload()
    } else {
      toast.error("Something went wrong ! ");
    }
  };
  useEffect(() => {
    metamask();
    ReferralAddress()
  }, []);
  return (
    <div>
      <ToastContainer />

      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        className="modalContainer "
      >
        <DialogTitle
          id="form-dialog-title"
          className="d-flex justify-content-center align-items-center ModelWidth"
          style={{ fontSize: "20px" }}
        >
          Register an Account
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="number"
            placeholder="Please enter upline ID or referral link "
            fullWidth
            value={RefID}
            onChange={(e) => setSId(e.target.value)}
          />
          <DialogContentText className="mt-1 textStyle">
            Enter the account id or referral link
          </DialogContentText>
        </DialogContent>
        <DialogActions className="d-flex justify-content-center align-items-center">
          <Button onClick={registered} className="loginbtn">
            Ok
          </Button>
          <Button onClick={handleClose} className="loginbtn">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
