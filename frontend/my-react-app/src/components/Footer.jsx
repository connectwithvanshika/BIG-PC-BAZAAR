import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Laptops</li>
            <li>PC Builds</li>
            <li>Accessories</li>
            <li>Best Deals</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Marketplace</h4>
          <ul>
            <li>Trending</li>
            <li>Best Selling</li>
            <li>Latest Products</li>
            <li>Offers</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Warranty</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="footer-column connect">
          <h4>Connect With Us</h4>

          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="icon instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="icon youtube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/917454930553"
              target="_blank"
              rel="noreferrer"
              className="icon whatsapp"
            >
              <FaWhatsapp />
            </a>

            <a href="mailto:vanshika.connects@gmail.com" className="icon email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
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
