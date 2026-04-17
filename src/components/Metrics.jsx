import {
  BarChart3,
  DatabaseBackup,
  Globe,
  IndianRupee,
  LayoutDashboard,
  MapPin,
  MonitorSmartphone,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const confidenceGroups = [
  {
    label: "Growth",
    title: "Bring customers back and sell more",
    text: "Use billing history, faster service, and clear reports to understand what helps sales grow.",
    items: [
      {
        title: "Repeat customers",
        text: "Save customer details and use order history to bring people back with better offers.",
        icon: <MousePointerClick size={20} />,
      },
      {
        title: "Fast rush billing",
        text: "Bill quickly, reduce waiting time, and keep service moving during busy hours.",
        icon: <Zap size={20} />,
      },
      {
        title: "Clear daily reports",
        text: "Know sales, payments, best-selling items, and staff activity without guessing.",
        icon: <BarChart3 size={20} />,
      },
      {
        title: "Affordable pricing",
        text: "Practical plans for growing restaurants that need power without heavy overhead.",
        icon: <IndianRupee size={20} />,
      },
    ],
  },
  {
    label: "Control",
    title: "Run daily operations with fewer blind spots",
    text: "Keep staff, counters, data, outlets, and Indian restaurant workflows easier to manage.",
    items: [
      {
        title: "Reliable local setup",
        text: "Built to keep restaurant operations stable across counters, tables, and service stations.",
        icon: <ShieldCheck size={20} />,
      },
      {
        title: "Multi-terminal ready",
        text: "Run main counters, bar stations, handhelds, and table-side devices in sync.",
        icon: <MonitorSmartphone size={20} />,
      },
      {
        title: "Regional language support",
        text: "Help staff learn faster and operate comfortably in familiar languages.",
        icon: <Globe size={20} />,
      },
      {
        title: "Manage from anywhere",
        text: "Stay connected to performance, staff activity, and decisions through a strong dashboard.",
        icon: <LayoutDashboard size={20} />,
      },
      {
        title: "Secure data backup",
        text: "Protect restaurant data, bills, reports, and operational records with safer backups.",
        icon: <DatabaseBackup size={20} />,
      },
      {
        title: "Made for Indian restaurants",
        text: "Designed around GST billing, local workflows, fast counters, and dine-in pressure.",
        icon: <MapPin size={20} />,
      },
    ],
  },
];

export default function Metrics() {
  return (
    <section className="metrics reveal reveal-stagger">
      <div className="metrics-container">
        <div className="metrics-board-heading">
          <div className="metrics-eyebrow">
            <Sparkles size={16} />
            Built for Indian restaurants that want to grow
          </div>

          <h2 className="metrics-title">Grow your restaurant and stay in control.</h2>

          <p className="metrics-subtitle">
            TiffinCurry helps you increase sales, bring customers back, train staff
            faster, and manage daily operations easily.
          </p>
        </div>

        <div className="metrics-confidence-board">
          {confidenceGroups.map((group) => (
            <article className="metrics-confidence-column" key={group.label}>
              <div className="metrics-column-head">
                <span>{group.label}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </div>

              <div className="metrics-confidence-list">
                {group.items.map((item) => (
                  <div className="metrics-confidence-row" key={item.title}>
                    <div className="metrics-confidence-icon">{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
