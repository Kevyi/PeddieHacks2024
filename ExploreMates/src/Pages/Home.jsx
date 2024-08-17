import "../styles/home.css"
import HomeMain from "../Components/homeMain.jsx"


export default function Home(){


        const footerText = "In completion for the 2024 PeddieHacks Hackathon.";




    return (
        <>      
            <div className = {"header"}>
                <h1 style={{fontSize: "100px", margin : 0}}>Temp Name</h1>
                <div><p>Which is the better music?</p></div>
            </div>

            <HomeMain/>

            <div className = {"footer"}>

                <p>{footerText}</p>
            </div>

        </>
    )
}


