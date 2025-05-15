import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer-component">
      {/* Main Footer Section */}
      <div className="main-footer py-4 px-4 px-md-5">
        <div className="container-fluid">
          <div className="row">
            {/* Logo Column */}
            <div className="col-12 col-md-3 mb-4 mb-md-0">
              <Link href="/" className="footer-logo d-inline-block">
                <Image 
                  src="https://cdn.prod.website-files.com/654e26ea6b3b83d910b4a897/657329098150d2a63f140197_65538efdbda9f3a9952d79e8_TAGMAG%20LOGO.svg"
                  alt="Tagmag Logo" 
                  
                  width={180} 
                  height={40} 
                  className="img-fluid"
                />
              </Link>
            </div>
            
            {/* Menu Column */}
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <h3 className="footer-heading mb-3">Menu</h3>
              <ul className="footer-links list-unstyled">
                <li className="mb-2"><Link href="/" className="footer-link">Home</Link></li>
                <li className="mb-2"><Link href="/about" className="footer-link">About</Link></li>
                <li className="mb-2"><Link href="/contact" className="footer-link">Contact</Link></li>
                <li className="mb-2"><Link href="/license" className="footer-link">License</Link></li>
              </ul>
            </div>
            
            {/* Categories Column */}
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <h3 className="footer-heading mb-3">Categories</h3>
              <ul className="footer-links list-unstyled">
                <li className="mb-2"><Link href="/category/lifestyle" className="footer-link">Lifestyle</Link></li>
                <li className="mb-2"><Link href="/category/entertainment" className="footer-link">Entertainment</Link></li>
                <li className="mb-2"><Link href="/category/technology" className="footer-link">Technology</Link></li>
                <li className="mb-2"><Link href="/category/business" className="footer-link">Business</Link></li>
              </ul>
            </div>
            
            {/* Newsletter Column */}
            <div className="col-12 col-md-3 mt-4 mt-md-0">
              <h3 className="footer-heading mb-3">Get exclusive updates and offers!</h3>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  className="form-control mb-2 py-2" 
                  placeholder="Your email" 
                  aria-label="Email for newsletter"
                />
                <button 
                  type="submit" 
                  className="btn btn-subscribe w-100 py-2"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="copyright-section py-3 px-4 px-md-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="copyright-text mb-0">
                © This is a <Link href="https://example.com" className="credit-link">Kreshnik Beqi</Link> template powered by <Link href="https://webflow.com" className="credit-link">Webflow</Link>
              </p>
            </div>
            {/* <div className="col-12 col-md-6 text-center text-md-end">
              <Link href="https://webflow.com" className="webflow-credit">
                <Image 
                  src="/webflow-badge.svg" 
                  alt="Made in Webflow" 
                  width={120} 
                  height={25} 
                  className="img-fluid"
                />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;