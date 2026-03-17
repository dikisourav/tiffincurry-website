import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"
import demo from "../assets/demo.svg"
import dark_demo from "../assets/dark-demo.svg"

export default function Demo(){
const [dark,setDark] = useState(false)

return(

<div className={dark ? "dark":"light"}>

<Navbar  dark={dark} setDark={setDark}/>

<section className="demo-page">

      {/* LEFT SIDE - IMAGE */}
      <div className="demo-left">
        {dark ? <img src={dark_demo} alt="Demo" /> : <img src={demo} alt="Demo" />}
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="demo-right">

        <h2>Request a Demo</h2>
        <p>See how TiffinCurry can transform your restaurant operations.</p>

        <form className="demo-form">

          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Restaurant Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Address" required />

          <div className="row">
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="State" required />
            <input type="text" placeholder="PIN" required />
          </div>

          <button type="submit" className="primary-btn">
            Request Demo
          </button>

        </form>

        {/* <Link to="/">
          <button className="secondary-btn">← Back to Home</button>
        </Link> */}

      </div>

    </section>

<Footer />
</div>
)

}