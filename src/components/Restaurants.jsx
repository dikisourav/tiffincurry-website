import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const restaurantTypes = [
  {
    title: "Fine Dining",
    label: "Full service",
    text: "Manage tables, captain orders, kitchen, billing and guest history smoothly.",
    className: "fine",
    to: "/tiffincurry-website/restaurants/dine-in",
  },
  {
    title: "Quick Service",
    label: "Fast counters",
    text: "Bill faster, manage tokens, reduce queues and serve more orders in rush hours.",
    className: "qsr",
    to: "/tiffincurry-website/restaurants/quick-service",
  },
  {
    title: "Canteen",
    label: "Office & school",
    text: "Handle meal rush, coupons, prepaid orders and daily reports with ease.",
    className: "canteen",
    to: "/tiffincurry-website/restaurants/canteen",
  },
  {
    title: "Cafe",
    label: "Casual formats",
    text: "Handle repeat customers, combos, takeaway and menu changes easily.",
    className: "cafe",
    to: "/tiffincurry-website/restaurants/cafe",
  },
  {
    title: "Bar & Lounge",
    label: "Night service",
    text: "Manage open tabs, split bills, offers, stock and closing reports.",
    className: "bar",
    to: "/tiffincurry-website/restaurants/bar-lounge",
  },
  {
    title: "Food Truck",
    label: "Mobile outlet",
    text: "Bill quickly, manage a small menu, accept UPI and track location-wise sales.",
    className: "truck",
    to: "/tiffincurry-website/restaurants/food-truck",
  },
  {
    title: "Cloud Kitchen",
    label: "Delivery first",
    text: "Manage online orders, preparation, packing, dispatch and brand-wise reports.",
    className: "cloud",
    to: "/tiffincurry-website/restaurants/cloud-kitchen",
  },
];

export default function Restaurants() {
  return (
    <section className="restaurants reveal reveal-stagger">
      <div className="container">
        <div className="restaurant-eyebrow">
          <Sparkles size={16} />
          Made for Indian restaurant formats
        </div>

        <h2 className="restaurant-title">Made for every type of restaurant</h2>

        <p className="restaurant-subtitle">
          Whether you run fine dining, QSR, canteen, cafe, bar, food truck or cloud kitchen,
          TiffinCurry adjusts to your restaurant style.
        </p>

        <div className="restaurant-grid">
          {restaurantTypes.map((type) => (
            <Link to={type.to} className={`restaurant-card ${type.className}`} key={type.title}>
              <div className="restaurant-card-content">
                <span>{type.label}</span>
                <h3>{type.title}</h3>
                <p>{type.text}</p>
                <strong>
                  Explore format <ArrowRight size={16} />
                </strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
