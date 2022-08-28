import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Mint_Style.css'
import { Header } from "../../Routes/index";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { busdNftTokenAbi, busdNftTokenAddress, ULE_NFT_100, ULE_NFT_100_ABI, wireNftContractAbi, wireNftContractAddress, wireTokenAbi, wireTokenAddress } from '../../utilies/Bsc_contract';
import { loadWeb3 } from '../../apis/api';
import Web3 from 'web3'
import horse from '../../assets/22.png'


export default function Mint() {
    let [btnTxt, setBtTxt] = useState("Connect")
    let NetId
    const getAccount = async () => {
        const web3 = window.web3;

        window.web3 = new Web3(window.ethereum);

        await window.web3.eth.getChainId((err, netId) => {

            console.log("netid", netId);
            NetId = netId

        }
        )



        if (NetId == 56) {


            let acc = await loadWeb3();



        } else {
            toast.error("Wrong Newtwork please connect to BSC MainNet")


        }


        await window.ethereum.enable();
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            setBtTxt("No Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else {
            let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setBtTxt(myAcc);

        }

    }

    useEffect(() => {
        setInterval(() => {


        }, 1000);
        getAccount()
    }, []);

    let [value, setValue] = useState(1)
    let [point, setPoint] = useState(0);
    let [mintPriceBnb, setMintPriceBnb] = useState(0);
    let [mintPriceBUSD, setMintPriceBUSD] = useState(0);
    let [mintPriceWire, setmintPriceWire] = useState(0);
    let [btnOne, setButtonOne] = useState("Mint With BNB");
    let [btnTwo, setButtonTwo] = useState("Mint With Wire");
    let [btnThree, setButtonThree] = useState("Mint With Busd")
    const [inputdatahere, setinputdatahere] = useState("100")
    const [showModal, setShowModal] = useState(false)
    const [ImgeURL, setImgeURL] = useState()

    const [showModal3, setShowModal3] = useState(false)

    const [subMitFunction, setsubMitFunction] = useState()







    const increaseValue = () => {
        if (value < 5) {
            setValue(++value)
            console.log("setValue", value)
        }

    }

    const decreaseValue = () => {
        if (value > 1) {
            setValue(--value)
            console.log("setValue", value)
        }

    }







    const myMintBNB = async () => {
        // console.log("res",inputValue)
        setShowModal(false)
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to BSC MainNet ")
        } else {
            try {

                console.log("value_change", value);

                let res = await axios.get(`https://whenftapi.herokuapp.com/checkuser?id=${inputdatahere}`)
                // console.log("resdatahere", res.data);
                res = res.data.data;

                // if (res == 1) {
                    try {

                        setButtonOne("Please Wait While Processing")
                        // console.log("mintFor BNB");
                        const web3 = window.web3;
                        let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);



                        let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                        // console.log("totalnft", totalnft);

                        if (value > totalnft) {
                            toast.error(`Maximum Limit is ${totalnft} `)
                        } else {
                            let maxSupply = await nftContractOf.methods.maxsupply().call();

                            let ttlSupply = await nftContractOf.methods.totalSupply().call();
                            let paused = await nftContractOf.methods.paused().call();
                            let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                            let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_BNB().call()

                            // console.log("jjjjj", mintingbnbPrice);
                            // mintingbnbPrice = mintingbnbPrice[0]
                            // mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
                            mintingbnbPrice = parseFloat(mintingbnbPrice)
                            // console.log("finalwhe", mintingbnbPrice);

                            // setMintPriceBnb(mintingbnbPrice)
                            let totalMintingPriceBNB = value * mintingbnbPrice
                            let getdata = await axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT")
                            // console.log("data_chack_here", getdata.data.price);
                            getdata = getdata.data.price
                            // console.log("Minting_totalMintingPriceBNB= ", totalMintingPriceBNB);
                            let usid = totalMintingPriceBNB * getdata
                         



                            // if (llisted_check == 'true') {
                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {
                                        // console.log("Minting Value= ", value);

                                        // let usid=

                                        // let BusdPrice = await nftContractOf.methods.WhitelistMintingPricein_MATIC().call();
                                        // BusdPrice = BusdPrice * value;
                                        let hash = await nftContractOf.methods.mint_with_bnb(value).send({
                                            from: acc,
                                            value: totalMintingPriceBNB.toString()

                                        })
                                        toast.success("Transaction Confirmed")
                                        setButtonOne("Mint With BNB")
                                        // console.log("hash", hash.transactionHash);
                                        hash = hash.transactionHash
                                        let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                                            "uid": inputdatahere,
                                            "address": acc,
                                            "nft": value,
                                            "token": mintingbnbPrice,
                                            "txn": hash
                                        })

                                        // console.log("postapi", postapi);
                                        // toast.success(postapi.data.data)
                                        setinputdatahere(" ")



                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setButtonOne("Mint With BNB")

                                    }
                                } else {
                                    toast.error("Paused is False")
                                    setButtonOne("Mint With BNB")

                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setButtonOne("Mint With BNB")

                            }
                            // }
                            // else {


                            //     let hash = await nftContractOf.methods.mint_with_MATIC(value).send({
                            //         from: acc,
                            //         value: totalMintingPriceBNB.toString()
                            //     })
                            //     // console.log("hash", hash.transactionHash);
                            //     hash = hash.transactionHash
                            //     let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                            //         "uid": inputdatahere,
                            //         "address": acc,
                            //         "nft": value,
                            //         "token": mintingbnbPrice,
                            //         "txn": hash
                            //     })

                            //     // console.log("postapi", postapi);
                            //     toast.success(postapi.data.data)
                            //     setinputdatahere(" ")
                            //     toast.success("Transaction Confirmed")



                            //     // toast.error(" Please White Listed Address")
                            //     setButtonOne("Mint With BNB")


                            // }
                        }

                    } catch (e) {
                        console.log("Error while minting BNB ", e)
                        toast.error("Transaction failed")
                        setButtonOne("Mint With BNB")

                    }
                // } else {
                //     toast.error("User Is Not Exists")
                //     setinputdatahere(" ")
                //     setButtonOne("Mint With BNB")
                // }


            } catch (e) {
                setinputdatahere(" ")
                toast.error("User Is Not Exists")
                setButtonOne("Mint With BNB")


            }

        }
    }



    const myMintWire = async () => {





        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to BSC MainNet ")
        } else {
            try {
                // console.log("inputdatahere", inputdatahere);

                // let res = await axios.get(`https://whenftapi.herokuapp.com/checkuser?id=${inputdatahere}`)

                // res = res.data.data;
                // if (res == 1) {
                try {
                    setButtonTwo("Please Wait While Processing")
                    // console.log("mintFor Wire");
                    const web3 = window.web3;
                    let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);

                    let wireContractOf = new web3.eth.Contract(wireTokenAbi, wireTokenAddress);
                    let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                    // console.log("totalnft", totalnft);

                    if (value > totalnft) {
                        toast.error(`Maximum Limit is ${totalnft} `)
                    } else {
                        let userBusdBalance = await wireContractOf.methods.balanceOf(acc).call();
                        console.log("userBusdBalance", userBusdBalance);
                        // userBusdBalance = web3.utils.fromWei(userBusdBalance)
                        let maxSupply = await nftContractOf.methods.maxsupply().call();
                        let ttlSupply = await nftContractOf.methods.totalSupply().call();
                        let paused = await nftContractOf.methods.paused().call();
                        let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                        let mintingWirePrice = await nftContractOf.methods.MinitngPricein_wire().call()
                        // mintingWirePrice = mintingWirePrice[1]
                        mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
                        // console.log("mintingWirePrice", mintingWirePrice);
                        mintingWirePrice = parseFloat(mintingWirePrice);
                        let totalMintingPriceWire = value * mintingWirePrice + 0.01
                        totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
                        // console.log("totalMintingPriceWire",totalMintingPriceWire);


                        // if (llisted_check == 'true') {

                        if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                            if (paused == false) {
                                if (value < parseInt(maxLimitprTransaction)) {
                                    if (parseFloat(userBusdBalance) >= totalMintingPriceWire) {
                                        // console.log("Minting Value= ", value);
                                        // console.log("Minting totalMintingPriceWire= ", totalMintingPriceWire);



                                        await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
                                            from: acc
                                        })
                                        toast.success("Approve Confirmed")

                                        // console.log("totalMintingPriceWire", totalMintingPriceWire);
                                        // console.log("value", value);
                                        let data_value = value


                                        let hash = await nftContractOf.methods.mint_with_wire(data_value, totalMintingPriceWire).send({
                                            from: acc,
                                        })
                                        

                                        toast.success("Transaction Confirmed")

                                        //   hash = hash.transactionHash
                                        let postapi = await axios.post('https://ule-nft-api-1.herokuapp.com/buynfttoken', {
                                            "uid": "101010",
                                            "address": acc,
                                            "nft": value,
                                            "token": totalMintingPriceWire,
                                            "usd": "200",
                                            "nftcontract": ULE_NFT_100,
                                            "url": ImgeURL,
                                            //   "txn": hash
                                        })

                                        console.log("postapi", postapi);
                                        toast.success("Success", postapi.data.data)


                                        setButtonTwo("Mint With Wire")
                                        setinputdatahere(" ")



                                        // let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_MMX().call();
                                        // let z = value * BusdPrice;


                                        // await wireContractOf.methods.approve(wireNftContractAddress, z).send({
                                        //     from: acc
                                        // })
                                        // toast.success("Transaction Confirmed")
                                        // setButtonTwo("Please Wait for Second Confirmation")
                                        // let hash = await nftContractOf.methods.mint_with_MMX(value, z.toString()).send({
                                        //     from: acc,
                                        // })
                                        // toast.success("Transaction Succefful")
                                        // setButtonTwo("Mint With Wire")
                                        // // console.log("hash", hash.transactionHash);
                                        // hash = hash.transactionHash
                                        // let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                                        //     "uid": inputdatahere,
                                        //     "address": acc,
                                        //     "nft": value,
                                        //     "token": z,
                                        //     "txn": hash
                                        // })
                                        // toast.success("Transaction Confirmed")

                                        // // console.log("postapi", postapi);
                                        // toast.success("Success", postapi.data.data)
                                        // setinputdatahere(" ")


                                    } else {
                                        toast.error("Out Of Balance")
                                        setButtonTwo("Mint With Wire")

                                    }

                                } else {
                                    toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                    setButtonTwo("Mint With Wire")

                                }
                            } else {
                                toast.error("Paused is False")
                                setButtonTwo("Mint With Wire")

                            }

                        } else {
                            toast.error("Max Supply is Greater than total Supply")
                            setButtonTwo("Mint With Wire")

                        }

                        // }
                        // else {




                        // }
                    }



                } catch (e) {
                    console.log("Error while minting ", e)
                    toast.error("Transaction failed")
                    setButtonTwo("Mint With Wire")

                }
                // } else {
                //     toast.error("User Is Not Exists")
                //     setinputdatahere(" ")


                // }


            } catch (e) {
                console.log("Transaction failed", e);
                toast.error("Transaction failed")
                setinputdatahere(" ")


            }




        }
    }
    const myMintBUSD = async () => {
        let acc = await loadWeb3();
        setShowModal3(false)

        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to BSC MainNet ")
        } else {
            try {
                // console.log("inputdatahere", inputdatahere);

                let res = await axios.get(`https://whenftapi.herokuapp.com/checkuser?id=${inputdatahere}`)
                // console.log("resdatahere", res.data.data);
                res = res.data.data;
                if (res == 1) {
                    try {
                        setButtonThree("Please Wait While Processing")
                        // console.log("mintFor BUSD");
                        const web3 = window.web3;
                        let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                        let busdContractOf = new web3.eth.Contract(busdNftTokenAbi, busdNftTokenAddress);
                        let userBusdBalance = await busdContractOf.methods.balanceOf(acc).call();

                        userBusdBalance = web3.utils.fromWei(userBusdBalance)
                        console.log("userBusdBalance", userBusdBalance);
                        let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                        // console.log("totalnft", totalnft);
                        if (value > totalnft) {
                            toast.error(`Maximum Limit is ${totalnft} `)
                        } else {
                            let maxSupply = await nftContractOf.methods.maxsupply().call();
                            let ttlSupply = await nftContractOf.methods.totalSupply().call();
                            let paused = await nftContractOf.methods.paused().call();
                            let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                            let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()

                            // mintingBusdPrice = web3.utils.toWei(mintingBusdPrice);
                            mintingBusdPrice = parseFloat(mintingBusdPrice)
                            // setMintPriceBUSD(mintingBusdPrice)
                            let totalMintingPriceBusd = value * mintingBusdPrice + 0.01
                            // totalMintingPriceBusd = web3.utils.toWei(totalMintingPriceBusd.toString())

                            console.log("totalMintingPriceBusd", totalMintingPriceBusd);
                           


                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {
                                        if (parseFloat(userBusdBalance) >= totalMintingPriceBusd) {
                                            // console.log("Minting Value= ", value);
                                            // console.log("Minting totalMintingPriceWire= ", totalMintingPriceBusd);
                                            // let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_BUSD().call();


                                            // BusdPrice = parseFloat(BusdPrice)
                                            // let b = BusdPrice * value;

                                            totalMintingPriceBusd = web3.utils.toWei(totalMintingPriceBusd.toString())
                                            //  let ContractOfBUSD = new web3.eth.Contract(busdNftTokenAbi, cancelAnimationFrame);


                                            await busdContractOf.methods.approve(wireNftContractAddress, totalMintingPriceBusd).send({
                                                from: acc
                                            })
                                            setButtonThree("Please Wait For Second Confirmation")
                                            toast.success("Transaction Confirmed")
                                            let hash = await nftContractOf.methods.mint_with_BUSD(value, totalMintingPriceBusd).send({
                                                from: acc,
                                            })
                                            toast.success("Transaction Confirmed")


                                            hash = hash.transactionHash
                                            let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                                                "uid": inputdatahere,
                                                "address": acc,
                                                "nft": value,
                                                "token": totalMintingPriceBusd,
                                                "txn": "vgd54"
                                            })

                                            setButtonThree("Mint With Busd")
                                            toast.success("Transaction Succefful")
                                            // console.log("postapi", postapi);
                                            toast.success("Success", postapi.data.data)
                                            setinputdatahere(" ")


                                        } else {
                                            toast.error("Out Of Balance")
                                            setButtonThree("Mint With Busd")

                                        }

                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setButtonThree("Mint With Busd")

                                    }
                                } else {
                                    toast.error("Paused is False")
                                    setButtonThree("Mint With Busd")

                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setButtonThree("Mint With Busd")

                            }
                            // }
                            // else {
                            //     totalMintingPriceBusd = web3.utils.toWei(totalMintingPriceBusd.toString())
                            //     await busdContractOf.methods.approve(wireNftContractAddress, totalMintingPriceBusd).send({
                            //         from: acc
                            //     })

                            //     let hash = await nftContractOf.methods.mint_with_BUSD(value, totalMintingPriceBusd).send({
                            //         from: acc,
                            //     })
                            //     toast.success("Transaction Confirmed")

                            //     hash = hash.transactionHash
                            //     let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                            //         "uid": inputdatahere,
                            //         "address": acc,
                            //         "nft": value,
                            //         "token": totalMintingPriceBusd,
                            //         "txn": "xsdd44"
                            //     })

                            //     // console.log("postapi", postapi);
                            //     toast.success("Success", postapi.data.data)

                            //     setButtonThree("Mint With Busd")
                            //     setinputdatahere(" ")


                            // }
                        }



                    } catch (e) {
                        console.log("Error while minting ", e)
                        toast.error("Transaction failed BUSD")
                        setButtonThree("Mint With Busd")

                    }


                } else {
                    toast.error("User Is Not Exists")
                    setinputdatahere(" ")


                }

            } catch (e) {
                console.log("User Is Not Exists", e);
                toast.error("Error While Fatching Get API")
            }




        }
    }







    const getMydata = async () => {




        try {

            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
            let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()
            // mintingBusdPrice = web3.utils.fromWei(mintingBusdPrice);
            mintingBusdPrice = parseFloat(mintingBusdPrice)
            setMintPriceBUSD(mintingBusdPrice)


            let mintingWirePrice = await nftContractOf.methods.MinitngPricein_wire().call()
            // mintingWirePrice = mintingWirePrice[1]
            mintingWirePrice = web3.utils.fromWei(mintingWirePrice)
            mintingWirePrice = parseFloat(mintingWirePrice).toFixed(1)
            setmintPriceWire(mintingWirePrice);

            let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_BNB().call()
            // mintingbnbPrice = mintingbnbPrice[0]

            mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
            // console.log("mintingbnbPrice", mintingbnbPrice);
            mintingbnbPrice = parseFloat(mintingbnbPrice).toFixed(4)
            setMintPriceBnb(mintingbnbPrice)


        } catch (e) {
            console.log("Error while getting minting Price", e);
        }

    }


    //   const Sponser = () => {

    //       setShowModal(true)
    //       if (showModal == true) {


    //       }
    //   }
    //   const Sponser2 = () => {

    //       setShowModal2(true)

    //   }
    //   const Sponser3 = () => {

    //       setShowModal3(true)

    //   }






    useEffect(() => {
        setInterval(() => {

            getMydata();
        }, 1000);



    }, [])

    return (
        <div>
            

            {/* <section class="page-header-section style-1">
                <div class="container">
                    <div class="page-header-content">
                        <div class="page-header-inner">
                            <div class="page-title">
                                <h2>Mint </h2>
                            </div>
                            <ol class="breadcrumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li class="active">Mint</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="mint2">

                <div className="container">

                    <h1>MINT WITH USD</h1>


                    <div className="row mt-5">
                        <div className="">
                            <div className="row">
                                <div className="col-md-5">
                                    <div class="mint-image welcome-thumb mb-50 item">
                                        <div class="account-img">
                                            <img src={horse} alt="shape-image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="mint-content">
                                        <div className="mint-item">
                                            <div className="quantity">

                                                {/* <div className="">
                                <button className="btn count-form" type="text" value={value} onChange={(e) => setValue(e.target.value)} id="qtyBox" >1
                                    </button>

                            </div> */}

                                                <div className="top_div_here">
                                                    <input className="bcs" type="number" name="number" onChange={(e) => setValue(e.target.value)} value={value} ></input>

                                                    <div className="btn-area1 mt-5 text-white">

                                                        <div class="banner-btns d-flex flex-wrap" onClick={() => myMintBNB()}>
                                                            <a href="#" class="default-btn move-right">
                                                                <span>{btnOne}</span>
                                                            </a>
                                                        </div>

                                                        <p className="fs-4 ms-4 text-white">Price : {mintPriceBnb} BNB</p>
                                                    </div>
                                                    <div className="btn-area1 mt-5">

                                                        <div class="banner-btns d-flex flex-wrap" onClick={() => myMintWire()}>
                                                            <a href="#" class="default-btn move-right">
                                                                <span>{btnTwo}</span>
                                                            </a>
                                                        </div>
                                                        <p className="fs-4 text-white" style={{ marginLeft: "1rem" }}>Price : {mintPriceWire} Wire</p>
                                                    </div>
                                                    <div className="btn-area1 mt-5">
                                                        <div class="banner-btns d-flex flex-wrap" onClick={() => myMintBUSD()}>
                                                            <a href="#" class="default-btn move-right">
                                                                <span>{btnThree}</span>
                                                            </a>
                                                        </div>


                                                        <p className="fs-4 text-white">Price : {mintPriceBUSD} BUSD</p>
                                                    </div>





                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
