import { useState } from "react";
import { Link } from "react-router-dom";
import {
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

import hrm from "../assets/hrm.png";
import pos from "../assets/lightning-fast-billing.png";
import kot from "../assets/kot_screen.png";
import clp from "../assets/customer_centricity.jpeg";
import omg from "../assets/order_management.jpeg";
import mmg from "../assets/menu_management.jpeg";
import img from "../assets/inventory_management.jpeg";
import qmg from "../assets/queue_management.jpeg";
import aat from "../assets/advance_audit.jpeg";
import rpa from "../assets/reports_analytics.jpeg";

const features = [
  {
    title: "Lightning fast billing",
    eyebrow: "Counter speed",
    text: "Punch orders, apply discounts, accept payments, and print receipts quickly during rush hours.",
    img: pos,
    icon: <ReceiptText size={19} />,
    link: "/features/pos",
    badgeLabel: "Billing module",
    badgeValue: "Fast checkout",
    proof: ["Quick item search", "GST-ready receipts", "Cash, UPI and card flow"],
  },
  {
    title: "Smart order management",
    eyebrow: "Order control",
    text: "Track dine-in, takeaway, delivery, and repeat orders from one clear operational view.",
    img: omg,
    icon: <ClipboardCheck size={19} />,
    link: "/features/order-management",
    badgeLabel: "Order module",
    badgeValue: "Live tracking",
    proof: ["Live order status", "Captain to kitchen sync", "Cleaner handoffs"],
  },
  {
    title: "Guest queue management",
    eyebrow: "Guest experience",
    text: "Reduce front-door confusion with a queue flow that keeps waiting guests informed and staff prepared.",
    img: qmg,
    icon: <Clock3 size={19} />,
    link: "/features/queue-management",
    badgeLabel: "Queue module",
    badgeValue: "Guest flow",
    proof: ["Waitlist visibility", "Better table planning", "Fewer missed guests"],
  },
  {
    title: "Advanced audit trail",
    eyebrow: "Owner control",
    text: "Monitor discounts, voids, edits, staff actions, and sensitive changes with stronger accountability.",
    img: aat,
    icon: <ShieldCheck size={19} />,
    link: "/features/audit-trail",
    badgeLabel: "Audit module",
    badgeValue: "Action history",
    proof: ["Action history", "Manager visibility", "Safer operations"],
  },
  {
    title: "Smart kitchen display",
    eyebrow: "Kitchen rhythm",
    text: "Route orders to the kitchen with clear preparation status, fewer calls, and better order accuracy.",
    img: kot,
    icon: <ChefHat size={19} />,
    link: "/features/kot",
    badgeLabel: "Kitchen module",
    badgeValue: "KOT display",
    proof: ["KOT routing", "Prep visibility", "Faster service"],
  },
  {
    title: "Menu management",
    eyebrow: "Menu control",
    text: "Update items, prices, variants, combos, and availability without disrupting daily service.",
    img: mmg,
    icon: <BadgeCheck size={19} />,
    link: "/features/menu-management",
    badgeLabel: "Menu module",
    badgeValue: "Availability",
    proof: ["Variants and add-ons", "Availability control", "Outlet-ready menus"],
  },
  {
    title: "Guest first CRM",
    eyebrow: "Customer loyalty",
    text: "Understand repeat customers, preferences, feedback, and engagement opportunities in one place.",
    img: clp,
    icon: <Users size={19} />,
    link: "/features/crm",
    badgeLabel: "CRM module",
    badgeValue: "Guest 360",
    proof: ["Customer history", "Repeat tracking", "Better engagement"],
  },
  {
    title: "Inventory management",
    eyebrow: "Stock clarity",
    text: "Track stock, suppliers, consumption, and item movement so your kitchen avoids surprises.",
    img,
    icon: <PackageCheck size={19} />,
    link: "/features/inventory-management",
    badgeLabel: "Stock module",
    badgeValue: "Live inventory",
    proof: ["Live stock checks", "Waste visibility", "Supplier control"],
  },
  {
    title: "Smart staff management",
    eyebrow: "Team operations",
    text: "Manage attendance, shifts, roles, and staff performance without adding operational friction.",
    img: hrm,
    icon: <Users size={19} />,
    link: "/features/hrm",
    badgeLabel: "Staff module",
    badgeValue: "Team control",
    proof: ["Attendance tracking", "Role control", "Productivity reports"],
  },
  {
    title: "Reports and analytics",
    eyebrow: "Business clarity",
    text: "See sales, payments, bestsellers, staff actions, and outlet performance in decision-ready reports.",
    img: rpa,
    icon: <BarChart3 size={19} />,
    link: "/features/reports-analytics",
    badgeLabel: "Reports module",
    badgeValue: "Owner insights",
    proof: ["Daily snapshots", "Item movement", "Outlet insights"],
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section className="feature-tabs reveal reveal-stagger">
      <div className="feature-tabs-container">
        <div className="feature-tabs-heading">
          <div className="feature-tabs-eyebrow">
            <Sparkles size={16} />
            Operations, billing and growth in one POS
          </div>

          <h2 className="feature-tabs-title">Best in class features for serious restaurant teams</h2>

          <p className="feature-tabs-subtitle">
            From front counter to kitchen, inventory, staff, CRM, and reports,
            TiffinCurry gives owners a calmer way to run daily operations.
          </p>
        </div>

        <div className="feature-tabs-layout">
          <div className="feature-tabs-list" aria-label="Feature categories">
            {features.map((feature, index) => (
              <button
                type="button"
                key={feature.title}
                className={`feature-tab-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
              >
                <span className="feature-tab-icon">{feature.icon}</span>
                <span>
                  <small>{feature.eyebrow}</small>
                  {feature.title}
                </span>
              </button>
            ))}
          </div>

          <article className="feature-tabs-content">
            <div className="feature-content-copy">
              <span>{activeFeature.eyebrow}</span>
              <h3>{activeFeature.title}</h3>
              <p>{activeFeature.text}</p>

              <div className="feature-proof-list">
                {activeFeature.proof.map((point) => (
                  <strong key={point}>
                    <BadgeCheck size={16} />
                    {point}
                  </strong>
                ))}
              </div>

              <Link to={activeFeature.link} className="feature-read-more">
                Explore feature <ArrowRight size={17} />
              </Link>
            </div>

            <div className="feature-image-collage">
              <img
                src={activeFeature.img}
                alt={`${activeFeature.title} preview`}
                className="feature-main-image"
              />
              <div className="feature-image-badge">
                <span>{activeFeature.badgeLabel}</span>
                <strong>{activeFeature.badgeValue}</strong>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
