import React from "react";
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Service from './Service/Service'
import Contact from './Contact/Contact'


function Container () {
    return(
        <>
            <Home/>
            <Service/>
            <Portfolio/>
            <Contact/>
        </>
    )
}

export default Container