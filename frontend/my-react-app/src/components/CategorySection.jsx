
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
            <div className="content">
              <p>High-performance laptops for every need</p>
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
            <div className="content">
              <p>Custom-built power for work & gaming</p>
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