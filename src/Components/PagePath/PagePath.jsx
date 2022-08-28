import { BiHomeCircle } from "react-icons/bi";
import {FaAngleRight} from "react-icons/fa";
const Page_Path = (props) => {
    return ( 
        <div className="Page_Path h-color d-none d-md-flex flex-row align-items-center">
            <h1 className="mb-0 fs-3 pe-4 border_right p-color">{props.data.page_name}</h1>
            <BiHomeCircle className="fs-3 ms-4" />
            <FaAngleRight className="fs-3 ms-1"/>
            <h2 className="mb-0 fs-5 ps-1">{props.data.page_path}</h2>
        </div>
     );
}
 
export default Page_Path;