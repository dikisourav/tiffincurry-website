import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Demo from "./pages/Demo"

export default function App(){

return(

<Routes>

<Route path="/tiffincurry-website" element={<Home/>} />

<Route path="/demo" element={<Demo/>} />

</Routes>

)

}