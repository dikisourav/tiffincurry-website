import { useState } from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Metrics from "../components/Metrics"
import Restaurants from "../components/Restaurants"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Features from "../components/Features"
import OwnerPriorities from "../components/OwnerPriorities"
import GrowthTools from "../components/GrowthTools"
import BeforeAfter from "../components/BeforeAfter"
import useReveal from "../hooks/useReveal";

export default function Home(){

const [dark,setDark] = useState(false)
useReveal()

return(

<div className={dark ? "dark home-page-shell":"light home-page-shell"}>

<Navbar dark={dark} setDark={setDark}/>

<Hero dark={dark}/>

<OwnerPriorities/>

<GrowthTools/>

<Restaurants/>

<Features/>

<Metrics/>

<BeforeAfter/>

<CTA/>
<Footer/>
</div>

)

}
