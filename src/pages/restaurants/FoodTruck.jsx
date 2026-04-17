import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  Clock3,
  MapPin,
  PackageCheck,
  ReceiptText,
  Route,
  Sparkles,
  Truck,
  Utensils,
  WifiOff,
  Zap,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useReveal from "../../hooks/useReveal";
import foodTruckImage from "../../assets/food_truck_res.png";
import billingMobile from "../../assets/billing_mobile.png";
import menuScreenshot from "../../assets/menu_screenshot.jpeg";
import orderScreenshot from "../../assets/order_management_screenshot.jpeg";

const truckHighlights = [
  {
    icon: <Zap size={23} />,
    title: "Compact rush billing",
    text: "Punch quick orders, combos, add-ons, and parcel bills from a simple counter flow made for tight spaces.",
  },
  {
    icon: <WifiOff size={23} />,
    title: "Service that keeps moving",
    text: "Stay ready for markets, events, campuses, and streets where speed matters and connectivity can fluctuate.",
  },
  {
    icon: <Route size={23} />,
    title: "Location-wise control",
    text: "Track sales by spot, event, daypart, menu item, and payment mode so each route becomes easier to plan.",
  },
];

const truckFeatures = [
  {
    icon: <ReceiptText size={21} />,
    title: "Fast counter billing",
    text: "Bill repeat orders, custom add-ons, and combos without making customers wait at the window.",
  },
  {
    icon: <PackageCheck size={21} />,
    title: "Takeaway-first flow",
    text: "Keep parcels, pickup calls, packing notes, and handoffs clear for a compact service team.",
  },
  {
    icon: <BadgeIndianRupee size={21} />,
    title: "Cash and UPI clarity",
    text: "Separate payment modes, discounts, refunds, and end-of-day cash without spreadsheet drama.",
  },
  {
    icon: <Utensils size={21} />,
    title: "Limited menu control",
    text: "Switch items on or off quickly when stock runs low or the truck changes location.",
  },
  {
    icon: <MapPin size={21} />,
    title: "Event-ready reporting",
    text: "Understand which places, festivals, office parks, or college events perform best.",
  },
  {
    icon: <BarChart3 size={21} />,
    title: "Daily owner reports",
    text: "View sales, item movement, peak hours, staff activity, and payment summaries after every shift.",
  },
];

const truckFlow = [
  "Menu set",
  "Order punched",
  "Payment taken",
  "Parcel packed",
  "Cash closed",
];

const truckFormats = [
  "Food trucks",
  "Food carts",
  "Event stalls",
  "Festival counters",
  "Campus kiosks",
  "Pop-up kitchens",
];

export default function FoodTruck() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark truck-shell" : "light truck-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="truck-page">
        <section className="truck-hero reveal reveal-stagger">
          <div className="truck-hero-copy">
            <div className="truck-eyebrow">
              <Sparkles size={16} />
              POS for food trucks and mobile outlets
            </div>

            <h1>Keep your food truck fast, tidy, and ready for every rush.</h1>

            <p>
              TiffinCurry helps food trucks manage quick billing, menu
              availability, parcel orders, UPI and cash payments, location-wise
              sales, and daily closing reports from one lean POS workflow.
            </p>

            <div className="truck-hero-actions">
              <Link to="/tiffincurry-website/demo" className="truck-primary-btn">
                Request demo <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website/pricing" className="truck-secondary-btn">
                View pricing
              </Link>
            </div>

            <div className="truck-trust-row">
              <span><Truck size={16} /> Mobile outlet ready</span>
              <span><Clock3 size={16} /> Rush-hour billing</span>
            </div>
          </div>

          <div className="truck-hero-visual">
            <div className="truck-image-card">
              <img src={foodTruckImage} alt="Food truck POS workflow" />
            </div>

            <div className="truck-floating-route">
              <span>Today&apos;s spot</span>
              <strong>Office Park Lunch</strong>
            </div>

            <div className="truck-floating-screen truck-floating-screen-left">
              <img src={billingMobile} alt="Food truck mobile billing screen" />
            </div>

            <div className="truck-floating-screen truck-floating-screen-right">
              <img src={orderScreenshot} alt="Food truck order management screen" />
            </div>
          </div>
        </section>

        <section className="truck-highlight-grid reveal reveal-stagger">
          {truckHighlights.map((card) => (
            <article className="truck-highlight-card" key={card.title}>
              <div className="truck-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="truck-flow reveal reveal-stagger">
          <div className="truck-section-heading">
            <span>Mobile counter flow</span>
            <h2>From menu setup to cash closing, keep the window moving.</h2>
            <p>
              Food truck service is small-team, high-speed work. Your POS should
              help the counter, packing table, and owner reports stay in sync.
            </p>
          </div>

          <div className="truck-flow-track">
            {truckFlow.map((step, index) => (
              <div className="truck-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="truck-showcase reveal reveal-stagger">
          <div className="truck-showcase-copy">
            <div className="truck-section-heading truck-section-heading-left">
              <span>Lean menu control</span>
              <h2>Run a changing menu without slowing the service window.</h2>
              <p>
                Update availability, create combos, manage add-ons, and keep the
                most profitable items easy to sell during short, intense rushes.
              </p>
            </div>

            <div className="truck-check-list">
              <span>Quick item search, combos, parcel charges, and UPI-ready bills</span>
              <span>Availability control for limited stock and changing locations</span>
              <span>Location, event, payment, and item-wise reports after each shift</span>
            </div>
          </div>

          <div className="truck-product-stack">
            <img src={menuScreenshot} alt="Food truck menu management screen" />
            <img src={billingMobile} alt="Food truck billing screen" />
          </div>
        </section>

        <section className="truck-features reveal reveal-stagger">
          <div className="truck-section-heading">
            <span>What mobile food teams need</span>
            <h2>A compact POS for busy windows, changing spots, and clean closing.</h2>
          </div>

          <div className="truck-feature-grid">
            {truckFeatures.map((feature) => (
              <article className="truck-feature-card" key={feature.title}>
                <div className="truck-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="truck-types reveal reveal-stagger">
          <div className="truck-section-heading truck-section-heading-left">
            <span>Mobile formats</span>
            <h2>Made for compact, fast-moving food businesses.</h2>
          </div>

          <div className="truck-type-list">
            {truckFormats.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </section>

        <section className="truck-cta reveal reveal-stagger">
          <span>Ready to speed up the service window?</span>
          <h2>Give your food truck a POS that moves as fast as your team.</h2>
          <Link to="/tiffincurry-website/demo" className="truck-primary-btn truck-cta-btn">
            Book a demo <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
