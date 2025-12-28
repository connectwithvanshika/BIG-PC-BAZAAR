
import '../styles/BottomBanner.css';
// import { FaRegStar } from "react-icons/fa";
// import { FaGem } from "react-icons/fa";  
// import { FaCertificate } from "react-icons/fa"; 
import { FaBolt } from "react-icons/fa";   




const BottomBanner = () => {
  return (
    <>
      {/* Footer Banner */}
      <div className="footer-banner">
        <div className="footer-logo">
          <span className="powered-text">Your one-stop destination for quality tech products.</span>
          <div className="logo-container">
            <FaBolt className="brand-icon" />
            <span className="brand-name">Shop Smart. Shop Secure.</span>
            <span className="trademark"></span>
          </div>
          <span className="company-name">BIG PC BAZAAR</span>
        </div>
      </div>
    </>
  );
};

export default BottomBanner;