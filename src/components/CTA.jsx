import { Link } from "react-router-dom"

export default function CTA(){

return(

<section className="cta">

<div className="container">

<h2>

Ready to modernize your restaurant?

</h2>

<Link to="/tiffincurry-website/demo">
<button className="primary-btn large">
Book a Demo
</button>
</Link>

</div>

</section>

)

}