import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";
import logo from "../assets/logo.png";

const values = [
  {
    title: "Built close to the market",
    text: "We are focused on the daily realities of Indian restaurants, canteens, cafes, bars, cloud kitchens and mobile food businesses.",
  },
  {
    title: "Simple before clever",
    text: "Our goal is to make restaurant digitisation understandable for owners and usable for staff without heavy training.",
  },
  {
    title: "Trust through clarity",
    text: "Owners should know what is happening in billing, kitchen, stock, staff and reports without depending on guesswork.",
  },
];

const timeline = [
  {
    year: "Origin",
    title: "Started with the restaurant owner in mind",
    text: "TiffinCurry was shaped around a simple belief: restaurant software should reduce confusion for owners, not add another layer of complexity.",
  },
  {
    year: "Focus",
    title: "Indian restaurant operations",
    text: "The platform is being built around practical Indian workflows like rush-hour billing, GST receipts, KOT, menu changes, UPI, staff handling and daily reports.",
  },
  {
    year: "Now",
    title: "A restaurant management company",
    text: "Our work is expanding across restaurant formats, helping food businesses move from manual operations to calmer digital control.",
  },
];

const founderSlots = [
  {
    label: "Founder profile",
    role: "Founder details to be added",
    text: "Add the founder name, photograph and personal story here. This space is intentionally not filled with fake names or stock profiles.",
  },
  {
    label: "Leadership profile",
    role: "Leadership details to be added",
    text: "Use this card for co-founder, operations leader, technology leader or advisor details when the final profile is ready.",
  },
];

export default function About() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark about-company-shell" : "light about-company-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="about-company-page">
        <section className="about-company-hero reveal reveal-stagger">
          <div className="about-company-copy">
            <div className="about-company-eyebrow">
              <Sparkles size={16} />
              About TiffinCurry Pvt. Limited
            </div>

            <h1>Building a simpler digital future for Indian restaurants.</h1>

            <p>
              TiffinCurry Pvt. Limited exists to help Indian food businesses move
              from scattered manual work to clear, dependable digital operations.
              We are building from the ground up for restaurant owners, their staff,
              and the realities of everyday service.
            </p>
          </div>

          <aside className="about-company-card" aria-label="Company summary">
            <img src={logo} alt="TiffinCurry" />
            <span>Company</span>
            <h2>TiffinCurry Pvt. Limited</h2>
            <p>
              Restaurant management technology company focused on Indian food businesses.
            </p>
            <div>
              <MapPin size={17} />
              Hooghly, West Bengal, India
            </div>
          </aside>
        </section>

        <section className="about-company-mission reveal reveal-stagger">
          <div className="about-company-section-heading about-company-section-heading-left">
            <span>Our mission</span>
            <h2>Make restaurant operations easier to understand, easier to run, and easier to grow.</h2>
          </div>

          <div className="about-company-mission-text">
            <p>
              Restaurant owners carry many responsibilities at once: sales,
              customers, staff, kitchen, stock, payments and daily decisions.
              Our mission is to bring those moving parts into a system that feels
              practical, reliable and simple enough for real teams to use.
            </p>
            <p>
              We are not trying to make restaurant work look fancy from the outside.
              We are trying to make the inside of the business calmer, clearer and
              more controlled.
            </p>
          </div>
        </section>

        <section className="about-company-values reveal reveal-stagger">
          {values.map((value) => (
            <article className="about-company-value-card" key={value.title}>
              <div><HeartHandshake size={22} /></div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </section>

        <section className="about-company-story reveal reveal-stagger">
          <div className="about-company-section-heading">
            <span>Our story</span>
            <h2>A company shaped around Indian restaurant reality.</h2>
          </div>

          <div className="about-company-timeline">
            {timeline.map((item) => (
              <article key={item.title}>
                <strong>{item.year}</strong>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-company-founders reveal reveal-stagger">
          <div className="about-company-section-heading about-company-section-heading-left">
            <span>Founders & leadership</span>
            <h2>The founder section should tell the real people story.</h2>
            <p>
              I have kept this section ready for real founder details instead of
              inventing names, photographs or credentials. Once you share the final
              founder information, this can become the strongest trust-building part
              of the page.
            </p>
          </div>

          <div className="about-founder-grid">
            {founderSlots.map((founder) => (
              <article className="about-founder-card" key={founder.label}>
                <div className="about-founder-photo-placeholder">
                  <Users size={30} />
                </div>
                <span>{founder.role}</span>
                <h3>{founder.label}</h3>
                <p>{founder.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-company-identity reveal reveal-stagger">
          <div>
            <span><Building2 size={16} /> Registered company</span>
            <h2>Based in West Bengal. Building for food businesses across India.</h2>
            <p>
              TiffinCurry Pvt. Limited is rooted in India and focused on practical
              restaurant digitisation for owners who want growth, customer retention,
              operational control and daily confidence.
            </p>
          </div>

          <div className="about-company-identity-grid">
            <span><ShieldCheck size={18} /> Practical technology</span>
            <span><Users size={18} /> Owner-first thinking</span>
            <span><CalendarDays size={18} /> Long-term product focus</span>
            <span><MapPin size={18} /> Hooghly, West Bengal</span>
          </div>
        </section>

        <section className="about-company-cta reveal">
          <div>
            <span>Want to know more?</span>
            <h2>Talk to us about TiffinCurry and the company behind it.</h2>
          </div>
          <Link to="/tiffincurry-website/demo" className="about-company-primary-btn">
            Contact us <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
