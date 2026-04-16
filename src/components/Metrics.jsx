import {
  Zap,
  ShieldCheck,
  WifiOff,
  MonitorSmartphone,
  Globe,
  IndianRupee,
  // CreditCard,
  History,
  Users,
  Headphones,
  Utensils,
  LayoutDashboard,
  MousePointerClick,
  BarChart3,
  Globe2,
  DatabaseBackup,
  MapPin
} from "lucide-react"

export default function Metrics(){

const metrics = [

{
title:"Instant Billing",
text:"TiffinCurry makes billing smooth and effortless at even the busiest counters. Designed for real restaurant workflows, it helps staff generate bills quickly without confusion or delays.",
icon:<Zap size={40}/>
},

{
title:"Offline Ready",
text:"TiffinCurry continues to function even without an internet connection, ensuring uninterrupted billing and order management. Your restaurant can keep running smoothly, regardless of connectivity issues.",
icon:<WifiOff size={40}/>
},

{
title:"99.9% Uptime",
text:"TiffinCurry is built for reliability, ensuring your billing system is always available when you need it. With 99.9% uptime, you can trust that your restaurant's operations will run smoothly without interruptions.",
icon:<ShieldCheck size={40}/>
},

{
title:"Multi-Terminal Ready",
text:"TiffinCurry supports multiple billing terminals, allowing you to manage orders and payments from various points in your restaurant. Whether it's the main counter, a bar station, or a table-side device, TiffinCurry keeps everything synchronized for efficient service.",
icon:<MonitorSmartphone size={40}/>
},



{
title:"Regional Language Support",
text:"TiffinCurry supports multiple regional languages, making it easier for your staff to navigate the system and serve customers in their preferred language. This feature enhances user experience and helps bridge communication gaps in diverse restaurant environments.",
icon:<Globe size={40}/>
},

{
title:"Easy for Staff & Customers",
text:"TiffinCurry is designed with simplicity in mind. Its intuitive interface makes it easy for your staff to learn and use, while also providing a seamless experience for your customers. From order to bill generation, TiffinCurry ensures a smooth and efficient process for everyone involved.",
icon:<MousePointerClick size={40}/>
},

{
title:"Real-Time Reports Anywhere",
text:"Access real-time sales and performance reports from anywhere, at any time. TiffinCurry allows you to monitor your restaurant's performance on the go, giving you the insights you need to make informed decisions and optimize your operations.",
icon:<BarChart3 size={40}/>
},

{
title:"Manage from Anywhere",
text:"With TiffinCurry, you can manage your restaurant from anywhere. A strong MIS dashboard provides you with real-time insights and control over your operations, allowing you to make informed decisions and keep your restaurant running smoothly, no matter where you are. ",
icon:<LayoutDashboard size={40}/>
},
// {
// title:"Manage Your Restaurant",
// text:"TiffinCurry is more than just a billing system. It offers comprehensive restaurant management features, including multi-channel order management, kitchen display, menu management, inventory tracking, staff management, guest management, and sales analytics. This all-in-one solution helps you run your restaurant more efficiently and make informed decisions.",
// icon:<LayoutDashboard size={40}/>
// },


{
title:"Affordable Pricing",
text:"TiffinCurry comes in different pricing plans to suit various restaurant sizes and needs, making it an affordable choice for businesses of all scales. With TiffinCurry, you get everything you need, without breaking the bank.",
icon:<IndianRupee size={40}/>
},

// {
// title:"Advanced Audit Trail",
// text:"Keep track of all billing activities with our advanced audit trail. Know exactly what happened and when, ensuring transparency and compliance.",
// icon:<History size={40}/>
// },

// {
// title:"Guest Queue Management",
// text:"We start caring for your guests even before they enter your restaurant. Our system helps you keep track of waiting customers, estimated wait times, and seating arrangements, ensuring a smooth dining experience for your guests.",
// icon:<Users size={40}/>
// },

{
title:"24/7 Support",
text:"Our dedicated support team is available around the clock to assist you with any issues or questions. With TiffinCurry, you're never alone in managing your restaurant's billing needs.",
icon:<Headphones size={40}/>
},

{
title:"Secure Data Backup",
text:"TiffinCurry ensures your data is safe with secure backup solutions. Your billing information and restaurant data are protected against loss, giving you peace of mind.",
icon:<DatabaseBackup size={40}/>
},
{
title:"Built for Indian Restaurants",
text:"TiffinCurry is designed specifically for the way Indian restaurants operate—from fast counter service and regional language support to GST-ready billing and peak-hour reliability. It adapts naturally to local workflows, helping you manage daily operations smoothly without changing your existing processes or slowing down your service.",
icon:<MapPin size={40}/>
},


]

return(

<section className="metrics reveal reveal-stagger">

<div className="metrics-container">

<h2 className="metrics-title">
Why Choose TiffinCurry
</h2>

<p className="metrics-subtitle">
Powerful features designed for modern restaurants
</p>

<div className="metrics-grid">

{metrics.map((m,i)=>(

<div key={i} className="metric-item">

<div className="metric-icon">
{m.icon}
</div>

<h3>{m.title}</h3>

<p>{m.text}</p>

</div>

))}

</div>

</div>

</section>

)

}