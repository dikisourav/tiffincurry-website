import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Demo from "./pages/Demo"
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import DineInRestaurants from "./pages/restaurants/Restaurants"
import QuickService from "./pages/restaurants/QuickService"
import Cafe from "./pages/restaurants/Cafe"
import BarLounge from "./pages/restaurants/BarLounge"
import FoodTruck from "./pages/restaurants/FoodTruck"
import CloudKitchen from "./pages/restaurants/CloudKitchen"
import ScrollToTop from "./components/ScrollToTop";


export default function App(){

return(
<>
    <ScrollToTop/>
    <Routes>
        
        <Route path="/tiffincurry-website" element={<Home/>} />

        <Route path="/tiffincurry-website/demo" element={<Demo/>} />

        <Route path="/tiffincurry-website/pricing" element={<Pricing/>} />

        <Route path="/tiffincurry-website/about" element={<About/>} />

        <Route path="/tiffincurry-website/restaurants/dine-in" element={<DineInRestaurants/>} />

        <Route path="/tiffincurry-website/restaurants/fine-dining" element={<DineInRestaurants/>} />

        <Route path="/restaurants/fine-dining" element={<DineInRestaurants/>} />

        <Route path="/tiffincurry-website/restaurants/quick-service" element={<QuickService/>} />

        <Route path="/restaurants/quick-service" element={<QuickService/>} />

        <Route path="/solutions/quick_service" element={<QuickService/>} />

        <Route path="/solutions/qsr" element={<QuickService/>} />

        <Route path="/tiffincurry-website/restaurants/cafe" element={<Cafe/>} />

        <Route path="/restaurants/cafe" element={<Cafe/>} />

        <Route path="/solutions/cafe" element={<Cafe/>} />

        <Route path="/solutions/cafe_chains" element={<Cafe/>} />

        <Route path="/solutions/coffee_kiosk" element={<Cafe/>} />

        <Route path="/tiffincurry-website/restaurants/bar-lounge" element={<BarLounge/>} />

        <Route path="/restaurants/bar" element={<BarLounge/>} />

        <Route path="/solutions/bar" element={<BarLounge/>} />

        <Route path="/tiffincurry-website/restaurants/food-truck" element={<FoodTruck/>} />

        <Route path="/restaurants/food-truck" element={<FoodTruck/>} />

        <Route path="/solutions/food_truck" element={<FoodTruck/>} />

        <Route path="/tiffincurry-website/restaurants/cloud-kitchen" element={<CloudKitchen/>} />

        <Route path="/restaurants/cloud-kitchen" element={<CloudKitchen/>} />

        <Route path="/solutions/cloud" element={<CloudKitchen/>} />

        <Route path="/solutions/virtual_brand" element={<CloudKitchen/>} />

        

    </Routes>
</>
)

}
