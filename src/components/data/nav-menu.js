export const solutionsMenuData = {

Billing:{

type:"logo-list",

header:{
title:"Billing Solutions",
desc:"Everything required for fast and reliable checkout"
},

items:[

{
title:"POS Billing",
desc:"Lightning fast billing interface",
icon:"🧾"
},

{
title:"Table Orders",
desc:"Seamless dine-in experience",
icon:"🍽️"
},
{
title:"Table Management",
desc:"Lightning fast billing interface",
icon:"🧾"
},

{
title:"Table Pre-Booking",
desc:"Seamless dine-in experience",
icon:"🍽️"
},


]

},

Operations:{

type:"logo-list",

header:{
title:"Operations Control",
desc:"Manage kitchen and inventory workflows"
},

items:[

{
title:"Inventory",
desc:"Live stock tracking",
icon:"📦"
},

{
title:"KOT System",
desc:"Kitchen routing automation",
icon:"👨‍🍳"
},
{
title:"Inventory",
desc:"Live stock tracking",
icon:"📦"
},

{
title:"KOT System",
desc:"Kitchen routing automation",
icon:"👨‍🍳"
},

]

}

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