import React from 'react';
// import './BottomBanner.css';
import '../styles/BottomBanner.css';


const BottomBanner = () => {
  return (
    <>
      {/* Footer Banner */}
      <div className="footer-banner">
        <div className="footer-logo">
          <span className="powered-text">Your one-stop destination for quality tech products.</span>
          <div className="logo-container">
            <svg className="leaf-icon" viewBox="0 0 50 50" fill="none" stroke="black" strokeWidth="2">
              <path d="M10,40 Q10,10 40,10 Q40,40 10,40" />
            </svg>
            <span className="brand-name">Shop Smart. Shop Secure.</span>
            <span className="trademark"></span>
          </div>
          <span className="company-name">BIG PC BAZAAR</span>
        </div>
      </div>

      {/* WhatsApp Button */}
      {/* <div className="whatsapp-button">
        <div className="notification-badge">1</div>
        <svg viewBox="0 0 32 32" fill="white">
          <path d="M16,0 C7.2,0 0,7.2 0,16 C0,18.9 0.8,21.6 2.2,24 L0,32 L8.3,29.9 C10.6,31.2 13.2,32 16,32 C24.8,32 32,24.8 32,16 C32,7.2 24.8,0 16,0 M16,29 C13.5,29 11.2,28.3 9.2,27 L8.7,26.7 L3.8,28 L5.1,23.2 L4.8,22.7 C3.4,20.6 2.7,18.3 2.7,16 C2.7,8.7 8.7,2.7 16,2.7 C23.3,2.7 29.3,8.7 29.3,16 C29.3,23.3 23.3,29 16,29 M23.2,19.4 C22.8,19.2 20.9,18.3 20.5,18.1 C20.2,18 19.9,17.9 19.7,18.3 C19.4,18.7 18.8,19.5 18.5,19.8 C18.3,20 18,20.1 17.7,19.9 C17.3,19.7 16.1,19.3 14.6,18 C13.5,17 12.8,15.8 12.5,15.4 C12.3,15 12.5,14.8 12.7,14.6 C12.9,14.4 13.1,14.1 13.3,13.9 C13.5,13.7 13.6,13.5 13.7,13.3 C13.8,13.1 13.8,12.9 13.7,12.7 C13.6,12.5 12.9,10.6 12.6,9.8 C12.3,9 12,9.1 11.8,9.1 C11.6,9.1 11.3,9.1 11.1,9.1 C10.8,9.1 10.4,9.2 10.1,9.6 C9.7,10 8.8,10.9 8.8,12.8 C8.8,14.7 10.2,16.5 10.4,16.8 C10.6,17 12.9,20.5 16.4,22.2 C19.9,23.9 19.9,23.3 20.7,23.2 C21.5,23.1 23,22.3 23.3,21.5 C23.7,20.7 23.7,20 23.6,19.9 C23.5,19.7 23.3,19.6 23.2,19.4" />
        </svg>
      </div> */}
    </>
  );
};

export default BottomBanner;