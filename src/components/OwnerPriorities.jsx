import {
  BarChart3,
  BadgeIndianRupee,
  ClipboardCheck,
  Megaphone,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const ownerNeeds = [
  {
    title: "Get more customers",
    text: "Run offers, collect customer details, and reach people through WhatsApp.",
    icon: <Megaphone size={20} />,
  },
  {
    title: "Increase daily sales",
    text: "Promote popular items, create combos, and reduce missed orders.",
    icon: <BadgeIndianRupee size={20} />,
  },
  {
    title: "Bring customers back",
    text: "Use order history and simple offers to make repeat visits easier.",
    icon: <RefreshCw size={20} />,
  },
  {
    title: "Reduce mistakes",
    text: "Send clear orders to kitchen and track billing changes properly.",
    icon: <ClipboardCheck size={20} />,
  },
  {
    title: "Control your restaurant",
    text: "See sales, stock, staff, payments, and reports in one place.",
    icon: <BarChart3 size={20} />,
  },
];

export default function OwnerPriorities() {
  return (
    <section className="owner-priorities reveal reveal-stagger">
      <div className="owner-priorities-container">
        <div className="owner-priorities-panel">
          <div className="owner-priorities-heading">
            <div className="owner-priorities-eyebrow">
              <Sparkles size={16} />
              First, what your restaurant needs
            </div>

            <h2>More customers. More repeat orders. Less daily confusion.</h2>

            <p>
              TiffinCurry starts with the problems restaurant owners care about first,
              then connects the right management tools behind them.
            </p>
          </div>

          <div className="owner-priorities-list">
            {ownerNeeds.map((need, index) => (
              <article className="owner-priority-row" key={need.title}>
                <span className="owner-priority-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="owner-priority-row-icon">{need.icon}</div>
                <div>
                  <h3>{need.title}</h3>
                  <p>{need.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
