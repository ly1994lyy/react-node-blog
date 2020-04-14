import React from 'react'
import "./index.scss"

function Foot() {
    return (
        <div className="footBody">
            <p onClick={()=>{
                window.location.href="http://www.beian.miit.gov.cn/"
            }}>皖ICP备20005481号</p>
        </div>
    )
}

export default Foot
