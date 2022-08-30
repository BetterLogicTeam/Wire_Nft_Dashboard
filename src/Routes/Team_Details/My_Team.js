import moment from "moment";
import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'


const My_Team = () => {


    const [referralApi, setreferralApi] = useState([])
    const [leftreferralApi, setleftreferralApi] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)
    const [getuerid, setgetuerid] = useState("")
    const [filterValue, setFilterValue] = useState("");
    const [FilterRight, setFilterRight] = useState("")
    


    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;
            let status = ress?.status

            let responceRight = await API?.post('/MyLeftDownline', {
                "uid": user,
                "status": 2
            })
            responceRight = responceRight?.data?.data?.recordset;
            console.log("responceRight", responceRight);


            let responce = await API?.post('/MyRightDownline', {
                "uid": user,
                "status": 2
            })
            responce = responce?.data?.data?.recordset;

            console.log("Res", responce);



            console.log("465539", getuerid);
            let arr = []
            let arrayLeft = []
            responce?.forEach((item, index) => {
                if (FilterRight == 0 || FilterRight == "") {
                    arr?.push({
                        sr: index + 1,
                        id: `${item?.uid} `,
                        Wallet: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
                        date_time: `${item?.edate} `,
                        remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                        activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),
                        staking: item.packageamount,
                        // date: item?.dd
                    });

                }
                if (FilterRight == 1) {
                    item.top_update !== null ?
                        arr?.push({
                            sr: index + 1,
                            id: `${item?.uid} `,
                            Wallet: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
                            date_time: `${item?.edate} `,
                            remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),
                            staking: item.packageamount,
                            // date: item?.dd
                        }) : <></>

                }
                if (FilterRight == 2) {
                    item.top_update == null ?
                        arr?.push({
                            sr: index + 1,
                            id: `${item?.uid} `,
                            Wallet: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
                            date_time: `${item?.edate} `,
                            remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),
                            staking: item.packageamount,
                            // date: item?.dd
                        }) : <></>

                }



                setreferralApi(arr)



            }
            )

            responceRight?.forEach((item, index) => {
                console.log("getuerid", filterValue)
                if (filterValue == 0 || filterValue == "") {
                    // item.top_update !== null ?
                    arrayLeft?.push({
                        sr: index + 1,
                        id: `${item?.uid} `,
                        Wallet: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),

                        date_time: `${item?.edate} `,
                        remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                        activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),

                        staking: item.packageamount,

                        // date: item?.dd

                    })
                    // :<></>

                }
                if (filterValue == 1) {
                    item.top_update !== null ?
                        arrayLeft?.push({
                            sr: index + 1,
                            id: `${item?.uid} `,
                            Wallet: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),

                            date_time: `${item?.edate} `,
                            remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),

                            staking: item.packageamount,

                            // date: item?.dd

                        })
                        : <></>

                }

                if (filterValue == 2) {
                    item.top_update == null ?
                        arrayLeft?.push({
                            sr: index + 1,
                            id: `${item?.uid} `,
                            Wallet: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),

                            date_time: `${item?.edate} `,
                            remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),

                            staking: item.packageamount,

                            // date: item?.dd

                        })
                        : <></>

                }
                setleftreferralApi(arrayLeft)



            }
            )
            console.log("responce", arrayLeft);







        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [filterValue, FilterRight])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const indexOfLastPost2 = currentPage2 * listPerpage2;
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostleft = leftreferralApi.slice(indexOfFirstPage2, indexOfLastPost2)





    var [my_team, set_my_team] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'ID', accessor: 'id' },
            // { Header: 'Wallet', accessor: 'Wallet' },
            { Header: 'Registration Date', accessor: 'date_time' },
            { Header: 'Remark', accessor: 'remark' },
            { Header: 'Activation Date ', accessor: 'activation_date' },
            { Header: 'Package', accessor: 'staking' },
        ],
        rows: [
            { sr: '1', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
            { sr: '2', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
            { sr: '3', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
            { sr: '4', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
        ]
    });
    return (
        // <div className="container">
        <div className="row justify-content-center">
            <PagePath data={{ page_name: "My Team", page_path: "Team Details / My Team" }} />
            <div className="col-md-6 py-3 mt-5">
                <h1 className="mb-0 fs-3 pe-4 border_right p-color">Left</h1>

                <div className="d-flex  align-items-center justify-content-around ">

                    <p className="p-color mt-1" >Choose Status :</p>
                    <div className="col-md-4 col-lg-5 col-8 mt-n5">
                        <select className=" input bg-color ps-4"
                            defaultValue={filterValue}
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}
                        >
                            <option value="">Select Status</option>

                            <option value="0">All</option>
                            <option value="1">Active</option>
                            <option value="2">In-Active</option>

                        </select>
                    </div>
                </div>

                <Table
                    data={currentPostleft}
                    columns={my_team.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage2} indexOfLastPost={indexOfLastPost2} setcurrentPage={setcurrentPage2} currentPage={currentPage2} totalData={leftreferralApi.length} listPerpage={listPerpage2} />

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
                    data={currentPost}
                    columns={my_team.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>

        // </div>
    );
}

export default My_Team;