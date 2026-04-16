import Feature from "./Feature";
import hrm from "../assets/hrm.png";
import pos from "../assets/lightning-fast-billing.png";
import kot from "../assets/kot_screen.png";
import clp from "../assets/customer_centricity.png";
export default function Features(){
return(
<section className="features reveal reveal-stagger">
    <div className="features-container">

    <h2 className="features-title">
    Best in Class Features
    </h2>

    <p className="features-subtitle">
    Simple yet powerful features - designed for modern restaurants, eateries and cloud kitchens.
    </p>

    <Feature
    title="Lightning fast billing"
    text="Process orders instantly with a touch-friendly interface designed for high-volume restaurants."
    img={pos}
    />

    <Feature
    title="Smart Order Management"
    text="Streamline your operations with our intuitive order management system that keeps everything organized and efficient."
    img={clp}
    reverse
    />

    <Feature
    title="Smart kitchen display"
    text="Orders reach the kitchen instantly so chefs can prepare dishes faster."
    img={kot}
    />

    <Feature
    title="Menu Management"
    text="Easily update and manage your menu items, prices, and availability in real-time."
    img={clp}
    reverse
    />

    <Feature
    title="Guest First CRM"
    text="Enhance customer satisfaction with personalized service and seamless interactions at every touchpoint."
    img={clp}
    />
    
    <Feature
    title="Inventory Management"
    text="Keep track of your stock levels and manage your inventory efficiently."
    img={clp}
    reverse
    />
    
    <Feature
    title="Smart Staff Management"
    text="Manage your team effectively with our comprehensive human resources management system."
    img={hrm}
    />

    <Feature
    title="Reports & Analytics"
    text="Gain insights into your restaurant's performance with detailed reports and analytics."
    img={clp}
    reverse
    />

    </div>
</section>
)
}