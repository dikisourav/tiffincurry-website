import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  BellRing,
  Boxes,
  ChefHat,
  Cloud,
  PackageCheck,
  ReceiptText,
  Sparkles,
  Store,
  TimerReset,
  Utensils,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useReveal from "../../hooks/useReveal";
import cloudKitchenImage from "../../assets/cloud_kitchen_res.png";
import orderScreenshot from "../../assets/order_management_screenshot.jpeg";
import menuScreenshot from "../../assets/menu_screenshot.jpeg";
import kotScreen from "../../assets/kot_screen.png";

const cloudHighlights = [
  {
    icon: <Cloud size={23} />,
    title: "Delivery-first control",
    text: "Manage aggregator, direct, phone, and repeat orders from a cleaner operational flow.",
  },
  {
    icon: <ChefHat size={23} />,
    title: "Kitchen routing",
    text: "Send every order to the right prep station with clear KOT status and fewer verbal follow-ups.",
  },
  {
    icon: <Store size={23} />,
    title: "Multi-brand ready",
    text: "Run multiple virtual brands, menus, cuisines, and item availability from one setup.",
  },
];

const cloudFeatures = [
  {
    icon: <ReceiptText size={21} />,
    title: "Order consolidation",
    text: "Bring delivery, direct, counter, and phone orders into one visible queue.",
  },
  {
    icon: <TimerReset size={21} />,
    title: "Prep-time visibility",
    text: "Track accepted, preparing, packed, and dispatched orders without losing the kitchen rhythm.",
  },
  {
    icon: <PackageCheck size={21} />,
    title: "Packing workflow",
    text: "Keep parcels, labels, instructions, and handoff checks clear before dispatch.",
  },
  {
    icon: <Boxes size={21} />,
    title: "Inventory awareness",
    text: "Stay ahead of fast-moving ingredients, unavailable items, and stock-sensitive menus.",
  },
  {
    icon: <BadgeIndianRupee size={21} />,
    title: "Commission clarity",
    text: "Understand sales, discounts, delivery channel performance, and payment collections better.",
  },
  {
    icon: <BarChart3 size={21} />,
    title: "Brand-wise reporting",
    text: "Track item movement, cuisine demand, peak times, and brand performance from one dashboard.",
  },
];

const cloudFlow = [
  "Order received",
  "KOT routed",
  "Prep tracked",
  "Parcel packed",
  "Dispatch closed",
];

const cloudFormats = [
  "Cloud kitchens",
  "Virtual brands",
  "Delivery kitchens",
  "Central kitchens",
  "Dark kitchens",
  "Multi-brand kitchens",
];

export default function CloudKitchen() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark cloudk-shell" : "light cloudk-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="cloudk-page">
        <section className="cloudk-hero reveal reveal-stagger">
          <div className="cloudk-hero-copy">
            <div className="cloudk-eyebrow">
              <Sparkles size={16} />
              POS for cloud kitchens and virtual brands
            </div>

            <h1>Run every delivery order from one calm kitchen command center.</h1>

            <p>
              TiffinCurry helps cloud kitchens manage order queues, KOT routing,
              menu availability, packing checks, delivery handoffs, and
              brand-wise reports from one delivery-first POS workflow.
            </p>

            <div className="cloudk-hero-actions">
              <Link to="/tiffincurry-website/demo" className="cloudk-primary-btn">
                Request demo <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website/pricing" className="cloudk-secondary-btn">
                View pricing
              </Link>
            </div>

            <div className="cloudk-trust-row">
              <span><BellRing size={16} /> Live order queue</span>
              <span><Utensils size={16} /> Multi-brand menus</span>
            </div>
          </div>

          <div className="cloudk-hero-visual">
            <div className="cloudk-image-card">
              <img src={cloudKitchenImage} alt="Cloud kitchen order preparation workflow" />
            </div>

            <div className="cloudk-floating-status">
              <span>Live queue</span>
              <strong>18 orders preparing</strong>
            </div>

            <div className="cloudk-floating-screen cloudk-floating-screen-left">
              <img src={orderScreenshot} alt="Cloud kitchen order queue screen" />
            </div>

            <div className="cloudk-floating-screen cloudk-floating-screen-right">
              <img src={menuScreenshot} alt="Cloud kitchen menu availability screen" />
            </div>
          </div>
        </section>

        <section className="cloudk-highlight-grid reveal reveal-stagger">
          {cloudHighlights.map((card) => (
            <article className="cloudk-highlight-card" key={card.title}>
              <div className="cloudk-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="cloudk-flow reveal reveal-stagger">
          <div className="cloudk-section-heading">
            <span>Delivery kitchen flow</span>
            <h2>From incoming order to dispatch, every kitchen step stays visible.</h2>
            <p>
              Delivery-first kitchens need speed and discipline. TiffinCurry keeps
              orders, stations, packing, and dispatch aligned even during rush hours.
            </p>
          </div>

          <div className="cloudk-flow-track">
            {cloudFlow.map((step, index) => (
              <div className="cloudk-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="cloudk-showcase reveal reveal-stagger">
          <div className="cloudk-showcase-copy">
            <div className="cloudk-section-heading cloudk-section-heading-left">
              <span>Order operations</span>
              <h2>Keep multiple brands, menus, and delivery channels under control.</h2>
              <p>
                Handle item availability, prep routing, packing notes, channel-wise
                performance, and daily closing without switching between messy systems.
              </p>
            </div>

            <div className="cloudk-check-list">
              <span>Aggregator, direct, phone, and repeat orders in one queue</span>
              <span>Kitchen routing, prep status, packing checks, and dispatch handoff</span>
              <span>Brand-wise sales, item movement, payment, and channel reports</span>
            </div>
          </div>

          <div className="cloudk-product-stack">
            <img src={kotScreen} alt="Cloud kitchen KOT routing screen" />
            <img src={orderScreenshot} alt="Cloud kitchen order management screen" />
          </div>
        </section>

        <section className="cloudk-features reveal reveal-stagger">
          <div className="cloudk-section-heading">
            <span>What cloud kitchens need</span>
            <h2>A delivery-first POS for order speed, kitchen clarity, and brand growth.</h2>
          </div>

          <div className="cloudk-feature-grid">
            {cloudFeatures.map((feature) => (
              <article className="cloudk-feature-card" key={feature.title}>
                <div className="cloudk-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cloudk-types reveal reveal-stagger">
          <div className="cloudk-section-heading cloudk-section-heading-left">
            <span>Delivery-first formats</span>
            <h2>Made for kitchens that operate behind the scenes but at high speed.</h2>
          </div>

          <div className="cloudk-type-list">
            {cloudFormats.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </section>

        <section className="cloudk-cta reveal reveal-stagger">
          <span>Ready for a cleaner delivery kitchen?</span>
          <h2>Give your cloud kitchen one command center for orders, prep, and dispatch.</h2>
          <Link to="/tiffincurry-website/demo" className="cloudk-primary-btn cloudk-cta-btn">
            Book a demo <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
