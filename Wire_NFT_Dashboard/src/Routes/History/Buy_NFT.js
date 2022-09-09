import moment from "moment";
import { useEffect, useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";
import { API } from '../../Redux/actions/API'

const Buy_NFT = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            // let ress = JSON?.parse(user);
            // let uId = ress?.uid;

            let responce = await API?.get(`/BuyCoinRequest?id=${user}`)
            responce = responce?.data?.data;

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    user_id: `${item?.id } `,
                    package_amount: `${item?.ammountusd} USD `,
                    remark: `${item?.remark} `,
                    txn:(<><a href={`https://bscscan.com/tx/${item.tokentxn}`} className="Txn_here" target="_blank">{ item.tokentxn? (<>View Txn</>):(<>Null</>) }</a></>),
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

    var [buy_nft,set_buy_nft]= new useState({
        cols:[
                {Header:'#',accessor:'sr'},
                {Header:'User Id',accessor:'user_id'},
                {Header:'Package Amount',accessor:'package_amount'},
                {Header:'Remark',accessor:'remark'},
                {Header:'TXN',accessor:'txn'},
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',user_id:'12345',package_amount:'000 USD',remark:'Active',txn:'View txn',date:'20/07/2022'},
                {sr:'2',user_id:'12345',package_amount:'000 USD',remark:'Active',txn:'View txn',date:'20/07/2022'},
                {sr:'3',user_id:'12345',package_amount:'000 USD',remark:'Active',txn:'View txn',date:'20/07/2022'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Buy NFT",page_path:"History / Buy NFT"}} />
                <Table
                    data={[...currentPost]}
                    columns={buy_nft.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
     );
}
 
export default Buy_NFT;