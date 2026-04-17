import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const changes = [
  {
    before: "You only bill customers.",
    after: "You build customer history and send offers to bring them back.",
  },
  {
    before: "You guess which items sell more.",
    after: "You know your best-selling items and busy hours.",
  },
  {
    before: "Kitchen orders depend on paper and shouting.",
    after: "Orders go clearly to the kitchen display or printer.",
  },
  {
    before: "You check sales only at day end.",
    after: "You can see live sales anytime.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="before-after reveal reveal-stagger">
      <div className="before-after-container">
        <div className="before-after-heading">
          <div className="before-after-eyebrow">
            <Sparkles size={16} />
            What changes after using TiffinCurry?
          </div>

          <h2>From daily guesswork to daily control.</h2>
        </div>

        <div className="before-after-grid">
          {changes.map((item) => (
            <article className="before-after-card" key={item.before}>
              <div className="before-block">
                <span>Before</span>
                <p>{item.before}</p>
              </div>

              <div className="before-after-arrow">
                <ArrowRight size={18} />
              </div>

              <div className="after-block">
                <span><CheckCircle2 size={15} /> After</span>
                <p>{item.after}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
