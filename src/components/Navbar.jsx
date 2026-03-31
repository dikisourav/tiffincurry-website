import { useState } from "react"
import MegaMenu from "./MegaMenu"
import { solutionsMenuData, RestaurantMenuData } from "./data/nav-menu.jsx"
import { Link } from "react-router-dom" 
import logo from "../assets/logo.svg"

export default function Navbar({ dark, setDark }) {

const [menuOpen,setMenuOpen]=useState(false)
// const [megaOpen,setMegaOpen]=useState(false)


return (

<header className="navbar">

<div className="nav-wrapper">

{/* LEFT */}

<div className="nav-left">

<div className="logo">
<Link to="/tiffincurry-website" className="logo logo-img">
    <img src={logo} alt="TiffinCurry" />
</Link>
</div>

</div>


{/* CENTER */}

<div className="nav-center">

<div className="products-wrapper">
<div className="nav-item product-trigger">

Solutions
<span className="arrow">▾</span>

</div>
<MegaMenu menuData={solutionsMenuData} />
</div>


<div className="products-wrapper">
<div className="nav-item product-trigger">

Types of Restaurants
<span className="arrow">▾</span>

</div>
<MegaMenu menuData={RestaurantMenuData} />
</div>


<div className="nav-item">
<Link to="/tiffincurry-website/pricing" className="nav-item">Pricing</Link>
</div>
<div className="nav-item">
<Link to="/tiffincurry-website/about" className="nav-item">About Us</Link>
</div>
</div>


{/* RIGHT */}

<div className="nav-right">

<div className="nav-item">
Sign in
</div>


<div className="primary-btn">
Request Demo
</div>


<button
className="dark-toggle"
onClick={()=>setDark(!dark)}
>

{dark ? "☀️":"🌙"}

</button>


<div
className="hamburger"
onClick={()=>setMenuOpen(!menuOpen)}
>

☰

</div>

</div>

</div>

{/* MOBILE MENU */}

{menuOpen && (

<div className="mobile-menu">

{/* SOLUTIONS */}

<details className="mobile-section">

<summary>Solutions</summary>

{Object.entries(solutionsMenuData).map(([sectionName,section]) => (

<div key={sectionName} className="mobile-subsection">

<div className="mobile-subtitle">
{section.header?.title || sectionName}
</div>

{section.items?.map(item => (

<a key={item.title} href="#" className="mobile-link">
{item.title}
</a>

))}

</div>

))}

</details>


{/* TYPES OF RESTAURANTS */}

<details className="mobile-section">

<summary>Types of Restaurants</summary>

{Object.entries(RestaurantMenuData).map(([sectionName,section]) => (

<div key={sectionName} className="mobile-subsection">

<div className="mobile-subtitle">

{sectionName}

</div>

{section.groups?.map(group => (

<div key={group.header}>

<div className="mobile-group-title">
{group.header}
</div>

{group.links.map(link => (

<a key={link.title} href={link.url} className="mobile-link">
{link.title}
</a>

))}

</div>

))}

</div>

))}

</details>


<a href="/pricing" className="mobile-link-main">
Pricing
</a>

<a href="/login" className="mobile-link-main">
Sign in
</a>

<div className="primary-btn mobile-btn">
Request Demo
</div>

</div>

)}

</header>

)

}