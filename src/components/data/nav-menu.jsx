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
import restaurantMenuImage from "../../assets/restaurant-menu-visual-clean.png"

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
icon:billingIcon,
url:"/tiffincurry-website/features/pos"
},

{
title:"Order Processing",
desc:"Seamless dine-in experience",
icon:orderIcon,
url:"/tiffincurry-website/features/order-management"
},
{
title:"Table Management",
desc:"Lightning fast billing interface",
icon:tableIcon,
url:"/tiffincurry-website/restaurants/dine-in"
},

{
title:"Menu Control",
desc:"Seamless dine-in experience",
icon:menuIcon,
url:"/tiffincurry-website/features/menu-management"
},
{
title:"Customer Management",
desc:"Seamless dine-in experience",
icon:customerIcon,
url:"/tiffincurry-website/features/crm"
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
icon:invIcon,
url:"/tiffincurry-website/features/inventory-management"
},

{
title:"KOT System",
desc:"Kitchen routing automation",
icon:kotIcon,
url:"/tiffincurry-website/features/kot"
},
{
title:"HRM",
desc:"Live stock tracking",
icon:hrmIcon,
url:"/tiffincurry-website/features/hrm"
},
{
title:"Expense Tracker",
desc:"Kitchen routing automation",
icon:expIcon
},
{
title:"Billing Dashboard",
desc:"Kitchen routing automation",
icon:billingDashboardIcon,
url:"/tiffincurry-website/features/reports-analytics"
},
{
title:"Cash Flow Dashboard",
desc:"Kitchen routing automation",
icon:cashFlowIcon,
url:"/tiffincurry-website/features/reports-analytics"
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
icon:salesAnalyticsIcon,
url:"/tiffincurry-website/features/reports-analytics"
},

{
title:"Outlet Performance",
desc:"Analyze outlet performance",
icon:outletPerfIcon,
url:"/tiffincurry-website/features/reports-analytics"
},
{
title:"Menu Performance Insights",
desc:"Gain insights into menu performance",
icon:menuPerfIcon,
url:"/tiffincurry-website/features/reports-analytics"
},
{
title:"Customer Insights",
desc:"Analyze customer behavior and preferences",
icon:customerInsightsIcon,
url:"/tiffincurry-website/features/crm"
},
{
title:"Staff Productivity Insights",
desc:"Optimize staff performance",
icon:staffProdIcon,
url:"/tiffincurry-website/features/hrm"
},
{
title:"Real-time Reporting",
desc:"Get real-time business insights",
icon:realTimeRepIcon,
url:"/tiffincurry-website/features/reports-analytics"
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
icon:crmIcon,
url:"/tiffincurry-website/features/crm"
},

{
title:"Promotions Engine",
desc:"Attract more customers.",
icon:promotionsIcon,
url:"/tiffincurry-website/growth"
},
{
title:"Whatsapp Engagement",
desc:"Customers Engagement via WhatsApp",
icon:whatsappIcon,
url:"/tiffincurry-website/growth"
},
{
title:"Customer Campaigns",
desc:"Targeted marketing campaigns",
icon:customerCampaignsIcon,
url:"/tiffincurry-website/growth"
},
{
title:"Feedback Sentiment Analysis",
desc:"Analyze customer feedback",
icon:feedbackIcon
},
{
title:"Repeat Customer Tracking",
desc:"Identify loyal customers",
icon:repeatCustomerIcon,
url:"/tiffincurry-website/growth"
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
icon:onlineOrderingIcon,
url:"/tiffincurry-website/restaurants/cloud-kitchen"
},

{
title:"Accounting Integrations",
desc:"Integrate with accounting software",
icon:accountingIntegrationIcon
},
{
title:"WhatsApp Integration",
desc:"Get orders via WhatsApp",
icon:whatsappIcon,
url:"/tiffincurry-website/growth"
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
icon:centralMenuIcon,
url:"/tiffincurry-website/features/menu-management"
},

{
title:"Centralized Reporting",
desc:"Get consolidated reports across all outlets for better decision making.",
icon:centralReportIcon,
url:"/tiffincurry-website/features/reports-analytics"
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

"Restaurant Formats":{

type:"grouped-list",

panel:{
eyebrow:"Choose your format",
title:"Built around real restaurant workflows.",
desc:"Pick the format closest to your operation and see how TiffinCurry fits the way your team serves, bills, cooks, and reports.",
image:restaurantMenuImage,
alt:"Restaurant team using TiffinCurry"
},

groups:[

{
header:"Dine-in & Hospitality",

links:[
{title:"Fine Dining",url:"/tiffincurry-website/restaurants/dine-in"},
{title:"Cafe",url:"/tiffincurry-website/restaurants/cafe"},
{title:"Bar & Lounge",url:"/tiffincurry-website/restaurants/bar-lounge"}
]
},
{
header:"Fast Service",

links:[
{title:"Quick Service Restaurant",url:"/tiffincurry-website/restaurants/quick-service"},
{title:"Office & School Canteen",url:"/tiffincurry-website/restaurants/canteen"}
]
},

{
header:"Delivery & Mobile",

links:[
{title:"Cloud Kitchen",url:"/tiffincurry-website/restaurants/cloud-kitchen"},
{title:"Food Truck",url:"/tiffincurry-website/restaurants/food-truck"}
]
}

]
}

}
