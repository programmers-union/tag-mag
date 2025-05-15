import Link from 'next/link';
import Image from 'next/image';

const ConnectionCards = () => {
  return (
    <div className="connection-cards-container container-fluid py-5">
      <div className="row g-4">
       
        <div className="col-12 col-lg-6">
          <div className="connection-card h-100 d-flex flex-column justify-content-center align-items-center py-5 px-4" 
          >
            <h2 className="text-center mb-3" style={{ fontSize: "4rem", fontWeight: "600" }}>Get Connected</h2>
            <p className="text-center mb-4" style={{ fontSize: "1.2rem", maxWidth: "400px" }}>
              Have a story to share, a question,<br />
              or just want to say hello?
            </p>
            <Link href="/contact" className="btn btn-dark px-4 py-2" 
                  style={{ 
                    borderRadius: "4px",
                    fontSize: "1.1rem",
                    minWidth: "150px"
                  }}>
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Tagmag Mobile Card */}
        <div className="col-12 col-lg-6">
          <div className="connection-card h-100 d-flex flex-column justify-content-center align-items-center py-5 px-4" 
>
            <h2 className="text-center mb-3" style={{ fontSize: "4rem", fontWeight: "600" }}>Tagmag Mobile</h2>
            <p className="text-center mb-4" style={{ fontSize: "1.2rem", maxWidth: "400px" }}>
              Discover a universe of news and<br />
              stories right at your fingertips
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {/* Google Play Store Button */}
              <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="https://cdn.prod.website-files.com/654e26ea6b3b83d910b4a897/655e238f3b8446262156f90d_64f9b7ba7b6f7c9f95bc38fa_google-play-icon.png" 
                  alt="Get it on Google Play" 
                  width={180} 
                  height={53} 
                  style={{ 
                    objectFit: "contain",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                  }}
                />
              </Link>
              
              {/* Apple App Store Button */}
              <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="https://cdn.prod.website-files.com/654e26ea6b3b83d910b4a897/655e238f3b8446262156f90d_64f9b7ba7b6f7c9f95bc38fa_google-play-icon.png" 
                  alt="Download on the App Store" 
                  width={180} 
                  height={53} 
                  style={{ 
                    objectFit: "contain",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCards;