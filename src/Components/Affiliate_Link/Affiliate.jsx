import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Affiliate(props) {
    const [copyTest, setcopyTest] = useState(false)
    return (
        <>
            <div className="Earned_USD bg-color p-0 mt-3 br-1">
                <div className=" p-3 row">
                    <p className="p-color">{props.data.text}</p>
                    {/* <h1 className="h-color h3">{props.data.earned_usd}</h1> */}
                    <div className='main_div_Affiliate'>

                        <input class=" text-white bg-color inputAffiliate" type="text" value={props.data.earned_usd} />


                    </div>
                    <CopyToClipboard text={props.data.earned_usd}
                        onCopy={() => setcopyTest(true)}  >
                            <div className='main_class_copy'>

                        <button className='default-btn mt-3' style={{ width: '7rem' }}>Copy</button>
                    {copyTest ? <span style={{ color: 'red' }}>Copied.</span> : null}
                            </div>
                    </CopyToClipboard>
                </div>
                {/* <div className="progress-row bg-transparent br-1">
                <div className="progress-bar-row bg-white  br-1" style={{width:((props.data.earned_usd/props.data.total_usd)*100)+'%'}}></div>
            </div> */}
            </div>
        </>

    )
}
