import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

interface DetailSectionProps {
  image: string;
  category: string;
  title: string;
  readTime: string;
  slug: string;
}

const DetailSection: React.FC<DetailSectionProps> = ({
  image,
  category,
  title,
  readTime,
  slug,
}) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="beauty-blog-card position-relative mb-5  ">
          <div className="blog-header d-flex justify-content-between align-items-center mb-2">
            <span className="category-label ">{category}</span>
            <span className="read-time">{readTime}</span>
          </div>

          <div className="blog-image-container mb-3">
            <Image
              src={image}
              alt={title}
              layout="responsive"
              width={1000}
              height={500}
              className="blog-image"
            />
          </div>
          
          <Link href={`/blog/${slug}`} className="text-decoration-none">
            <h2 className="blog-title border-bottom border-black">{title}</h2>
          </Link>

          <div>
            <h1 className="py-2">How does the app store ranking work?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSection;
