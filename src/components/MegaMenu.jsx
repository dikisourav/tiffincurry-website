import { useState } from "react"

export default function MegaMenu({ menuData }) {

const firstKey = Object.keys(menuData)[0]

const [active,setActive]=useState(firstKey)

return (

<div className="mega-menu">

<div className="mega-left">

{Object.keys(menuData).map(section=>(
<div
key={section}
className={active===section ? "active" : ""}
onMouseEnter={()=>setActive(section)}
>

{section}

</div>
))}

</div>


<div className="mega-right">

{/* LOGO LIST MODE */}

{menuData[active].type==="logo-list" && (

<div className="mega-logo-list">

{/* {menuData[active].header && (

<div className="product-header">

<h3>{menuData[active].header.title}</h3>
<p>{menuData[active].header.desc}</p>

</div>

)} */}

{menuData[active].items.map((item,index)=>(

<div key={index} className="mega-logo-item">

<div className="mega-icon">

{item.icon}

</div>

<div>

<h4>{item.title}</h4>
<p>{item.desc}</p>

</div>

</div>

))}

</div>

)}




{/* GROUPED LIST MODE */}

{menuData[active].type==="grouped-list" &&

menuData[active].groups.map((group,index)=>(

<div key={index} className="mega-group">

<h5>{group.header}</h5>

<ul>
{group.links.map((link,i)=>(
    <li key={i}>
    <a href={link.url}>{link.title}</a>
    </li>

))}

</ul>

</div>

))

}

</div>

</div>

)

}