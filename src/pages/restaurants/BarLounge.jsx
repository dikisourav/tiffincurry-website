import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  Clock3,
  ClipboardList,
  GlassWater,
  Music2,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
  Wine,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useReveal from "../../hooks/useReveal";
import barImage from "../../assets/bar_res.png";
import menuScreenshot from "../../assets/menu_screenshot.jpeg";
import orderScreenshot from "../../assets/order_management_screenshot.jpeg";
import inventoryScreenshot from "../../assets/inventory_management.jpeg";

const loungeHighlights = [
  {
    icon: <Wine size={23} />,
    title: "Table and tab control",
    text: "Open, merge, split, and settle guest tabs smoothly across lounge tables, bar counters, and private sections.",
  },
  {
    icon: <GlassWater size={23} />,
    title: "Happy hour ready",
    text: "Run time-based offers, combo pricing, category discounts, and special event menus without billing confusion.",
  },
  {
    icon: <ShieldCheck size={23} />,
    title: "Controlled operations",
    text: "Track item movement, staff access, voids, discounts, and closing reports with stronger manager visibility.",
  },
];

const loungeFeatures = [
  {
    icon: <ReceiptText size={21} />,
    title: "Open tabs and split bills",
    text: "Handle group orders, partial payments, counter tabs, and final settlement without manual juggling.",
  },
  {
    icon: <ClipboardList size={21} />,
    title: "Captain order taking",
    text: "Keep service staff, bar counters, and billing aligned from the moment an order is punched.",
  },
  {
    icon: <BadgeIndianRupee size={21} />,
    title: "Offers and cover charges",
    text: "Manage happy hours, event pricing, cover charges, service charges, and custom discounts.",
  },
  {
    icon: <PackageCheck size={21} />,
    title: "Stock-sensitive menu",
    text: "Stay aware of fast-moving bottles, mixers, snacks, and unavailable items before service gets messy.",
  },
  {
    icon: <Users size={21} />,
    title: "Role-based access",
    text: "Give owners, managers, cashiers, and service staff the right level of control at the right time.",
  },
  {
    icon: <BarChart3 size={21} />,
    title: "Nightly performance reports",
    text: "See sales by category, payment mode, staff, discounts, voids, and peak-hour movement.",
  },
];

const loungeFlow = [
  "Guest seated",
  "Tab opened",
  "Order routed",
  "Bill split",
  "Night closed",
];

const loungeFormats = [
  "Bar and lounge",
  "Resto bars",
  "Pubs",
  "Cocktail bars",
  "Sports bars",
  "Night cafes",
];

export default function BarLounge() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark lounge-shell" : "light lounge-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="lounge-page">
        <section className="lounge-hero reveal reveal-stagger">
          <div className="lounge-hero-copy">
            <div className="lounge-eyebrow">
              <Sparkles size={16} />
              POS for bars, pubs and lounges
            </div>

            <h1>Run a sharper bar floor without slowing the vibe.</h1>

            <p>
              TiffinCurry helps bars and lounges manage tabs, captain orders,
              happy hours, inventory-sensitive menus, settlements, and closing
              reports from one polished POS workflow.
            </p>

            <div className="lounge-hero-actions">
              <Link to="/tiffincurry-website/demo" className="lounge-primary-btn">
                Request demo <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website/pricing" className="lounge-secondary-btn">
                View pricing
              </Link>
            </div>

            <div className="lounge-trust-row">
              <span><Clock3 size={16} /> Late-night closing</span>
              <span><Music2 size={16} /> Lounge floor control</span>
            </div>
          </div>

          <div className="lounge-hero-visual">
            <div className="lounge-image-card">
              <img src={barImage} alt="Bar and lounge POS workflow" />
            </div>

            <div className="lounge-floating-tab">
              <span>Table B7</span>
              <strong>Open tab: ₹4,860</strong>
            </div>

            <div className="lounge-floating-screen lounge-floating-screen-left">
              <img src={orderScreenshot} alt="Bar order management screen" />
            </div>

            <div className="lounge-floating-screen lounge-floating-screen-right">
              <img src={menuScreenshot} alt="Bar menu control screen" />
            </div>
          </div>
        </section>

        <section className="lounge-highlight-grid reveal reveal-stagger">
          {loungeHighlights.map((card) => (
            <article className="lounge-highlight-card" key={card.title}>
              <div className="lounge-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="lounge-flow reveal reveal-stagger">
          <div className="lounge-section-heading">
            <span>Bar service flow</span>
            <h2>From first round to final settlement, keep every tab visible.</h2>
            <p>
              A bar POS should protect speed, billing accuracy, and manager
              control while the floor stays busy and energetic.
            </p>
          </div>

          <div className="lounge-flow-track">
            {loungeFlow.map((step, index) => (
              <div className="lounge-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="lounge-showcase reveal reveal-stagger">
          <div className="lounge-showcase-copy">
            <div className="lounge-section-heading lounge-section-heading-left">
              <span>Manager visibility</span>
              <h2>Control pricing, stock movement, and closing reports with confidence.</h2>
              <p>
                Keep your menu, bar counter, billing desk, and management reports
                connected so every late-night service ends with a clean handover.
              </p>
            </div>

            <div className="lounge-check-list">
              <span>Tabs, split bills, service charges, discounts, and partial payments</span>
              <span>Category-wise visibility for beverages, food, mixers, and add-ons</span>
              <span>Daily closing reports for sales, voids, staff actions, and payments</span>
            </div>
          </div>

          <div className="lounge-product-stack">
            <img src={inventoryScreenshot} alt="Bar inventory management screen" />
            <img src={menuScreenshot} alt="Bar menu management screen" />
          </div>
        </section>

        <section className="lounge-features reveal reveal-stagger">
          <div className="lounge-section-heading">
            <span>What bar teams need</span>
            <h2>A premium POS for service speed, billing control, and owner clarity.</h2>
          </div>

          <div className="lounge-feature-grid">
            {loungeFeatures.map((feature) => (
              <article className="lounge-feature-card" key={feature.title}>
                <div className="lounge-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lounge-types reveal reveal-stagger">
          <div className="lounge-section-heading lounge-section-heading-left">
            <span>Bar formats</span>
            <h2>Built for premium night-service formats.</h2>
          </div>

          <div className="lounge-type-list">
            {loungeFormats.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </section>

        <section className="lounge-cta reveal reveal-stagger">
          <span>Ready for tighter bar operations?</span>
          <h2>Give your lounge a POS that keeps service smooth and reports clean.</h2>
          <Link to="/tiffincurry-website/demo" className="lounge-primary-btn lounge-cta-btn">
            Book a demo <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
