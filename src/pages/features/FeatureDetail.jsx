import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  ChefHat,
  ClipboardCheck,
  Clock3,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useReveal from "../../hooks/useReveal";

import auditImage from "../../assets/advance_audit.jpeg";
import billingImage from "../../assets/lightning-fast-billing.png";
import crmImage from "../../assets/customer_centricity.jpeg";
import hrmImage from "../../assets/hrm.png";
import inventoryImage from "../../assets/inventory_management.jpeg";
import kotImage from "../../assets/kot_screen.png";
import menuImage from "../../assets/menu_management.jpeg";
import orderImage from "../../assets/order_management.jpeg";
import queueImage from "../../assets/queue_management.jpeg";
import reportsImage from "../../assets/reports_analytics.jpeg";

const featurePages = {
  pos: {
    eyebrow: "Counter speed",
    title: "Billing that keeps rush hours moving.",
    intro:
      "Create GST-ready bills, apply discounts, accept payments, and close orders quickly even when the counter is crowded.",
    image: billingImage,
    icon: <ReceiptText size={22} />,
    accent: "Fast checkout",
    bestFor: "Counters, quick service restaurants, cafes, food trucks, and busy dine-in billing desks.",
    outcomes: [
      "Reduce waiting time during lunch and dinner rush.",
      "Handle cash, UPI, card, discounts, and receipts in one flow.",
      "Keep billing simple enough for new staff to learn quickly.",
    ],
    workflow: ["Punch order", "Apply offer", "Accept payment", "Print or share bill"],
  },
  "order-management": {
    eyebrow: "Order control",
    title: "Every order visible from counter to kitchen.",
    intro:
      "Track dine-in, takeaway, delivery, and repeat orders with cleaner handoffs between captain, cashier, kitchen, and owner.",
    image: orderImage,
    icon: <ClipboardCheck size={22} />,
    accent: "Live order tracking",
    bestFor: "Restaurants managing multiple order channels, tables, parcels, and delivery handoffs.",
    outcomes: [
      "Know which orders are new, preparing, ready, served, or closed.",
      "Avoid missed parcels and repeated staff follow-ups.",
      "Give owners a clearer view of what is happening right now.",
    ],
    workflow: ["Order captured", "KOT sent", "Status tracked", "Bill closed"],
  },
  "queue-management": {
    eyebrow: "Guest experience",
    title: "Make waiting guests feel managed, not forgotten.",
    intro:
      "Manage waitlists, table readiness, and guest flow so your front desk can handle peak hours with confidence.",
    image: queueImage,
    icon: <Clock3 size={22} />,
    accent: "Better guest flow",
    bestFor: "Family restaurants, fine dining, cafes, and any outlet where guests wait during peak hours.",
    outcomes: [
      "Keep a simple waitlist instead of verbal promises.",
      "Prepare tables and staff before the guest sits down.",
      "Reduce confusion at the door during weekend rush.",
    ],
    workflow: ["Guest added", "Wait time noted", "Table prepared", "Guest seated"],
  },
  "audit-trail": {
    eyebrow: "Owner control",
    title: "See sensitive actions before they become losses.",
    intro:
      "Track voids, discounts, bill edits, user actions, and manager approvals so operations stay accountable.",
    image: auditImage,
    icon: <ShieldCheck size={22} />,
    accent: "Action history",
    bestFor: "Owners who cannot personally stand at every counter, shift, or outlet all day.",
    outcomes: [
      "Review who changed bills, discounts, and cancelled items.",
      "Reduce leakage from casual edits and unclear approvals.",
      "Build stronger discipline without disturbing daily service.",
    ],
    workflow: ["Action done", "User recorded", "Manager reviews", "Issue corrected"],
  },
  kot: {
    eyebrow: "Kitchen rhythm",
    title: "A clearer kitchen display for faster service.",
    intro:
      "Send KOTs to the kitchen, track preparation status, and reduce verbal calls between service staff and chefs.",
    image: kotImage,
    icon: <ChefHat size={22} />,
    accent: "KOT display",
    bestFor: "Restaurants where kitchen coordination decides speed, accuracy, and guest satisfaction.",
    outcomes: [
      "Route orders to kitchen without handwritten confusion.",
      "Help chefs see priority, table, item, and instruction clearly.",
      "Improve service speed by reducing back-and-forth calls.",
    ],
    workflow: ["KOT received", "Prep started", "Item ready", "Service updated"],
  },
  "menu-management": {
    eyebrow: "Menu control",
    title: "Change prices, items, variants, and availability without chaos.",
    intro:
      "Keep your menu current across items, variants, add-ons, combos, sold-out items, and outlet-specific availability.",
    image: menuImage,
    icon: <BadgeCheck size={22} />,
    accent: "Live menu control",
    bestFor: "Restaurants that frequently change prices, combos, seasonal items, and availability.",
    outcomes: [
      "Update price and item availability without disturbing billing.",
      "Manage variants, add-ons, combos, and item groups clearly.",
      "Avoid selling items that are unavailable in the kitchen.",
    ],
    workflow: ["Item updated", "Availability set", "Billing syncs", "Kitchen follows"],
  },
  crm: {
    eyebrow: "Customer loyalty",
    title: "Know guests beyond a single bill.",
    intro:
      "Save customer details, understand repeat visits, and create a base for offers, feedback, and retention.",
    image: crmImage,
    icon: <Users size={22} />,
    accent: "Guest 360",
    bestFor: "Restaurants that want repeat customers instead of depending only on walk-ins and aggregators.",
    outcomes: [
      "Capture customer history from daily orders and bills.",
      "Identify repeat customers, preferences, and visit patterns.",
      "Create better offers for the right customers at the right time.",
    ],
    workflow: ["Customer saved", "History builds", "Offer planned", "Guest returns"],
  },
  "inventory-management": {
    eyebrow: "Stock clarity",
    title: "Know what is moving before stock becomes a surprise.",
    intro:
      "Track inventory, consumption, suppliers, and stock movement so the kitchen can plan better and waste less.",
    image: inventoryImage,
    icon: <PackageCheck size={22} />,
    accent: "Live inventory",
    bestFor: "Restaurants that want better control over ingredients, purchases, wastage, and stock-outs.",
    outcomes: [
      "Track fast-moving items and ingredients with better visibility.",
      "Reduce last-minute stock surprises during busy service.",
      "Understand purchases, usage, wastage, and supplier dependency.",
    ],
    workflow: ["Stock added", "Items consumed", "Low stock seen", "Purchase planned"],
  },
  hrm: {
    eyebrow: "Team operations",
    title: "Manage staff roles, shifts, and accountability with less friction.",
    intro:
      "Keep attendance, roles, access, shifts, and staff productivity connected to day-to-day restaurant operations.",
    image: hrmImage,
    icon: <Users size={22} />,
    accent: "Team control",
    bestFor: "Owners and managers who need clearer staff control across counters, service, kitchen, and outlets.",
    outcomes: [
      "Control staff access based on role and responsibility.",
      "Track attendance, shifts, and day-to-day team activity.",
      "Improve accountability without making operations complicated.",
    ],
    workflow: ["Role assigned", "Shift tracked", "Action logged", "Performance reviewed"],
  },
  "reports-analytics": {
    eyebrow: "Business clarity",
    title: "Daily reports that help owners decide faster.",
    intro:
      "See sales, payments, bestsellers, staff actions, customer trends, and outlet performance in simple decision-ready reports.",
    image: reportsImage,
    icon: <BarChart3 size={22} />,
    accent: "Owner insights",
    bestFor: "Restaurant owners who want clear answers without waiting for manual Excel or end-of-month confusion.",
    outcomes: [
      "Understand sales, payments, bestsellers, and busy hours.",
      "Review performance by item, day, channel, staff, or outlet.",
      "Make menu, offer, purchase, and staffing decisions with data.",
    ],
    workflow: ["Data captured", "Report prepared", "Owner reviews", "Decision made"],
  },
};

