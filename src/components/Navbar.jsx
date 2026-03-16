import { Link } from "react-router-dom"

export default function Navbar({dark,setDark}){

return(

<header className="navbar">

<div className="container nav-inner">

<div className="logo">
TiffinCurry
</div>

<nav className="nav-menu">

<a href="#product">Pricing</a>
<a href="#about">About Us</a>
<a href="#contact">Contact</a>

</nav>

<div className="nav-right">

<button
className="mode"
onClick={()=>setDark(!dark)}
>
{dark ? "☀️":"🌙"}
</button>

<Link to="/demo">
<button className="primary-btn">
Request Demo
</button>
</Link>

</div>

</div>

</header>

)

}