import {Link} from "react-router-dom"
import "../styles/home.css"
import mainImage from"../assets/Spotify.png"

export default function homeMain(){
    return(
        <div className = {"main"}>

                <img className = {"mainImage"} src = {mainImage} alt = "A picture of something- Change"></img>

                <Link to = "/gamepage" className = {"link-styles"}>
                        <button className = {"playButton"}>
                           <b>Play</b>
                        </button>
                </Link>
                
        </div>
    )
}