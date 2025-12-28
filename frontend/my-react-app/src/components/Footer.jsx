import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>BIG PC BAZAAR</h2>
          <p>
            Your one-stop destination for high-performance laptops,
            custom PCs and trusted tech accessories.
          </p>

          <div className="social-icons">
            <a href="https://instagram.com" className="icon instagram"><FaInstagram /></a>
            <a href="https://youtube.com" className="icon youtube"><FaYoutube /></a>
            <a href="https://wa.me/917454930553" className="icon whatsapp"><FaWhatsapp /></a>
            <a href="mailto:vanshika.connects@gmail.com" className="icon email"><FaEnvelope /></a>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Laptops</li>
            <li>PC Builds</li>
            <li>Accessories</li>
            <li>Best Deals</li>
          </ul>
        </div>

        {/* MARKETPLACE */}
        <div className="footer-column">
          <h4>Marketplace</h4>
          <ul>
            <li>Trending</li>
            <li>Best Selling</li>
            <li>Latest Products</li>
            <li>Offers</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Warranty</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 BIG PC BAZAAR. All rights reserved.</span>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
