import { Link } from "react-router-dom";
export default function Restaurants(){

return(

<section className="restaurants reveal reveal-stagger">

<div className="container">

<h2 className="restaurant-title">
Designed for every type of restaurant
</h2>

<p className="restaurant-subtitle">
Whether you run a dine-in, takeaway or cloud kitchen —
TiffinCurry adapts to your workflow.
</p>

<div className="restaurant-grid">

<Link to="/fine-dining" className="restaurant-card fine">
<h3>Fine Dining</h3>
</Link>


<Link to="/quick-service" className="restaurant-card qsr">
<h3>Quick Service</h3>
</Link>

<Link to="/cafe" className="restaurant-card cafe">
<h3>Cafe</h3>
</Link>

<Link to="/bar" className="restaurant-card bar">
<h3>Bar</h3>
</Link>

<Link to="/food-truck" className="restaurant-card truck">
<h3>Food Truck</h3>
</Link>


<Link to="/cloud-kitchen" className="restaurant-card cloud">
<h3>Cloud Kitchen</h3>
</Link>

</div>

</div>

</section>

)
}