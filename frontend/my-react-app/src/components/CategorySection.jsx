
import '../styles/CategorySection.css';

const CategorySection = () => {
  return (
    <div className="category-section">
      <div className="cards-container">
        {/* Accessories Card */}
        <div className="card">
          <div className="card-header">
            <div className="wavy-background">
              <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z" fill="#a855f7"></path>
              </svg>
            </div>
            <h2 className="card-title">LAPTOPS</h2>
            <div className="icon-container">
              {/* <svg className="star-icon" viewBox="0 0 100 100" fill="white">
                <path d="M50,15 L61,45 L92,45 L67,63 L78,93 L50,75 L22,93 L33,63 L8,45 L39,45 Z" />
              </svg> */}
            </div>
          </div>
          <div className="card-body">
            <img 
              src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="iPhone Accessories" 
              className="phone-image"
            />
            <button className="open-button">OPEN</button>
          </div>
        </div>

        {/* iPhone Card */}
        <div className="card">
          <div className="card-header">
            <div className="wavy-background">
              <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z" fill="#a855f7"></path>
              </svg>
            </div>
            <h2 className="card-title">PC</h2>
            <div className="icon-container">
              {/* <svg className="apple-icon" viewBox="0 0 100 100" fill="white">
                <path d="M50,20 C50,15 52,10 56,8 C54,5 50,3 45,3 C38,3 35,7 32,7 C29,7 25,3 20,3 C12,3 5,10 5,22 C5,35 15,50 25,50 C28,50 32,47 35,47 C38,47 42,50 46,50 C55,50 60,40 60,40 C52,37 50,28 50,25 M58,8 C60,5 61,2 61,0 C58,0 55,2 53,4 C51,6 50,9 50,12 C53,12 56,11 58,8" />
              </svg> */}
            </div>
          </div>
          <div className="card-body">
            <img 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGN8ZW58MHx8MHx8fDA%3D" 
              alt="iPhone" 
              className="phone-image"
            />
            <button className="open-button">OPEN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;