import moment from "moment";
import { useEffect, useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";
import { API } from '../../Redux/actions/API'

const Matching_Level_Income = () => {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            // let ress = JSON?.parse(user);
            // let user = ress?.uid;
            console.log("user",user);

            let responce = await API?.post("/MatchingLevel", {
                "uid": user,
                "level":"1"
            })
            responce = responce?.data?.data?.recordset;

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    from_id: item?.user,
                    level: `${item?.leveltype}`,
                    on_amount: `${item?.package} USD`,
                    income_usd:`${item?.level_income} USD`,
                    date:moment(item?.edate).format("M/D/YYYY h:m:s A")
                });



            }
            )
            // console.log("responce", arr);


            setreferralApi(arr)





        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [])

    const indexOfLastPost=currentPage*listPerpage;
    const indexOfFirstPage=indexOfLastPost-listPerpage;
    const currentPost=referralApi.slice(indexOfFirstPage,indexOfLastPost)

    var [matching_level_income,set_matching_level_income]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                // {Header:'From ID',accessor:'from_id'},
                {Header:'Level',accessor:'level'},
                {Header:'On Amount',accessor:'on_amount'}, 
                // {Header:'Income(Wire)',accessor:'income_wire'}, 
                {Header:'Income(USD)',accessor:'income_usd'}, 
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
                {sr:'2',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
                {sr:'3',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
                {sr:'4',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
                {sr:'5',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Matching Level Income",page_path:"All Income / Matching Level Income"}} />
                {/* <div className="row my-4 align-items-end justify-content-center gy-4">
                    <div className="col-md-3 col-lg-2 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="number" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <div className="col-md-3 col-lg-2 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <div className="col-md-3 col-lg-2 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <button className="bg-primary col-md-2 col-6 col-lg-1 btn text-white">Search</button>
                </div> */}
                <Table
                    data={[...currentPost]}
                    columns={matching_level_income.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
     );
}
 
export default Matching_Level_Income;