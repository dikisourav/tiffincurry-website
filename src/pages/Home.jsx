import { useState } from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Metrics from "../components/Metrics"
import Restaurants from "../components/Restaurants"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Features from "../components/Features"
import useReveal from "../hooks/useReveal";

export default function Home(){

const [dark,setDark] = useState(false)
useReveal()

return(

<div className={dark ? "dark":"light"}>

<Navbar dark={dark} setDark={setDark}/>

<Hero dark={dark}/>

<Restaurants/>

<Features/>

<Metrics/>

<CTA/>
<Footer/>
</div>

)

}