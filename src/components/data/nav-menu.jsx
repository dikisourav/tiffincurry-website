import {
//POS Solutions 
billingIcon,
orderIcon,
tableIcon,
menuIcon,
customerIcon,
guestIcon,

//Operations
invIcon,
kotIcon,
hrmIcon,
expIcon,
billingDashboardIcon,
cashFlowIcon,

//Analytics
salesAnalyticsIcon,
outletPerfIcon,
menuPerfIcon,
customerInsightsIcon,
staffProdIcon,
realTimeRepIcon,

//Growth Tools
crmIcon,
promotionsIcon,
whatsappIcon,
customerCampaignsIcon,
feedbackIcon,
repeatCustomerIcon,
} from "./nav-icons.jsx"

export const solutionsMenuData = {

"POS Solutions":{

type:"logo-list",

header:{
title:"Billing Solutions",
desc:"Everything required for fast and reliable checkout"
},

items:[

{
title:"Billing & Payments",
desc:"Lightning fast billing interface",
icon:billingIcon
},

{
title:"Order Processing",
desc:"Seamless dine-in experience",
icon:orderIcon
},
{
title:"Table Management",
desc:"Lightning fast billing interface",
icon:tableIcon
},

{
title:"Menu Control",
desc:"Seamless dine-in experience",
icon:menuIcon
},
{
title:"Customer Management",
desc:"Seamless dine-in experience",
icon:customerIcon
},
{
title:"Guest Feedback",
desc:"Seamless dine-in experience",
icon:guestIcon
},

]

},

"Operations":{

type:"logo-list",

header:{
title:"Operations Control",
desc:"Manage kitchen and inventory workflows"
},

items:[

{
title:"Inventory Management",
desc:"Live stock tracking",
icon:invIcon
},

{
title:"KOT System",
desc:"Kitchen routing automation",
icon:kotIcon
},
{
title:"HRM",
desc:"Live stock tracking",
icon:hrmIcon
},
{
title:"Expense Tracker",
desc:"Kitchen routing automation",
icon:expIcon
},
{
title:"Billing Dashboard",
desc:"Kitchen routing automation",
icon:billingDashboardIcon
},
{
title:"Cash Flow Dashboard",
desc:"Kitchen routing automation",
icon:cashFlowIcon
},
]

},

"Analytics & Insights":{

type:"logo-list",

header:{
title:"Analytics & Insights",
desc:"Manage kitchen and inventory workflows"
},

items:[

{
title:"Sales Analytics",
desc:"Analyze sales trends",
icon:salesAnalyticsIcon
},

{
title:"Outlet Performance",
desc:"Analyze outlet performance",
icon:outletPerfIcon
},
{
title:"Menu Performance Insights",
desc:"Gain insights into menu performance",
icon:menuPerfIcon
},
{
title:"Customer Insights",
desc:"Analyze customer behavior and preferences",
icon:customerInsightsIcon
},
{
title:"Staff Productivity Insights",
desc:"Optimize staff performance",
icon:staffProdIcon
},
{
title:"Real-time Reporting",
desc:"Get real-time business insights",
icon:realTimeRepIcon
},
]

},

"Growth Tools":{

type:"logo-list",

header:{
title:"Growth Tools",
desc:"Powerful marketing and customer engagement tools"
},

items:[

{
title:"CRM & Loyalty",
desc:"Improve customer retention",
icon:crmIcon
},

{
title:"Promotions Engine",
desc:"Attract more customers.",
icon:promotionsIcon
},
{
title:"Whatsapp Engagement",
desc:"Customers Engagement via WhatsApp",
icon:whatsappIcon
},
{
title:"Customer Campaigns",
desc:"Targeted marketing campaigns",
icon:customerCampaignsIcon
},
{
title:"Feedback Sentiment Analysis",
desc:"Analyze customer feedback",
icon:feedbackIcon
},
{
title:"Repeat Customer Tracking",
desc:"Identify loyal customers",
icon:repeatCustomerIcon
},
]

},

"Integrations":{

type:"logo-list",

header:{
title:"Integrations",
desc:"Takes care of all your agreegator and hardware integrations seamlessly."
},

items:[
{
title:"Payment Gateways",
desc:"Integrate with popular payment gateways for secure and convenient transactions.",
icon:invIcon
},
{
title:"Online Ordering Platforms",
desc:"Enhace digital footprint and reach more customers by direct online ordering.",
icon:invIcon
},

{
title:"Accounting Integrations",
desc:"Integrate with accounting software to streamline financial management and reporting.",
icon:kotIcon
},
{
title:"WhatsApp Integration",
desc:"Get orders via WhatsApp for better customer service.",
icon:hrmIcon
},
{
title:"Delivery Aggregators",
desc:"Integrate with delivery platforms like Swiggy / Zomato to expand your reach and boost sales.",
icon:expIcon
},
{
title:"Hardware Integrations",
desc:"Integrate with printers, cash drawers, and other hardware for a complete POS solution.",
icon:billingDashboardIcon
},

]

},

"Multi-Outlet":{

type:"logo-list",

header:{
title:"Multi-Outlet Management",
desc:"Manage multiple outlets efficiently."
},

items:[

{
title:"Centralized Menu Control",
desc:"Manage menus across all outlets from a single dashboard.",
icon:invIcon
},

{
title:"Centralized Reporting",
desc:"Get consolidated reports across all outlets for better decision making.",
icon:kotIcon
},
{
title:"Role-based Access Control",
desc:"Control user access and permissions across all outlets.",
icon:hrmIcon
},
{
title:"Branch Performance Tracking",
desc:"Analyze performance metrics for each outlet to identify areas for improvement.",
icon:expIcon
},
{
title:"Remote Outlet Monitoring",
desc:"Monitor outlet performance remotely and receive real-time alerts.",
icon:billingDashboardIcon
},

]

},

}

