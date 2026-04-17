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

//Integrations
paymentGatewayIcon,
onlineOrderingIcon,
accountingIntegrationIcon,
//whatsappIcon, //Already imported above
deliveryAggregatorIcon,
hardwareIntegrationIcon,

//Mulit-Outlet
centralMenuIcon,
centralReportIcon,
rbacIcon,
branchPerfIcon,
remoteOutletMonitorIcon,
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
desc:"Integrate with popular payment gateways",
icon:paymentGatewayIcon
},
{
title:"Online Ordering Platforms",
desc:"Direct online ordering.",
icon:onlineOrderingIcon
},

{
title:"Accounting Integrations",
desc:"Integrate with accounting software",
icon:accountingIntegrationIcon
},
{
title:"WhatsApp Integration",
desc:"Get orders via WhatsApp",
icon:whatsappIcon
},
{
title:"Delivery Aggregators",
desc:"Integrate with delivery platforms like Swiggy / Zomato",
icon:deliveryAggregatorIcon
},
{
title:"Hardware Integrations",
desc:"Integrate with printers, etc.",
icon:hardwareIntegrationIcon
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
icon:centralMenuIcon
},

{
title:"Centralized Reporting",
desc:"Get consolidated reports across all outlets for better decision making.",
icon:centralReportIcon
},
{
title:"Role-based Access Control",
desc:"Control user access and permissions across all outlets.",
icon:rbacIcon
},
{
title:"Branch Performance Tracking",
desc:"Analyze performance metrics for each outlet to identify areas for improvement.",
icon:branchPerfIcon
},
{
title:"Remote Outlet Monitoring",
desc:"Monitor outlet performance remotely and receive real-time alerts.",
icon:remoteOutletMonitorIcon
},

]

},

}

export const RestaurantMenuData =  {

"Full-Service":{

type:"grouped-list",

groups:[

{
header:"Premium Dining",

links:[
{title:"Fine Dine",url:"/solutions/finedine"},
{title:"Casual Dining",url:"/solutions/casual_dining"},
{title:"Cafe",url:"/tiffincurry-website/restaurants/cafe"},
{title:"Bar & Lounge",url:"/tiffincurry-website/restaurants/bar-lounge"}
]
},
{
header:"Quick-Service Formats",

links:[
{title:"Quick Service Restaurant",url:"/tiffincurry-website/restaurants/quick-service"},
{title:"Fast Casual",url:"/tiffincurry-website/restaurants/quick-service"},
]
},
{
header:"Restaurant Chains",

links:[
{title:"Cafe Chains",url:"/tiffincurry-website/restaurants/cafe"},
{title:"QSR Chains",url:"/solutions/qsr_chains"},
{title:"Speciality Restaurant Chains",url:"/solutions/speciality_chains"},
{title:"Dessert Chains",url:"/solutions/confectionery_chains"},
]
}

]

},
"Takeaway":{

type:"grouped-list",  
groups:[

{
header:"Street & Express Formats",

links:[
{title:"Pizzeria",url:"/solutions/finedine"},
{title:"Roll Corner",url:"/tiffincurry-website/restaurants/quick-service"},
{title:"Momo Shop",url:"/tiffincurry-website/restaurants/cafe"},
{title:"Kebab Shop",url:"/solutions/kebab_shop"},
{title:"Burger Joint",url:"/solutions/burger_joint"},
{title:"Sandwich Shop",url:"/solutions/sandwich_shop"},
{title:"Bhaji & Chaat Shops",url:"/solutions/bhaji_chaat"},
]
},
{
header:"Bakery & Dessert",

links:[
{title:"Bakery",url:"/solutions/bakery"},
{title:"Cake Shop",url:"/solutions/cake_shop"},
{title:"Chocolate Shop",url:"/solutions/chocolate_shop"},
{title:"Ice Cream Parlor",url:"/solutions/icecream_parlor"},
{title:"Sweet Shop",url:"/solutions/sweet_shop"},
{title:"Dessert Studios",url:"/solutions/dessert_studios"},
]
},

{
header:"Delivery-First Kitchens",

links:[
{title:"Cloud Kitchen",url:"/tiffincurry-website/restaurants/cloud-kitchen"},
{title:"Food Truck",url:"/tiffincurry-website/restaurants/food-truck"},
{title:"Virtual Brand Kitchens",url:"/tiffincurry-website/restaurants/cloud-kitchen"},
]
},
{
header:"Beverage Outlets",

links:[
{title:"Liquor Retail Outlet",url:"/solutions/fl_offshop"},
{title:"Milk Bars",url:"/solutions/milk_bars"},
{title:"Juice & Smoothie Bars",url:"/solutions/juice_bars"},
{title:"Tea Stall",url:"/solutions/tea_stall"},
{title:"Coffee Kiosks",url:"/tiffincurry-website/restaurants/cafe"},
]
},
{
header:"Multi-Outlet Businesses",

links:[
{title:"Central Kitchen",url:"/solutions/central_kitchen"},
{title:"Bakery Chains",url:"/solutions/bakery_chains"},
{title:"Dessert Chains",url:"/solutions/dessert_chains"},

]
}

]
}

}
