import React from 'react'
import HomeBody from "../../component/home/HomeBody"

function Home(props) {
    return (
        <div>
            <HomeBody history={props.history} />
        </div>
    )
}

export default Home
