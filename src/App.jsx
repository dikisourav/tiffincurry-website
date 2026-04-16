import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Demo from "./pages/Demo"
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import ScrollToTop from "./components/ScrollToTop";


export default function App(){

return(
<>
    <ScrollToTop/>
    <Routes>
        
        <Route path="/tiffincurry-website" element={<Home/>} />

        <Route path="/tiffincurry-website/demo" element={<Demo/>} />

        <Route path="/tiffincurry-website/pricing" element={<Pricing/>} />

        <Route path="/tiffincurry-website/about" element={<About/>} />

        

    </Routes>
</>
)

}