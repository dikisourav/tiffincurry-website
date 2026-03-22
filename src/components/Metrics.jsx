import {
  Zap,
  ShieldCheck,
  WifiOff,
  MonitorSmartphone,
  Globe,
  IndianRupee,
  CreditCard,
  Headphones
} from "lucide-react"

export default function Metrics(){

const metrics = [
{
title:"3x Faster Billing",
text:"Lightning fast POS billing designed for busy restaurants",
icon:<Zap size={36}/>
},
{
title:"99.9% Uptime",
text:"Reliable POS system built for uninterrupted service",
icon:<ShieldCheck size={36}/>
},
{
title:"Multi-Terminal Ready",
text:"Run billing across multiple counters and devices seamlessly",
icon:<MonitorSmartphone size={36}/>
},
{
title:"Offline Ready",
text:"Continue billing even when the internet goes down",
icon:<WifiOff size={36}/>
},
{
title:"Regional Language",
text:"Operate your POS in multiple regional languages",
icon:<Globe size={36}/>
},
{
title:"Affordable",
text:"Pay only for what you use — perfect for growing restaurants",
icon:<IndianRupee size={36}/>
},
{
title:"Secure Payments",
text:"Seamless integration with trusted payment gateways",
icon:<CreditCard size={36}/>
},
{
title:"24/7 Support",
text:"Round the clock help whenever you need it",
icon:<Headphones size={36}/>
}
]

return(

<section className="metrics reveal reveal-stagger">
    <div className="metrics-container">

<h2 className="metrics-title">
{/* Why Choose <span>TiffinCurry</span> */}
Why Choose TiffinCurry 
</h2>

<p className="metrics-subtitle">
Powerful features designed for modern restaurants
</p>

<div className="metrics-grid">

{metrics.map((m,i)=>(

<div key={i} className="metric-card">

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