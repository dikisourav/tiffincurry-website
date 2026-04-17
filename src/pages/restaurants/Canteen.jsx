import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  Building2,
  CalendarClock,
  ClipboardCheck,
  Clock3,
  CreditCard,
  PackageCheck,
  ReceiptText,
  Sparkles,
  TicketCheck,
  Users,
  Utensils,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useReveal from "../../hooks/useReveal";
import canteenImage from "../../assets/canteen.jpeg";
import billingMobile from "../../assets/billing_mobile.png";
import orderScreenshot from "../../assets/order_management_screenshot.jpeg";
import reportsScreenshot from "../../assets/reports_analytics.jpeg";
import inventoryScreenshot from "../../assets/inventory_management.jpeg";

const canteenHighlights = [
  {
    icon: <Clock3 size={23} />,
    title: "Meal-rush billing",
    text: "Serve breakfast, lunch, tea, and dinner windows quickly without counter confusion.",
  },
  {
    icon: <TicketCheck size={23} />,
    title: "Coupon and prepaid flow",
    text: "Handle cash, UPI, prepaid wallets, meal coupons, staff accounts, and fixed-price meals cleanly.",
  },
  {
    icon: <Building2 size={23} />,
    title: "Institution-ready control",
    text: "Track canteen sales by department, shift, class, hostel block, or service counter.",
  },
];

const canteenFeatures = [
  {
    icon: <ReceiptText size={21} />,
    title: "Simple counter billing",
    text: "Punch common meals, snacks, beverages, and repeat orders quickly during short breaks.",
  },
  {
    icon: <CreditCard size={21} />,
    title: "Prepaid and coupon support",
    text: "Keep coupon redemptions, prepaid collections, and daily payment totals easy to reconcile.",
  },
  {
    icon: <Users size={21} />,
    title: "Staff and student tracking",
    text: "Maintain clearer purchase history for employees, students, visitors, and regular diners.",
  },
  {
    icon: <PackageCheck size={21} />,
    title: "Stock awareness",
    text: "Track fast-moving ingredients, prepared batches, wastage, and low-stock items before rush begins.",
  },
  {
    icon: <CalendarClock size={21} />,
    title: "Meal schedule control",
    text: "Plan fixed menus, day-wise specials, price changes, and availability for different meal slots.",
  },
  {
    icon: <BarChart3 size={21} />,
    title: "Daily canteen reports",
    text: "See meal-wise sales, payment modes, item movement, rush slots, and closing summaries.",
  },
];

const canteenFlow = [
  "Meal window opens",
  "Order or coupon captured",
  "Payment checked",
  "Kitchen served",
  "Reports closed",
];

const canteenFormats = [
  "Office canteens",
  "School canteens",
  "College canteens",
  "Factory cafeterias",
  "Hostel dining halls",
  "Corporate food courts",
];

export default function Canteen() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark canteen-shell" : "light canteen-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="canteen-page">
        <section className="canteen-hero reveal reveal-stagger">
          <div className="canteen-hero-copy">
            <div className="canteen-eyebrow">
              <Sparkles size={16} />
              Restaurant management for canteen service
            </div>

            <h1>Run office and school canteens without rush-hour confusion.</h1>

            <p>
              TiffinCurry helps canteens manage quick billing, meal coupons,
              prepaid accounts, fixed menus, kitchen coordination, stock, and
              daily reports from one simple restaurant management platform.
            </p>

            <div className="canteen-hero-actions">
              <Link to="/tiffincurry-website/demo" className="canteen-primary-btn">
                Request demo <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website/pricing" className="canteen-secondary-btn">
                View pricing
              </Link>
            </div>

            <div className="canteen-trust-row">
              <span><Utensils size={16} /> Meal window ready</span>
              <span><BadgeIndianRupee size={16} /> Coupons and prepaid</span>
            </div>
          </div>

          <div className="canteen-hero-visual">
            <div className="canteen-image-card">
              <img src={canteenImage} alt="Office and school canteen service" />
            </div>

            <div className="canteen-floating-status">
              <span>Lunch window</span>
              <strong>142 meals served</strong>
            </div>

            <div className="canteen-floating-screen canteen-floating-screen-left">
              <img src={billingMobile} alt="Canteen mobile billing screen" />
            </div>

            <div className="canteen-floating-screen canteen-floating-screen-right">
              <img src={orderScreenshot} alt="Canteen order tracking screen" />
            </div>
          </div>
        </section>

        <section className="canteen-highlight-grid reveal reveal-stagger">
          {canteenHighlights.map((card) => (
            <article className="canteen-highlight-card" key={card.title}>
              <div className="canteen-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="canteen-flow reveal reveal-stagger">
          <div className="canteen-section-heading">
            <span>Canteen-ready workflow</span>
            <h2>Built for short breaks, fixed menus, and high-volume meal windows.</h2>
            <p>
              Keep the counter, serving area, kitchen, and owner reports in sync
              when hundreds of people arrive at the same time.
            </p>
          </div>

          <div className="canteen-flow-track">
            {canteenFlow.map((step, index) => (
              <div className="canteen-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="canteen-control-section reveal reveal-stagger">
          <div className="canteen-control-copy">
            <div className="canteen-section-heading canteen-section-heading-left">
              <span>Operational clarity</span>
              <h2>Make canteen service simple for staff and transparent for owners.</h2>
              <p>
                Canteens need speed, repeatable menus, and clean settlement. Give
                your team a system that handles the rush and gives management a
                clear end-of-day view.
              </p>
            </div>

            <div className="canteen-check-list">
              <span>Fixed meals, snacks, beverages, combos, and daily specials</span>
              <span>Cash, UPI, coupons, prepaid, and staff account tracking</span>
              <span>Meal-wise sales, item movement, stock, and closing reports</span>
            </div>
          </div>

          <div className="canteen-product-stack">
            <img src={reportsScreenshot} alt="Canteen reports and analytics" />
            <img src={inventoryScreenshot} alt="Canteen inventory management" />
          </div>
        </section>

        <section className="canteen-features reveal reveal-stagger">
          <div className="canteen-section-heading">
            <span>What canteen teams need</span>
            <h2>Fast at the counter. Clear for administration.</h2>
          </div>

          <div className="canteen-feature-grid">
            {canteenFeatures.map((feature) => (
              <article className="canteen-feature-card" key={feature.title}>
                <div className="canteen-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="canteen-formats reveal reveal-stagger">
          <div className="canteen-section-heading canteen-section-heading-left">
            <span>Works for</span>
            <h2>Designed for institutional and workplace dining.</h2>
          </div>

          <div className="canteen-format-list">
            {canteenFormats.map((format) => (
              <span key={format}><ClipboardCheck size={16} /> {format}</span>
            ))}
          </div>
        </section>

        <section className="canteen-cta reveal">
          <div>
            <span>Ready for smoother meal service?</span>
            <h2>See how TiffinCurry can support your canteen workflow.</h2>
          </div>
          <Link to="/tiffincurry-website/demo" className="canteen-primary-btn">
            Book a walkthrough <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
