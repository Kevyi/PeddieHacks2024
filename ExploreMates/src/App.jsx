import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GamePage from "./Pages/GamePage.jsx"
import Home from "./Pages/Home.jsx"

function App() {

  return (
    <>
     
      {/*Creates set routes/pages for people to go to.*/}
      <Router>
          <Routes>
            <Route index element = {<Home></Home>}></Route> 
            <Route path = "/gamepage" element = {<GamePage/>}></Route>
          </Routes>
      </Router>
    </>


  )
}

export default App
