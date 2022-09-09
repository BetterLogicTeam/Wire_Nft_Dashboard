import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMyReferralReport } from "../../Redux/actions/dailyYield";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";

const My_Referral = () => {


    const [referralApi, setreferralApi] = useState([])
    const [referralApileft, setreferralApileft] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [filterValue, setFilterValue] = useState("");
    const [FilterRight, setFilterRight] = useState("")

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;
            let status = ress?.status

            console.log("status", user);

            let responce = await API?.post('/Direct', {
                "uid": user,
                "position": 1,
                "status": 2
            })
            responce = responce?.data?.data?.recordset;

            let responceRight = await API?.post('/Direct', {
                "uid": user,
                "position": 2,
                "status": 2
            })
            responceRight = responceRight?.data?.data?.recordset;

            console.log("Res", responce);
            let arr = []
            let leftArray=[]
            responce?.forEach((item, index) => {
                if (FilterRight == 0 || FilterRight == "") {
                    arr?.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount} USD  `,
                        date: item?.ee,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                        // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                        // date: item?.dd 
                    });

                }
                if (FilterRight == 1) {
                    item.top_up == 1  ?
                    arr?.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount} USD  `,
                        date: item?.ee,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                        // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                        // date: item?.dd 
                    }) : <></>

                }
                if (FilterRight == 2) {
                    item.top_up !== 1  ?
                    arr?.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount} USD  `,
                        date: item?.ee,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                        // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                        // date: item?.dd 
                    }) : <></>

                }
                
                    
            setreferralApi(arr)

            }
            )

            responceRight?.forEach((item, index) => {     
                if (filterValue == 0 || filterValue == "") {
                    leftArray?.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount}  `,
                        date: item?.ee,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                       
                    });

                }      
                
                if (filterValue == 1) {
                    item.top_up == 1 ?
                    leftArray?.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount}  `,
                        date: item?.ee,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                       
                    })
                        : <></>

                }

                if (filterValue == 1) {
                    item.top_up !== 1 ?
                    leftArray?.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount}  `,
                        date: item?.ee,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                       
                    })
                        : <></>

                }
                
                setreferralApileft(leftArray)

            

        }
        )
            // console.log("responce", arr);







        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [filterValue,FilterRight])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostleft=referralApileft.slice(indexOfFirstPage,indexOfLastPost)


    const refReport = useSelector((state) => state?.dailyYield?.refReport);
    console.log("refReport", refReport);
    var [my_referral, set_my_referral] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Packgae', accessor: 'package' },
            { Header: 'Registration Date', accessor: 'date' },
            { Header: 'Remark', accessor: 'remark' },
            { Header: 'Activation Date Time', accessor: 'activation_date' },
            // { Header: 'Total Active Team', accessor: 'total_active_team' },
        ],
        rows: [
            { sr: '1', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '2', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '3', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '4', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '5', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '6', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '7', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '8', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '9', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
        ]
    });
    return (
        <div className="row justify-content-center">
                <PagePath data={{ page_name: "My Referral", page_path: "Team Details / My Referral" }} />
            <div className="col-md-6 py-3 mt-5">
            <h1 className="mb-0 fs-3 pe-4 border_right p-color">Left</h1>
            <div className="d-flex  align-items-center justify-content-around ">
                
                        <p className="p-color mt-1" >Choose Status :</p>
                    <div className="col-md-4 col-lg-5 col-8 ">
                        <select className=" input bg-color ps-4"
                        defaultValue={FilterRight}
                        value={FilterRight}
                        onChange={(e) => setFilterRight(e.target.value)}
                        >
                            <option value="">Select Status</option>

                            <option value="0">All</option>
                            <option value="1">Active</option>
                            <option value="2">In-Active</option>

                        </select>
                    </div>
                </div>
              
                <Table
                    data={[...currentPostleft]}
                    columns={my_referral.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
            <div className="col-md-6 py-3 mt-5">
            <h1 className="mb-0 fs-3 pe-4 border_right p-color">Right</h1>
            <div className="d-flex  align-items-center justify-content-around ">

                    <p className="p-color mt-1" >Choose Status :</p>
                    <div className="col-md-4 col-lg-5 col-8 mt-n5">
                        <select className=" input bg-color ps-4"
                            defaultValue={FilterRight}
                            value={FilterRight}
                            onChange={(e) => setFilterRight(e.target.value)}
                        >
                            <option value="">Select Status</option>

                            <option value="0">All</option>
                            <option value="1">Active</option>
                            <option value="2">In-Active</option>

                        </select>
                    </div>
                </div>
              
              
                <Table
                    data={[...currentPost]}
                    columns={my_referral.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default My_Referral;