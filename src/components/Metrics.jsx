import {
  BarChart3,
  DatabaseBackup,
  Globe,
  Headphones,
  IndianRupee,
  LayoutDashboard,
  MapPin,
  MonitorSmartphone,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  WifiOff,
  Zap,
} from "lucide-react";

const heroReasons = [
  {
    value: "Offline",
    label: "billing continuity",
    text: "Keep orders and billing moving even when internet quality drops during peak hours.",
    icon: <WifiOff size={24} />,
  },
  {
    value: "GST",
    label: "ready receipts",
    text: "Generate clean, compliant bills for Indian restaurant workflows without slowing the counter.",
    icon: <IndianRupee size={24} />,
  },
  {
    value: "24/7",
    label: "support access",
    text: "Get dependable help when your team needs confidence during real service windows.",
    icon: <Headphones size={24} />,
  },
];

const metrics = [
  {
    title: "Instant billing",
    text: "Fast item search, quick payments, and fewer billing mistakes during rush hours.",
    icon: <Zap size={22} />,
  },
  {
    title: "Reliable local setup",
    text: "Built to keep restaurant operations stable across counters, tables, and service stations.",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Multi-terminal ready",
    text: "Run main counters, bar stations, handhelds, and table-side devices in sync.",
    icon: <MonitorSmartphone size={22} />,
  },
  {
    title: "Regional language support",
    text: "Help staff learn faster and operate comfortably in familiar languages.",
    icon: <Globe size={22} />,
  },
  {
    title: "Easy staff training",
    text: "Simple screens reduce onboarding time for cashiers, captains, and managers.",
    icon: <MousePointerClick size={22} />,
  },
  {
    title: "Real-time owner reports",
    text: "View sales, payments, item movement, and outlet performance without waiting.",
    icon: <BarChart3 size={22} />,
  },
  {
    title: "Manage from anywhere",
    text: "Stay connected to performance, staff activity, and decisions through a strong dashboard.",
    icon: <LayoutDashboard size={22} />,
  },
  {
    title: "Affordable pricing",
    text: "Practical plans for growing restaurants that need power without heavy overhead.",
    icon: <IndianRupee size={22} />,
  },
  {
    title: "Secure data backup",
    text: "Protect restaurant data, bills, reports, and operational records with safer backups.",
    icon: <DatabaseBackup size={22} />,
  },
  {
    title: "Made for Indian restaurants",
    text: "Designed around GST billing, local workflows, fast counters, dine-in service, and peak-hour pressure.",
    icon: <MapPin size={22} />,
  },
];

export default function Metrics() {
  return (
    <section className="metrics reveal reveal-stagger">
      <div className="metrics-container">
        <div className="metrics-intro-card">
          <div className="metrics-heading">
            <div className="metrics-eyebrow">
              <Sparkles size={16} />
              Why restaurant owners choose TiffinCurry
            </div>

            <h2 className="metrics-title">A POS built for clarity, rush hours, and Indian restaurant reality.</h2>

            <p className="metrics-subtitle">
              Premium software should not only look good. It should make busy service calmer,
              staff training easier, and owner decisions sharper every day.
            </p>
          </div>

          <div className="metrics-hero-grid">
            {heroReasons.map((reason) => (
              <article className="metric-hero-card" key={reason.label}>
                <div className="metric-hero-icon">{reason.icon}</div>
                <strong>{reason.value}</strong>
                <span>{reason.label}</span>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="metrics-grid">
          {metrics.map((m) => (
            <article key={m.title} className="metric-item">
              <div className="metric-icon">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
