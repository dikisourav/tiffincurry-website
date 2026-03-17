import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About({ dark, setDark }) {
  return (
    <>
      <Navbar dark={dark} setDark={setDark} />

      <section className="about-page">

        {/* HERO */}
        <div className="about-hero">
          <h1>About TiffinCurry</h1>
          <p>
            Building simple, powerful and reliable POS solutions for modern restaurants.
          </p>
        </div>

        {/* VISION */}
        <div className="about-vision">
          <div className="container">
            <h2>Our Vision</h2>
            <p>
              We aim to simplify restaurant operations through powerful yet easy-to-use
              technology. Our mission is to empower restaurant owners with tools that
              help them grow faster, serve better, and operate smarter — even without
              internet dependency.
            </p>
          </div>
        </div>

        {/* FOUNDERS */}
        <div className="about-founders container">

          <h2>Meet the Founders</h2>

          <div className="founder-grid">

            {/* Founder 1 */}
            <div className="founder-card">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Founder 1"
              />
              <h3>Founder Name</h3>
              <p className="role">Co-Founder & CEO</p>
              <p>
                Passionate about solving real-world business problems through technology.
                Leads product vision and strategy for TiffinCurry.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="founder-card">
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842"
                alt="Founder 2"
              />
              <h3>Founder Name</h3>
              <p className="role">Co-Founder & CTO</p>
              <p>
                Architect behind the platform. Focused on building scalable,
                reliable and offline-first systems for restaurants.
              </p>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}