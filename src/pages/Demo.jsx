import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const demoBenefits = [
  "Understand the right POS setup for your restaurant format",
  "See billing, menu, KOT, and order workflows in action",
  "Get pricing and implementation guidance from the team",
];

const contactCards = [
  {
    icon: <Phone size={20} />,
    title: "Call us",
    text: "+91 98304 69686",
    href: "tel:+919830469686",
  },
  {
    icon: <MessageCircle size={20} />,
    title: "WhatsApp",
    text: "Chat with our team",
    href: "https://wa.me/919830469686",
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    text: "support@tiffincurry.com",
    href: "mailto:support@tiffincurry.com",
  },
];

export default function Demo() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark demo-page-shell" : "light demo-page-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="demo-page-new">
        <section className="demo-hero-new">
          <div className="demo-copy-new">
            <div className="demo-eyebrow-new">
              <Sparkles size={16} />
              Book a product walkthrough
            </div>

            <h1>See how TiffinCurry fits your restaurant before you decide.</h1>

            <p>
              Tell us a little about your outlet. Our team will show you the
              workflows that matter most to your restaurant, from billing and KOT
              to menu control, reporting, and multi-outlet operations.
            </p>

            <div className="demo-proof-row">
              <span><CalendarClock size={17} /> 20-minute walkthrough</span>
              <span><ShieldCheck size={17} /> No obligation</span>
              <span><Store size={17} /> Restaurant-specific demo</span>
            </div>

            <div className="demo-benefit-list">
              {demoBenefits.map((benefit) => (
                <div key={benefit}>
                  <BadgeCheck size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="demo-form-panel-new">
            <div className="demo-form-header-new">
              <span>Request Demo</span>
              <h2>Let us contact you</h2>
              <p>Share your details and we will reach out with a suitable time.</p>
            </div>

            <form className="demo-form-new">
              <div className="demo-field-grid">
                <label>
                  Your name
                  <input type="text" name="name" placeholder="Enter your name" required />
                </label>
                <label>
                  Restaurant name
                  <input type="text" name="restaurant" placeholder="Outlet or brand name" required />
                </label>
              </div>

              <div className="demo-field-grid">
                <label>
                  Phone number
                  <input type="tel" name="phone" placeholder="10-digit mobile number" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>

              <div className="demo-field-grid">
                <label>
                  Restaurant type
                  <select name="restaurantType" defaultValue="" required>
                    <option value="" disabled>Select format</option>
                    <option>Fine dining</option>
                    <option>Quick service restaurant</option>
                    <option>Cafe</option>
                    <option>Bar and lounge</option>
                    <option>Cloud kitchen</option>
                    <option>Food truck</option>
                    <option>Multi-outlet chain</option>
                  </select>
                </label>
                <label>
                  City
                  <input type="text" name="city" placeholder="Your city" required />
                </label>
              </div>

              <label>
                What would you like to improve?
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Example: faster billing, KOT, table management, inventory, reports..."
                />
              </label>

              <button type="submit" className="demo-submit-new">
                Request my demo <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>

        <section className="demo-contact-strip-new">
          <div className="demo-address-new">
            <MapPin size={22} />
            <div>
              <span>Registered office</span>
              <p>1C/28, 3rd Floor, 88-B G.T. Road, Bhadrakali, Hooghly - 712232, West Bengal, India</p>
            </div>
          </div>

          <div className="demo-contact-cards-new">
            {contactCards.map((card) => (
              <a key={card.title} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {card.icon}
                <div>
                  <span>{card.title}</span>
                  <strong>{card.text}</strong>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