export const RestaurantMenuData =  {

"Dine-in":{

type:"grouped-list",

groups:[

{
header:"Dine-in",

links:[
{title:"Fine Dine",url:"/solutions/finedine"},
{title:"Quick Service",url:"/solutions/qsr"},
{title:"Cafe",url:"/solutions/cafe"},
{title:"Bar",url:"/solutions/bar"}
]
},

{
header:"Chain Restaurants",

links:[
{title:"Cafe Chains",url:"/solutions/cafe_chains"},
{title:"Speciality Chains",url:"/solutions/speciality_chains"},
{title:"Confectionery Chains",url:"/solutions/confectionery_chains"},
]
}

]

},
"Takeaway":{

type:"grouped-list",  
groups:[

{
header:"Quick Service",

links:[
{title:"Pizzeria",url:"/solutions/finedine"},
{title:"Roll Corner",url:"/solutions/qsr"},
{title:"Momo Shop",url:"/solutions/cafe"},
{title:"Kebab Shop",url:"/solutions/kebab_shop"},
]
},
{
header:"Confectionery",

links:[
{title:"Bakery",url:"/solutions/bakery"},
{title:"Cake Shop",url:"/solutions/cake_shop"},
{title:"Chocolate Shop",url:"/solutions/chocolate_shop"},
{title:"Ice Cream Parlor",url:"/solutions/icecream_parlor"},
{title:"Sweet Shop",url:"/solutions/sweet_shop"},
]
},

{
header:"Delivery",

links:[
{title:"Cloud Kitchen",url:"/solutions/cloud"},
{title:"Food Truck",url:"/solutions/food_truck"},
]
},
{
header:"Drinks",

links:[
{title:"FL Offshop",url:"/solutions/fl_offshop"},
{title:"Milk Bars",url:"/solutions/milk_bars"},
{title:"Juice Bars",url:"/solutions/juice_bars"},
]
}

]
}

}