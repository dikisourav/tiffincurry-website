import { useState } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"

import demo from "../assets/demo.svg"
import dark_demo from "../assets/dark-demo.svg"

// import "../styles/demo.css"

export default function Demo(){

const [dark,setDark] = useState(false)

return(

<div className={dark ? "dark" : "light"}>

<Navbar dark={dark} setDark={setDark} />

<section className="demo-section">

<div className="demo-container">

{/* LEFT IMAGE */}

<div className="demo-image">
<img
src={dark ? dark_demo : demo}
alt="Demo illustration"
/>
</div>


{/* RIGHT FORM */}

<div className="demo-form-box">

<h2>Request a Demo</h2>

<p>
See how TiffinCurry can transform your restaurant operations.
</p>


<form className="demo-form">

<input type="text" placeholder="Your Name" required />

<input type="text" placeholder="Restaurant Name" required />

<input type="email" placeholder="Email" required />

<input type="tel" placeholder="Phone Number" required />

<input type="text" placeholder="Address" required />


<div className="form-row">

<input type="text" placeholder="State" required />

<input type="text" placeholder="PIN" required />

</div>


<button type="submit" className="primary-btn">

Request Demo

</button>

</form>

</div>

</div>

</section>

<Footer />

</div>

)

}