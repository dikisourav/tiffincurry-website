import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

export default function Demo(){

const [cities,setCities] = useState([])
const [city,setCity] = useState("")

useEffect(()=>{

fetch("http://localhost:4000/api/cities")
.then(res=>res.json())
.then(data=>setCities(data))

},[])

const selected = cities.find(c=>c.name===city)

return(

<div className="demo-page">

<Link to="/tiffincurry-website" className="back">
← Back
</Link>

<div className="form">

<h2>Request a demo</h2>

<input placeholder="Name"/>

<input placeholder="Restaurant Name"/>

<input placeholder="Email"/>

<input placeholder="Phone"/>

<input placeholder="Restaurant Address"/>

<select
value={city}
onChange={(e)=>setCity(e.target.value)}
>

<option>Select City</option>

{cities.map(c=>(
<option key={c.id} value={c.name}>
{c.name}
</option>
))}

</select>

<input
value={selected?.state || ""}
readOnly
placeholder="State"
/>

<button className="primary-btn large">
Submit Request
</button>

</div>

</div>

)

}