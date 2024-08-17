import "../styles/home.css"
import HomeMain from "../Components/homeMain.jsx"
import Navbar from "../Components/Navbar.jsx"


export default function Home(){


        const footerText = "In completion for the 2024 PeddieHacks Hackathon.";




    return (
        <>    
        <div className = "homeMain">

            <Navbar></Navbar>
        
            <div className = {"header"}>
                <h1 style={{fontSize: "100px", margin : 0}}><b>TuneTally</b></h1>
                <div><p>Which is the better song?</p></div>
            </div>

            <HomeMain/>
            <div className = {"footer"}>

                <p>{footerText}</p>
            </div>
        </div>  
        </>
    )
}


