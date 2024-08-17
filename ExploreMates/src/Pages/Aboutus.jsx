import Navbar from "../Components/Navbar.jsx"
import Card from "../Components/Card.jsx"
import "../styles/aboutus.css"

export default function Aboutus(){

    const personA = {name: "Kevin Hu", 
                    about : "whatever"}

    const personB = {name: "Kyle Retika", 
                    about : "whatever"}

    const personC = {name: "Vignesh Selvaraj", 
                    about : "whatever"}

    return(
        <>
        <Navbar></Navbar>
        <div className = "aboutus">
            

            <Card person = {personA}></Card>
            <Card person = {personB}></Card>
            <Card person = {personC}></Card>

        </div>
        </>
    )
}