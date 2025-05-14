
import Image from 'next/image';
import Link from 'next/link';

const MagazineBanner = ({
  title = "Meet Tagmag",
  logoSrc = "https://cdn.prod.website-files.com/654e26ea6b3b83d910b4a897/655df54b235ee6847319bc1a_icons8-e-magazine.svg",
  logoAlt = "Tagmag magazine logo",
  description1 = "The most comfortable magazine on the internet.",
  description2 = "We address today what matters tomorrow.",
  ctaText = "Learn More",
  ctaLink = "/about"
}) => {
  return (
    <section className="magazine-banner py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="display-4 fw-bold mb-4">{title}</h1>
            
            <div className="logo-container mb-4">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={180}
                height={180}
                className="img-fluid"
                priority
              />
            </div>
            
            <div className="magazine-description mb-4">
              <p className="lead mb-1">{description1}</p>
              <p className="lead">{description2}</p>
            </div>
            
            <div className="cta-container mt-4">
              <Link href={ctaLink} className="btn btn-dark btn-lg px-4 py-2">
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default MagazineBanner;