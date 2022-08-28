import React, { useEffect } from 'react';
import { useState } from 'react';
import { All_Participates, Joining, Total_Earning, All_Income, Earned_Wire, Earned_USD, Id_Number, Profit } from '../../Components';
import './Dashboard.css'
import { API } from "../../Redux/actions/API";
import {
  getWalletAddress,
  getAllParticipants,

} from "../../Redux/actions/dashboard";
import { useDispatch, useSelector } from 'react-redux';
import Affiliate from '../../Components/Affiliate_Link/Affiliate';
import axios from 'axios';

const Dashboard = () => {
  const dashboard = useSelector((state) => state?.dashboard);
  const user = localStorage.getItem("user");

  const dispatch = useDispatch();
  const getAllData = () => {
    if (user) {
      // let ress = JSON.parse(user);
      // let uId = ress?.uid;

      dispatch(getAllParticipants(user));

    }
  };
  useEffect(() => {

    getAllData();
  }, []);
  let [earn, setearn] = useState()
  const [netBalance, setnetBalance] = useState()
  const [withdrawal, setwithdrawal] = useState()
  const [uID, setuID] = useState()
  const [referral, setReferral] = useState()
  const [matchingicome, setmatchingicome] = useState()
  const [roiIncome, setroiIncome] = useState()
  const [earnAmount, setearnAmount] = useState()
  const [TotalAmount, setTotalAmount] = useState(0);
  const [MaxIncome, setMaxIncome] = useState(0);
  const [allParticipants, setallParticipants] = useState(0)
  const [joined_last_24_hour, setjoined_last_24_hour] = useState()
  let [participantEarned, setparticipantEarned] = useState(0)
  const [earendUSD, setearendUSD] = useState()
  const [particioatEarnd, setparticioatEarnd] = useState()
  const [EarnAmount, setEarnAmount] = useState()
  const [machingLevel, setmachingLevel] = useState(0)
  const [joinhere, setjoinhere] = useState()







  // let earn=50
  const DashboardAPI = async () => {


    try {

     
 
      let res = await API.get(`/getDashboardValues?id=${user}`)
      res = res.data.data[0]
      console.log("res", res);
      //  Total Earning-----------
      //  let Earning_Total=30000/parseInt(res.totalincome)
      //  earn=Earning_Total

      //  setearning(Earning_Total)
      console.log("Data", earn);
      localStorage.setItem("ID", res.totalincome);

      setearn(res?.totalincome)
      //  Net Balance-----------
      setnetBalance(res.netbal)
      //  Total Withdrawal-----------
      setwithdrawal(res.withdrawal)
      //  UID-----------
      setuID(res.uid)
      //  Referral Income-----------------------
      setReferral(res.directIncome)
      // Matching Income------------------------
      setmatchingicome(res.binary)
      // ROI Income---------------------
      setroiIncome(res.roiincome)
      // Your total earning----------------------
      setearnAmount(res.MaxIncome)
      // out of ---------------------------------
      setTotalAmount(res.tt)
      setjoinhere(res.totalactivationamount)
      setEarnAmount(res.EarnAmount)

      setMaxIncome(res.MaxIncome)
      setmachingLevel(res.levelincome)
      let earned_wire = res.ParticipantEarnedWire
      setparticioatEarnd(earned_wire)
      setearendUSD(res?.ParticipantEarnedUSD)

      // console.log("ParticipantEarnedWire",earned_wire);


      setallParticipants(res?.TotalMembers)
      setjoined_last_24_hour(res?.NewToday)
      // {dashboard?.allParticipants?.all_participants
      //   ? dashboard?.allParticipants?.all_participants
      //   : 0}

    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  }



  useEffect(() => {
    DashboardAPI()
 
  }, [])




  let [joining, setjoining] = new useState({
    series: [{
      name: "STOCK ABC",
      data: [[1, 34], [3, 54], [5, 23], [15, 43]]
    }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#FFFFFF']
      },
      fill: {
        colors: ['#ffffff'],
        opacity: 1,
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.8,
          opacityTo: 0,
        }
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      yaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
      }
    },
  });

  const IDHERE = localStorage.getItem("ID");
  console.log("totalEarning", user);

  let [earning, setearning] = new useState({

    series: [IDHERE],
    options: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "60%",
            colors: "#293450"
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: '#000',
            strokeWidth: '90%',
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              offsetY: 0,
              color: "#fff",
              fontSize: "1.5rem"
            },
            value: {
              show: false
            }
          }
        }
      },
      fill: {
        type: "solid",
      },
      colors: ['#ffffff'],
      stroke: {
        dashArray: 4,
      },
      labels: [IDHERE],
    },
  });
  let [earned_wire, setearned_wire] = new useState({
    series: [{
      name: "STOCK ABC",
      data: [[1, 34], [3, 54], [5, 23], [15, 43]]
    }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#FFFFFF']
      },
      fill: {
        colors: ['#ffffff'],
        opacity: 1,
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0,
          opacityTo: 0,
        }
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      yaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
      }
    },
  });
  let [id_number, setid_number] = new useState({
    series: [{
      data: [{
        x: 'category A',
        y: 10
      }, {
        x: 'category B',
        y: 18
      }, {
        x: 'category C',
        y: 13
      },
      {
        x: 'category D',
        y: 10
      }, {
        x: 'category E',
        y: 18
      }, {
        x: 'category F',
        y: 13
      },
      {
        x: 'category G',
        y: 10
      }, {
        x: 'category H',
        y: 18
      }, {
        x: 'category I',
        y: 13
      }]
    }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#FFFFFF']
      },
      fill: {
        colors: ['#ffffff'],
        opacity: 1,
        type: 'solid',
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0,
          opacityTo: 0,
        }
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      yaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
          e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
          borderRadius: 0,
          columnWidth: 7,
          barHeight: '70%',

        }
      }
    },
  });
  let [profit, setprofit] = new useState({
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            colors: "#293450"
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: '#000',
            strokeWidth: '97%',
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 10,
              color: "#fff",
              fontSize: "2.5rem"
            }
          }
        }
      },
      fill: {
        type: "solid",
      },
      colors: ['#2cd719'],
      stroke: {
        curve: 'smooth',
        lineCap: "round",
      },
      labels: ['300%'],
    },
  });





  return (
    <div className='Dashboard row m-0 justify-content-center pt-5 '>
      <div className=' row col-11 justify-content-center align-items-start gap-3'>
        <div className='col-lg-3 row m-0 p-0 gap-3'>
          <div className=''>

            <All_Participates data={{ participates_count: `${allParticipants}`, active_participates_count: `${joined_last_24_hour}` }} />
          </div>
          <div className=''>
            <Joining data={{ joined: joinhere }} opt={joining} />
          </div>
        </div>
        <Total_Earning data={{ netbalance: `${netBalance}`, withdrawal: `${withdrawal}` }} opt={earning} />
        <div className='col-lg-5 row m-0 gy-3 p-0'>
          <Id_Number data={{ id: `${uID}` }} opt={id_number} />
          <Earned_Wire data={{ joined: particioatEarnd }} opt={earned_wire} />
          <Earned_USD data={{ earned_usd: `${earendUSD} USD`, total_usd: '652.9 ', text: "Participates have earned USD" }} />
          <Affiliate data={{ earned_usd: `http://wirenft.io/Register_main?referrallink=${user}&position=Left`, total_usd: '652.9', text: "Affiliate Link Left" }} />

        </div>
        <div className='col-lg-6 mb-5 mt-4'>
          <All_Income data={{ referral_income: `${referral}`, total_referral_income: '100', matching_income: `${matchingicome}`, total_matching_income: '100', matching_level_income: `${machingLevel}`, total_matching_level_income: '30', rio_income: `${roiIncome}`, total_rio_income: '100', reward_income: '123', total_reward_income: '73' }} />
        </div>
        <div className='col-lg-5 mb-5 mt-4'>
          <Profit data={{ earned: `${earnAmount}`, earned_outof: '1500', maxIncome: `${MaxIncome}`, EarnAmount: EarnAmount }} opt={profit} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;