import { useEffect, useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";


const Activate_History = () => {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            // let ress = JSON.parse(user);
            // let uId = ress?.uid;

            let responce = await API?.get(`ActivateHistory?id=${1}`)
           let dataaa = responce?.data.data;
           console.log("responce",dataaa);

            let arr = []
            dataaa.forEach((item, index) => {
           console.log("item",item);


                arr?.push({
                    sr: index + 1,
                    package_amount: item?.packageamount,
                    current_rate: item?.current_rate,
                    txn: item?.txn,
                    date:moment(item?.edate).format("M/D/YYYY h:m:s A")
                });



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
    }, [])


    const indexOfLastPost=currentPage*listPerpage;
    const indexOfFirstPage=indexOfLastPost-listPerpage;
    const currentPost=referralApi.slice(indexOfFirstPage,indexOfLastPost)


    var [activate_history,set_activate_history]= new useState({
        cols:[
                {Header:'#',accessor:'sr'},
                {Header:'Package Amount',accessor:'package_amount'},
                {Header:'Current Rate',accessor:'current_rate'},
                {Header:'TXN',accessor:'txn'},
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',package_amount:'100 USD',reamrk:'Activate',txn:'View txn',date:'20-05-2022'},
                {sr:'2',package_amount:'100 USD',reamrk:'Upgrade',txn:'View txn',date:'20-05-2022'},
                {sr:'3',package_amount:'100 USD',reamrk:'Upgrade',txn:'View txn',date:'20-05-2022'},
        ]});
    return ( 
        <div className="row justify-content-center" >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Activate  History",page_path:"Activation / Activate History"}} />
                <Table
                    data={currentPost}
                    columns={activate_history.cols}
                />
              <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
     );
}
 
export default Activate_History;