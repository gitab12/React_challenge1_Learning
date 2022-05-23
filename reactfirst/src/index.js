import React from 'react'
import ReactDOM  from "react-dom/client"
import App from './App'



function MainContent(){

    return(
        <div>
        <App />
        
        </div>
    )
}


const demo = ReactDOM.createRoot(document.getElementById("root"))
demo.render(<MainContent/>)
