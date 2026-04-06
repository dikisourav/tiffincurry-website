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
    title="Guest first approach"
    text="Enhance customer satisfaction with personalized service and seamless interactions at every touchpoint."
    img={clp}
    reverse
    />
    
    <Feature
    title="Smart kitchen display"
    text="Orders reach the kitchen instantly so chefs can prepare dishes faster."
    img={kot}
    />
    
    <Feature
    title="Powerful HRM"
    text="Manage your team effectively with our comprehensive human resources management system."
    img={hrm}
    reverse
    />

    </div>
</section>
)
}