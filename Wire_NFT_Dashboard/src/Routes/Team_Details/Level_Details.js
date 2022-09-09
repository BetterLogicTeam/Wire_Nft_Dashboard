import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";
import axios from "axios";



const Level_Details = () => {



    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [filterValue, setFilterValue] = useState("");
    const [filterDate, setfilterDate] = useState("")
    const [FilterRight, setFilterRight] = useState("")





    console.log("DAte", filterDate);

    const referral_API = async () => {
        try {


            // let data=await axios.get('https://tayyab-server.herokuapp.com/students')
            // console.log("Data",data);
            const user = localStorage?.getItem("user");
            // let ress = JSON?.parse(user);
            // let uId = ress?.uid;
            // let status = ress?.status



            let responce = await API?.get(`level_details?id=${user}`)
            responce = responce?.data?.data;

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {
                if (filterValue == "" || filterValue == "0" ) {
                    if(FilterRight=="" || FilterRight=="0"){
                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) 
                    }else if(FilterRight=="1"){
                        item.top_update !== null ?

                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>
                    }else if(FilterRight=="2"){
                        console.log("InActive");
                        item.top_update == null ?
                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>
                    }
                    
                }else if (filterValue == "1" ) {
                   
                        console.log("Active2");
                        item.Leveltype == 1 ?

                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>
                }

                if (filterValue == "2") {
                   
                        console.log("2InActive");

                        item.Leveltype == 2 ?
                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>
                    
                    
                }

                if (filterValue == "3") {
                    item.Leveltype == 3 ?
                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),



                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>
                }

                if (filterValue == "4") {
                    item.Leveltype == 4 ?
                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),



                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>
                }
                if (filterValue == "5") {
                    item.Leveltype == 5 ?
                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),



                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>
                }

                if (filterValue == "6") {
                    item.Leveltype == 6 ?
                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),



                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>
                }

                if (filterValue == "7") {
                    item.Leveltype == 7 ?
                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>
                }

                if (filterValue == "8") {
                    item.Leveltype == 8 ?
                        arr?.push({
                            sr: index + 1,
                            user_id: `${item?.user_id} `,
                            level: item.Leveltype,
                            package: `${item?.pp} USD `,
                            // date: `${item?.ee} `,
                            id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),


                            activation_date: item.top_update || "Null",
                            reg_date: item.date1 || "Null",
                            // date: item?.dd
                        }) : <></>

                }


            }
            )
            console.log("responce", arr);


            setreferralApi(arr)





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


    var [level_details, set_level_details] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Level', accessor: 'level' },
            { Header: 'Reg.Date', accessor: 'reg_date' },
            { Header: 'Activation Date', accessor: 'activation_date' },
            { Header: 'ID Type', accessor: 'id_type' },
            { Header: 'Package', accessor: 'package' },
        ],
        rows: [
            { sr: '1', user_id: '726340', level: '9', reg_date: '23/06/2022', activation_date: '23/06/2022', id_type: 'Inactive', package: 'Inactive USD' },
            { sr: '2', user_id: '726340', level: '9', reg_date: '23/06/2022', activation_date: '23/06/2022', id_type: 'Inactive', package: 'Inactive USD' },
            { sr: '3', user_id: '726340', level: '9', reg_date: '23/06/2022', activation_date: '23/06/2022', id_type: 'Inactive', package: 'Inactive USD' },
            { sr: '4', user_id: '726340', level: '9', reg_date: '23/06/2022', activation_date: '23/06/2022', id_type: 'Inactive', package: 'Inactive USD' },
        ]
    });
    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Level Details", page_path: "Team Details / Level Details" }} />
                <div className="row my-4 align-items-end justify-content-center gy-4">
                    <div className="col-md-4 col-lg-4 col-8">
                        <p className="p-color p-0 m-0">Select Level</p>
                        <select className=" input bg-color ps-4" defaultValue={filterValue}
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}>
                            <option value="0">All Levels</option>
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                            <option value="6">Level 6</option>
                            <option value="7">Level 7</option>
                            <option value="8">Level 8</option>
                        </select>
                    </div>
                    <div className="col-md-4 col-lg-4 col-8 mt-n5">
                    <p className="p-color mt-1" >Choose Status :</p>
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
                    {/* <div className="col-md-4 col-lg-3 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4"
                         value={filterDate}
                         onChange={(e) => setfilterDate(e.target.value)}
                        />
                    </div> */}

                    {/* <button className="bg-primary col-md-2 col-6 col-lg-1 btn text-white" onClick={() => referral_API()}>Search</button> */}
                </div>
                <Table
                    data={currentPost}
                    columns={level_details.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />
            </div>
        </div>
    );
}

export default Level_Details;