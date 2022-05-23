import React from "react"


function Nav()
{

    return( 
    <nav className="main-logo">
    <img src ={require("../Images/logo.png")}  alt="logo" className="log-image" />
    <h3 className="text-logo">ReactFacts</h3>
    <h4 className="text-logo1">React course - Project1</h4>
    
    </nav>
    )
}
export default Nav