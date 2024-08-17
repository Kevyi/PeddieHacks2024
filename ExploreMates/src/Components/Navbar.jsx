import {Link} from "react-router-dom"
import "../styles/navbar.css"

export default function Navbar(){

    

    return(
        <div className = "navbar">

            {/*This goes to home */}
            <p className = "subtitle">
                <Link to = "/">
                        <b>Home</b>
                </Link>
            </p>

            <p className = "subtitle">
                <Link to = "/aboutus">
                        <b>About Us</b>
                </Link>
            </p>    
            
        </div>
    );
}