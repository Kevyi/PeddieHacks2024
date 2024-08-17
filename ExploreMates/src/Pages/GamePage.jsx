import Navbar from "../Components/Navbar"
import "../styles/gamepage.css"

export default function GamePage(){
    return(
           <>
           <Navbar></Navbar>
            <div className = "container">

                {/*Temporary leftside, put in song iFrame and related data*/}

                <div className = "leftside">
                    <button className = "selection">Hello</button>
                </div>

                {/*Temporary rightside, put in song iFrame and related data*/}

                <div className = "rightside">
                    <button className = "selection">Hello</button>
                </div>

            </div>
           </> 

    );
}


