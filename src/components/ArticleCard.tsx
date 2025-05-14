import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ 
  category = "Lifestyle",
  readTime = "2 Min Read", 
  imageUrl = "/beauty-product-image.jpg", 
  imageAlt = "Beauty product demonstration",
  title = "Beauty Toolbox: Must-Have Products for Every Routine", 
  href = "/articles/beauty-toolbox" ,
    imageWidth = "450px",
  imageHeight = "300px"
}) => {
  return (
    <div className="beauty-article-card card border-0 mb-4 overflow-hidden">
      <div className="position-relative">
        <div className="card-header-labels d-flex justify-content-between p-2">
          <span className="category fw-medium">{category}</span>
          <span className="read-time text-muted small">{readTime}</span>
        </div>
        
        <Link href={href} className="text-decoration-none">
          <div className="article-image-container position-relative" style={{ height: imageHeight, width:imageWidth}}>
            <Image 
              src={imageUrl}
              alt={imageAlt}
              fill
              className="article-image object-fit-cover"
              priority
            />
          </div>
          
          <div className="card-body px-0 py-3">
            <h2 className="article-title fs-4 fw-bold text-dark mb-0">{title}</h2>
          </div>
        </Link>
      </div>
      

    </div>
  );
};

export default ArticleCard;