export default function FeatureDetail() {
  const [dark, setDark] = useState(false);
  const { slug } = useParams();
  const page = featurePages[slug];
  useReveal();

  if (!page) {
    return <Navigate to="/tiffincurry-website" replace />;
  }

  return (
    <div className={dark ? "dark feature-detail-shell" : "light feature-detail-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="feature-detail-page">
        <section className="feature-detail-hero reveal reveal-stagger">
          <div className="feature-detail-copy">
            <div className="feature-detail-eyebrow">
              <Sparkles size={16} />
              {page.eyebrow}
            </div>

            <h1>{page.title}</h1>
            <p>{page.intro}</p>

            <div className="feature-detail-actions">
              <Link to="/tiffincurry-website/demo" className="feature-detail-primary-btn">
                Request demo <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website/pricing" className="feature-detail-secondary-btn">
                View pricing
              </Link>
              <Link
                to={`/tiffincurry-website?feature=${slug}#features`}
                className="feature-detail-context-btn"
              >
                <ArrowLeft size={17} />
                Back to feature list
              </Link>
            </div>
          </div>

          <div className="feature-detail-visual" aria-label={`${page.title} preview`}>
            <div className="feature-detail-image-card">
              <img src={page.image} alt={`${page.title} screen preview`} />
            </div>
            <div className="feature-detail-floating-note">
              <span>{page.icon}</span>
              <div>
                <small>Built for</small>
                <strong>{page.accent}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-detail-outcomes reveal reveal-stagger" aria-label="Feature outcomes">
          <div className="feature-detail-section-heading">
            <span>What it helps you do</span>
            <h2>Practical control for daily restaurant work.</h2>
          </div>

          <div className="feature-detail-outcome-grid">
            {page.outcomes.map((outcome) => (
              <article className="feature-detail-outcome-card" key={outcome}>
                <BadgeCheck size={19} />
                <p>{outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-detail-flow reveal reveal-stagger">
          <div className="feature-detail-flow-copy">
            <span>Simple workflow</span>
            <h2>Designed so teams can use it during service, not after service.</h2>
            <p>{page.bestFor}</p>
          </div>

          <div className="feature-detail-flow-line">
            {page.workflow.map((step, index) => (
              <div className="feature-detail-flow-step" key={step}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="feature-detail-cta reveal">
          <div>
            <span>Ready to see it in your restaurant?</span>
            <h2>Let TiffinCurry show this workflow with your menu and service style.</h2>
          </div>
          <Link to="/tiffincurry-website/demo" className="feature-detail-primary-btn">
            Book a walkthrough <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
