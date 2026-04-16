import { useState } from "react";

import hrm from "../assets/hrm.png";
import pos from "../assets/lightning-fast-billing.png";
import kot from "../assets/kot_screen.png";
import clp from "../assets/customer_centricity.jpeg";
import omg from "../assets/order_management.jpeg";
import mmg from "../assets/menu_management.jpeg";
import img from "../assets/inventory_management.jpeg";
import rpa from "../assets/reports_analytics.jpeg";
import { Link } from "react-router-dom";

export default function Features() {

const features = [

{
title: "Lightning fast billing",
text: "Say goodbye to long queues and hello to seamless customer service. Experience the speed of lightning-fast billing with our efficient POS system that ensures quick and accurate transactions.",
img: pos,
link: "/features/pos"
},

{
title: "Smart Order Management",
text: "Streamline your operations with our smart order management system that optimizes order processing. From order placement to delivery, our system ensures a smooth and efficient workflow, allowing you to focus on what matters most - delighting your customers.",
img: omg,
link: "/features/order-management"
},

{
title: "Guest Queue Management",
text: "We start caring for your guest right from the moment they are at your door. Enhance your hospitality experience with our smart queue management system. Reduce wait times, improve customer satisfaction. Our system allows you to manage queues efficiently, keeping your customers informed and engaged while they wait.",
img: omg,
link: "/features/queue-management"
},

{
title: "Advanced Audit Trail",
text: "Gain complete visibility and control over your restaurant's operations with our advanced audit trail feature. Track every action, monitor changes, and ensure accountability across your entire system. Our audit trail provides you with a comprehensive record of all activities, allowing you to identify issues, optimize processes, and maintain the highest standards of quality and security.",
img: omg,
link: "/features/audit-trail"
},

{
title: "Smart Kitchen Display",
text: "Welcome to a digital solution that enhances communication, improves order accuracy, and boosts efficiency in the heart of your restaurant. Experience the future of kitchen management with our innovative display system.",
img: kot,
link: "/features/kot"
},

{
title:"Menu Management",
text:"Create and update your menu with our easy-to-use menu management system. Showcase your offerings, manage pricing, and keep your menu fresh to attract and retain customers. With our user-friendly interface, you can effortlessly make changes to your menu, ensuring that your customers always have access to the latest and most enticing options.",
img: mmg,
link: "/features/menu-management"

},

{
title:"Guest First CRM",
text:"Customer 360° strategy to understand your customers better and deliver personalized experiences that keep them coming back. Our CRM system helps you build stronger relationships with your customers, increase loyalty, and drive repeat business.",
img:clp,
link: "/features/crm"
},
{
title:"Inventory Management",
text:"Take control of your inventory with our smart inventory management system. Track stock levels, manage suppliers, and optimize your inventory to reduce waste and increase profitability. Our system provides real-time insights into your inventory, allowing you to make informed decisions and keep your restaurant running smoothly.",
img: img,
link: "/features/inventory-management"
},
{
title:"Smart Staff Management",
text:"Efficiently manage your staff with our smart staff management system. Schedule shifts, track attendance, and optimize labor costs to ensure your restaurant runs smoothly. Our system helps you keep your team organized and motivated, allowing you to focus on delivering exceptional service to your customers.",
img:hrm,
link: "/features/hrm"
},
{
title:"Reports & Analytics",
text:"Make data-driven decisions with our comprehensive reports and analytics. Gain insights into your restaurant's performance, identify trends, and optimize your operations for maximum profitability. Our system provides you with the tools you need to analyze your data and make informed decisions that drive your business forward.",
img:rpa,
link: "/features/reports-analytics"
}

];


const [activeIndex, setActiveIndex] = useState(0);


return (

<section className="feature-tabs reveal reveal-stagger">

<div className="feature-tabs-container">

<h2 className="feature-tabs-title">
Best in Class Features
</h2>

<p className="feature-tabs-subtitle">
Simple yet powerful features - designed for modern restaurants, eateries and cloud kitchens.
</p>


<div className="feature-tabs-layout">


{/* LEFT PANEL */}

<div className="feature-tabs-list">

{features.map((feature, index) => (

<div
key={index}
className={`feature-tab-item ${activeIndex === index ? "active" : ""}`}
onClick={() => setActiveIndex(index)}

>
{feature.title}
</div>

))}

</div>


{/* RIGHT PANEL */}

<div className="feature-tabs-content">

    <h3>
{features[activeIndex].title}
</h3>
<div className="feature-image-collage">
    <img
    src={features[activeIndex].img}
    // src={features[activeIndex].ss}
    alt={features[activeIndex].title}
    className="feature-main-image"
    />
    {/* <img
    src={features[activeIndex].ss}
    alt="mobile-preview"
    className="feature-phone-overlay"
    /> */}
</div>

<p>
{features[activeIndex].text} <br/><Link to="/features" className="feature-tabs-content p">Read more..</Link>
</p>

</div>


</div>

</div>

</section>

);

}