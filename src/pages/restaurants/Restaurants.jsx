import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  ChefHat,
  Clock3,
  CreditCard,
  HandPlatter,
  ReceiptText,
  Sparkles,
  TabletSmartphone,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useReveal from "../../hooks/useReveal";
import fineDine from "../../assets/fine_dine_res.png";
import menuScreenshot from "../../assets/menu_screenshot.jpeg";
import orderScreenshot from "../../assets/order_management_screenshot.jpeg";
import tableViewScreenshot from "../../assets/table_view_screenshot.jpeg";

const serviceHighlights = [
  {
    icon: <UtensilsCrossed size={24} />,
    title: "Table-side ordering",
    text: "Capture orders by table, seat, course, and waiter without slowing the floor team down.",
  },
  {
    icon: <ChefHat size={24} />,
    title: "Kitchen routing",
    text: "Send dishes to the right kitchen counter with live KOT visibility and fewer verbal follow-ups.",
  },
  {
    icon: <CreditCard size={24} />,
    title: "Fast billing",
    text: "Split bills, merge tables, apply discounts, and close service with a smoother checkout flow.",
  },
];

const workflowSteps = [
  "Guest seated",
  "Order punched",
  "KOT generated",
  "Food served",
  "Bill settled",
];

const dineInFeatures = [
  {
    icon: <UsersRound size={22} />,
    title: "Smart table management",
    text: "Track occupied, reserved, running, and ready-to-bill tables from one clear floor view.",
  },
  {
    icon: <ReceiptText size={22} />,
    title: "Split and merge bills",
    text: "Handle group dining, partial payments, room charges, and repeat orders without messy edits.",
  },
  {
    icon: <Clock3 size={22} />,
    title: "Faster service turns",
    text: "Reduce waiting time between order, kitchen, serving, and final settlement.",
  },
  {
    icon: <TabletSmartphone size={22} />,
    title: "Mobile waiter ordering",
    text: "Let captains take orders from the table and sync them instantly with the POS and kitchen.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Live performance insights",
    text: "Know peak hours, average table value, best-selling dishes, and staff productivity.",
  },
  {
    icon: <HandPlatter size={22} />,
    title: "Guest-first operations",
    text: "Keep service personal while the system quietly handles billing, stock, and reporting.",
  },
];

const restaurantTypes = [
  "Fine dine",
  "Casual dining",
  "Family restaurants",
  "Bars and lounges",
  "Cafes with seating",
  "Multi-outlet dining brands",
];

export default function Restaurants() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark dine-in-shell" : "light dine-in-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="dine-in-page">
        <section className="dine-hero reveal reveal-stagger">
          <div className="dine-hero-copy">
            <div className="dine-eyebrow">
              <Sparkles size={16} />
              POS for dine-in restaurants
            </div>

            <h1>
              Run a calmer, faster, guest-ready dining room.
            </h1>

            <p>
              TiffinCurry helps dine-in restaurants manage tables, waiter orders,
              kitchen tickets, billing, inventory, and reports from one connected
              restaurant POS.
            </p>

            <div className="dine-hero-actions">
              <Link to="/tiffincurry-website/demo" className="dine-primary-btn">
                Book a demo <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website/pricing" className="dine-secondary-btn">
                View pricing
              </Link>
            </div>

            <div className="dine-hero-stats" aria-label="Dine-in restaurant benefits">
              <span><strong>3x</strong> faster table updates</span>
              <span><strong>24/7</strong> offline-ready billing</span>
              <span><strong>1</strong> dashboard for operations</span>
            </div>
          </div>

          <div className="dine-hero-visual">
            <img src={fineDine} alt="Fine dine restaurant POS setup" />
            <div className="dine-floating-card dine-floating-card-top">
              <span>Table 08</span>
              <strong>Ready to bill</strong>
            </div>
            <div className="dine-floating-card dine-floating-card-bottom">
              <span>Kitchen</span>
              <strong>4 orders in progress</strong>
            </div>
          </div>
        </section>

        <section className="dine-service-grid reveal reveal-stagger">
          {serviceHighlights.map((item) => (
            <article className="dine-service-card" key={item.title}>
              <div className="dine-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="dine-workflow reveal reveal-stagger">
          <div className="dine-section-heading">
            <span>Service flow</span>
            <h2>Every step of dine-in service, connected.</h2>
            <p>
              From the moment a guest is seated to the final receipt, the system
              keeps your floor, kitchen, and billing counter in sync.
            </p>
          </div>

          <div className="dine-workflow-track">
            {workflowSteps.map((step, index) => (
              <div className="dine-workflow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="dine-showcase reveal reveal-stagger">
          <div className="dine-showcase-copy">
            <div className="dine-section-heading dine-section-heading-left">
              <span>Floor control</span>
              <h2>Know what is happening at every table.</h2>
              <p>
                Give managers and captains a real-time view of occupied tables,
                open orders, running KOTs, pending bills, and table turn time.
              </p>
            </div>

            <div className="dine-check-list">
              <span>Table reservations and live table status</span>
              <span>Waiter-wise sales and order accountability</span>
              <span>Discount approvals and GST-ready receipts</span>
            </div>
          </div>

          <div className="dine-dashboard-card">
            <div className="dine-dashboard-header">
              <span>Tonight's floor</span>
              <strong>18 tables active</strong>
            </div>
            <div className="dine-table-map">
              {["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"].map((table, index) => (
                <div
                  className={`dine-table-pill ${index % 3 === 0 ? "billing" : index % 2 === 0 ? "served" : ""}`}
                  key={table}
                >
                  {table}
                </div>
              ))}
            </div>
            <div className="dine-dashboard-footer">
              <span>Average turn time</span>
              <strong>42 min</strong>
            </div>
          </div>
        </section>

        <section className="dine-features reveal reveal-stagger">
          <div className="dine-section-heading">
            <span>What you get</span>
            <h2>Built for the real pressure of service hours.</h2>
          </div>

          <div className="dine-feature-grid">
            {dineInFeatures.map((feature) => (
              <article className="dine-feature-card" key={feature.title}>
                <div className="dine-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dine-image-band reveal reveal-stagger">
          <img src={tableViewScreenshot} alt="Dine-in table view screen" />
          <img src={orderScreenshot} alt="Restaurant order management screen" />
          <img src={menuScreenshot} alt="Restaurant menu management screen" />
        </section>

        <section className="dine-types reveal reveal-stagger">
          <div className="dine-section-heading dine-section-heading-left">
            <span>Dine-in formats</span>
            <h2>Made for every seating-led restaurant format.</h2>
          </div>

          <div className="dine-type-list">
            {restaurantTypes.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </section>

        <section className="dine-cta reveal reveal-stagger">
          <span>Ready for smoother service?</span>
          <h2>Give your team a POS that keeps pace with your dining room.</h2>
          <Link to="/tiffincurry-website/demo" className="dine-primary-btn dine-cta-btn">
            Request demo <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
