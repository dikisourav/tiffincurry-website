import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Pricing() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : "light"}>
      <Navbar dark={dark} setDark={setDark} />
      <section className="pricing">
        
        <h1 className="pricing-title">Simple, Affordable, Transparent Pricing</h1>
      <p className="pricing-subtitle">
        Choose the plan that fits your restaurant
      </p>

      <div className="pricing-grid">

        {/* BASIC */}
        <div className="pricing-card">
          <h3>Basic</h3>
          <h2>₹5,000<span>/year</span></h2>

          <ul>
            <li>✔ POS Billing</li>
            <li>✔ Menu Management</li>
            <li>✔ Basic Reports</li>
            <li>✔ Offline Mode</li>
            <li>✔ Single Terminal</li>
            <li>✔ GST Billing</li>
            <li>✔ Email Support</li>
            <li>✔ Data Backup</li>
            <li>✔ Basic Inventory</li>
            <li>✔ User Management</li>
            <li>✔ Simple UI</li>
            <li>✔ Quick Setup</li>
          </ul>

          <button className="price-btn">Get Started</button>
        </div>

        {/* PLUS */}
        <div className="pricing-card popular">
          <div className="badge">Most Popular</div>

          <h3>Plus</h3>
          <h2>₹6,000<span>/year</span></h2>

          <ul>
            <li>✔ Everything in Basic</li>
            <li>✔ Advanced Reports</li>
            <li>✔ Multi Terminal</li>
            <li>✔ Inventory Tracking</li>
            <li>✔ Kitchen Display</li>
            <li>✔ Role Management</li>
            <li>✔ Discount System</li>
            <li>✔ Online Order Sync</li>
            <li>✔ Printer Integration</li>
            <li>✔ Daily Analytics</li>
            <li>✔ Priority Support</li>
            <li>✔ Faster Performance</li>
          </ul>

          <button className="price-btn primary">Get Started</button>
        </div>

        {/* PRO */}
        <div className="pricing-card">
          <h3>Pro</h3>
          <h2>₹12,000<span>/year</span></h2>

          <ul>
            <li>✔ Everything in Plus</li>
            <li>✔ Cloud Sync</li>
            <li>✔ Multi Outlet Support</li>
            <li>✔ Advanced Inventory</li>
            <li>✔ AI Reports</li>
            <li>✔ API Integration</li>
            <li>✔ Payment Gateway</li>
            <li>✔ Loyalty Programs</li>
            <li>✔ Custom Branding</li>
            <li>✔ Dedicated Support</li>
            <li>✔ High Security</li>
            <li>✔ Performance Boost</li>
          </ul>

          <button className="price-btn">Get Started</button>
        </div>

      </div>

    </section>

    <Footer />
    </div>
  );
}