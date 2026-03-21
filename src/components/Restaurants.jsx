import {
IconToolsKitchen2,
IconBurger,
IconCoffee,
IconGlassCocktail,
IconTruckDelivery,
IconCloud
} from "@tabler/icons-react";

export default function Restaurants(){

return(

<section className="restaurants reveal reveal-stagger">

<div className="container">

<h2 className="restaurant-title">
Designed for every type of restaurant
</h2>
<p className="restaurant-subtitle">
Whether you run a cafe, QSR, dine-in restaurant, or cloud kitchen —
TiffinCurry adapts to your workflow.
</p>

<div className="restaurant-grid">

<div className="restaurant-card">
<IconToolsKitchen2 className="restaurant-svg"/>
<h3>Fine Dining</h3>
</div>

<div className="restaurant-card">
<IconBurger className="restaurant-svg"/>
<h3>Quick Service</h3>
</div>

<div className="restaurant-card">
<IconCoffee className="restaurant-svg"/>
<h3>Cafe</h3>
</div>

<div className="restaurant-card">
<IconGlassCocktail className="restaurant-svg"/>
<h3>Bar</h3>
</div>

<div className="restaurant-card">
<IconTruckDelivery className="restaurant-svg"/>
<h3>Food Truck</h3>
</div>

<div className="restaurant-card">
<IconCloud className="restaurant-svg"/>
<h3>Cloud Kitchen</h3>
</div>

</div>

</div>

</section>

)
}