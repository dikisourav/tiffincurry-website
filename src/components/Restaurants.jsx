import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const restaurantTypes = [
  {
    title: "Fine Dining",
    label: "Full service",
    text: "Table service, reservations, KOT, billing and guest-first operations.",
    className: "fine",
    to: "/tiffincurry-website/restaurants/dine-in",
  },
  {
    title: "Quick Service",
    label: "Fast counters",
    text: "Rush-hour billing, tokens, pickup orders and counter-to-kitchen sync.",
    className: "qsr",
    to: "/tiffincurry-website/restaurants/quick-service",
  },
  {
    title: "Cafe",
    label: "Casual formats",
    text: "Menu control, repeat customers, light bites, beverages and cozy service.",
    className: "cafe",
    to: "/tiffincurry-website/restaurants/cafe",
  },
  {
    title: "Bar & Lounge",
    label: "Night service",
    text: "Tabs, item control, captain orders, billing and high-value reporting.",
    className: "bar",
    to: "/tiffincurry-website/restaurants/bar-lounge",
  },
  {
    title: "Food Truck",
    label: "Mobile outlet",
    text: "Compact billing, quick menu changes and service that moves with you.",
    className: "truck",
    to: "/tiffincurry-website/restaurants/food-truck",
  },
  {
    title: "Cloud Kitchen",
    label: "Delivery first",
    text: "Aggregator orders, kitchen routing, item availability and dispatch control.",
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
          Built around real restaurant workflows
        </div>

        <h2 className="restaurant-title">One POS, tuned for every restaurant format</h2>

        <p className="restaurant-subtitle">
          Whether you run dine-in service, a fast counter, a cafe, a bar, a food truck or a
          delivery-first kitchen, TiffinCurry adapts to the way your team actually works.
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
