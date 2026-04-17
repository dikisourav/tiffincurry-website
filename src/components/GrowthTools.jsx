import { useState } from "react";
import {
  BarChart3,
  Gift,
  MessageCircle,
  ReceiptText,
  Repeat,
  Sparkles,
  UserRoundPlus,
} from "lucide-react";

const growthFlow = [
  {
    step: "01",
    label: "Bill created",
    title: "Customer orders",
    text: "Capture bill value, items and customer details.",
    details: ["Save phone number", "Track ordered items", "Record bill value", "Capture visit time"],
    icon: <ReceiptText size={22} />,
  },
  {
    step: "02",
    label: "Customer saved",
    title: "History builds",
    text: "Know who came, what they ordered and when.",
    details: ["View visit history", "Know favourite items", "Spot regular guests", "Track order frequency"],
    icon: <UserRoundPlus size={22} />,
  },
  {
    step: "03",
    label: "Offer sent",
    title: "Reach on WhatsApp",
    text: "Send offers, menu updates and reminders directly.",
    details: ["Send WhatsApp offers", "Promote new items", "Push slow-day deals", "Share festival offers", "Announce combos"],
    icon: <MessageCircle size={22} />,
  },
  {
    step: "04",
    label: "Customer returns",
    title: "Repeat orders grow",
    text: "Bring regular customers back with simple offers.",
    details: ["Bring guests back", "Grow repeat orders", "Improve loyalty", "Reward regulars"],
    icon: <Repeat size={22} />,
  },
  {
    step: "05",
    label: "Owner learns",
    title: "Reports show what works",
    text: "See items, offers and timings increasing sales.",
    details: ["Check bestsellers", "Know busy hours", "Review offer response", "Track repeat customers", "Plan better offers"],
    icon: <BarChart3 size={22} />,
  },
];

export default function GrowthTools() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (step) => {
    setFlippedCards((current) => ({
      ...current,
      [step]: !current[step],
    }));
  };

  return (
    <section className="growth-tools reveal reveal-stagger">
      <div className="growth-tools-container growth-tools-full">
        <div className="growth-tools-copy">
          <div className="growth-tools-eyebrow">
            <Sparkles size={16} />
            Grow your restaurant, not just your billing counter
          </div>

          <h2>Make every bill work harder.</h2>

          <p>
            A bill should not end at payment. It should help you understand the customer,
            send better offers, and bring people back again.
          </p>
        </div>

        <div className="growth-ribbon-stage" aria-label="Restaurant growth flow">
          <div className="growth-ribbon-label">
            <Gift size={18} /> Growth loop inside your platform
          </div>

          <div className="growth-ribbon-track">
            {growthFlow.map((item, index) => (
              <button
                type="button"
                className={`growth-ribbon-card ${flippedCards[item.step] ? "is-flipped" : ""}`}
                key={item.step}
                style={{ "--card-index": index }}
                onClick={() => toggleCard(item.step)}
                aria-pressed={Boolean(flippedCards[item.step])}
              >
                <div className="growth-card-inner">
                  <div className="growth-card-face growth-card-front">
                    <div className="growth-ribbon-step">
                      <span>{item.step}</span>
                      <small>{item.label}</small>
                    </div>
                    <div className="growth-ribbon-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <em>Click to see details</em>
                  </div>

                  <div className="growth-card-face growth-card-back">
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <em>Click to turn back</em>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
