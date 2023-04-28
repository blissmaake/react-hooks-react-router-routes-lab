import React from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import Actors from "./Actors"
import Directors from "./Directors"
import Movies from "./Movies"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </div>
  )
}

export default App
