import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgePercent,
  BarChart3,
  Coffee,
  CupSoda,
  HeartHandshake,
  MessageCircle,
  PackageCheck,
  ReceiptText,
  Repeat,
  Sparkles,
  Utensils,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useReveal from "../../hooks/useReveal";
import cafeImage from "../../assets/cafe_res.png";
import menuScreenshot from "../../assets/menu_screenshot.jpeg";
import orderScreenshot from "../../assets/order_management_screenshot.jpeg";
import billingMobile from "../../assets/billing_mobile.png";

const cafeHighlights = [
  {
    icon: <Coffee size={23} />,
    title: "Fast cafe billing",
    text: "Bill coffees, snacks, bakery items, combos, add-ons, and repeat orders without slowing service.",
  },
  {
    icon: <CupSoda size={23} />,
    title: "Menu and availability",
    text: "Update beverages, specials, item availability, prices, and modifiers from one place.",
  },
  {
    icon: <HeartHandshake size={23} />,
    title: "Customer-friendly flow",
    text: "Support dine-in, takeaway, regular customers, and quick service with a simple counter workflow.",
  },
];

const cafeFeatures = [
  {
    icon: <ReceiptText size={21} />,
    title: "Quick counter orders",
    text: "Punch orders fast for walk-ins, regulars, and takeaway customers.",
  },
  {
    icon: <BadgePercent size={21} />,
    title: "Combos and offers",
    text: "Create coffee combos, bakery add-ons, happy hour offers, and custom discounts.",
  },
  {
    icon: <Repeat size={21} />,
    title: "Repeat customer tracking",
    text: "Understand loyal customers, repeat orders, and high-performing items.",
  },
  {
    icon: <PackageCheck size={21} />,
    title: "Takeaway-ready",
    text: "Manage parcels, pickup orders, and counter handoffs without confusion.",
  },
  {
    icon: <MessageCircle size={21} />,
    title: "WhatsApp engagement",
    text: "Stay connected with customers for updates, offers, and repeat visits.",
  },
  {
    icon: <BarChart3 size={21} />,
    title: "Sales and menu insights",
    text: "Track best-selling drinks, slow items, payment modes, and daily performance.",
  },
];

const cafeFlow = [
  "Guest orders",
  "Item customized",
  "Bill generated",
  "Order prepared",
  "Pickup or serve",
];

const cafeFormats = [
  "Independent cafes",
  "Coffee shops",
  "Bakery cafes",
  "Tea and beverage outlets",
  "Dessert cafes",
  "Cafe chains",
];

export default function Cafe() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark cafe-shell" : "light cafe-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="cafe-page">
        <section className="cafe-hero reveal reveal-stagger">
          <div className="cafe-hero-copy">
            <div className="cafe-eyebrow">
              <Sparkles size={16} />
              POS for cafes and beverage outlets
            </div>

            <h1>Keep your cafe service warm, quick, and beautifully organized.</h1>

            <p>
              TiffinCurry helps cafes manage fast counter billing, menu changes,
              takeaway orders, repeat customers, offers, and daily reports from one
              clean POS workflow.
            </p>

            <div className="cafe-hero-actions">
              <Link to="/tiffincurry-website/demo" className="cafe-primary-btn">
                Request demo <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website/pricing" className="cafe-secondary-btn">
                View pricing
              </Link>
            </div>

            <div className="cafe-trust-row">
              <span><Coffee size={16} /> Cafe-ready billing</span>
              <span><Utensils size={16} /> Dine-in and takeaway</span>
            </div>
          </div>

          <div className="cafe-hero-visual">
            <div className="cafe-image-card">
              <img src={cafeImage} alt="Cafe POS workflow" />
            </div>

            <div className="cafe-floating-ticket">
              <span>Morning rush</span>
              <strong>32 orders served</strong>
            </div>

            <div className="cafe-floating-screen cafe-floating-screen-menu">
              <img src={menuScreenshot} alt="Cafe menu management screen" />
            </div>

            <div className="cafe-floating-screen cafe-floating-screen-order">
              <img src={orderScreenshot} alt="Cafe order management screen" />
            </div>
          </div>
        </section>

        <section className="cafe-highlight-grid reveal reveal-stagger">
          {cafeHighlights.map((card) => (
            <article className="cafe-highlight-card" key={card.title}>
              <div className="cafe-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="cafe-flow reveal reveal-stagger">
          <div className="cafe-section-heading">
            <span>Cafe service flow</span>
            <h2>From custom orders to pickup, keep every cup moving.</h2>
            <p>
              A cafe POS should stay fast without making service feel mechanical.
              TiffinCurry keeps the counter, preparation, and checkout flow aligned.
            </p>
          </div>

          <div className="cafe-flow-track">
            {cafeFlow.map((step, index) => (
              <div className="cafe-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="cafe-showcase reveal reveal-stagger">
          <div className="cafe-showcase-copy">
            <div className="cafe-section-heading cafe-section-heading-left">
              <span>Menu control</span>
              <h2>Handle customizations, add-ons, and changing menus with ease.</h2>
              <p>
                Manage hot drinks, cold beverages, bakery items, snacks, toppings,
                variants, combos, and availability without slowing the counter.
              </p>
            </div>

            <div className="cafe-check-list">
              <span>Variants for size, milk type, sweetness, and add-ons</span>
              <span>Combos for coffee plus snacks or dessert pairings</span>
              <span>Daily reports for bestsellers, peak hours, and payment modes</span>
            </div>
          </div>

          <div className="cafe-product-stack">
            <img src={menuScreenshot} alt="Cafe menu screen" />
            <img src={billingMobile} alt="Cafe mobile billing screen" />
          </div>
        </section>

        <section className="cafe-features reveal reveal-stagger">
          <div className="cafe-section-heading">
            <span>What cafe teams need</span>
            <h2>A cafe POS that keeps the counter moving and customers coming back.</h2>
          </div>

          <div className="cafe-feature-grid">
            {cafeFeatures.map((feature) => (
              <article className="cafe-feature-card" key={feature.title}>
                <div className="cafe-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cafe-types reveal reveal-stagger">
          <div className="cafe-section-heading cafe-section-heading-left">
            <span>Cafe formats</span>
            <h2>Made for beverage-led and casual dining spaces.</h2>
          </div>

          <div className="cafe-type-list">
            {cafeFormats.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </section>

        <section className="cafe-cta reveal reveal-stagger">
          <span>Ready for a smoother cafe counter?</span>
          <h2>Give your cafe a POS that feels as smooth as your service.</h2>
          <Link to="/tiffincurry-website/demo" className="cafe-primary-btn cafe-cta-btn">
            Book a demo <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
