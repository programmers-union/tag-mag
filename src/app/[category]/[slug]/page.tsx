// app/[category]/[slug]/page.tsx

import ArticleCard from "@/components/ArticleCard";
import ConnectionCards from "@/components/ConnectionCard";
import DetailSection from "@/components/DetailSection1";
import { FC } from "react";
import { notFound } from "next/navigation";

interface Article {
  category: string;
  imageAlt: string;
  title: string;
  newsDetail: string;
  href: string;
  image: string;
  published: string;
}

interface DetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const DetailPage: FC<DetailPageProps> = async ({ params }) => {
  const { category, slug } = await params;
  
  // Decode the category in case it has special characters
  const decodedCategory = decodeURIComponent(category);

  
  // console.log("category:", decodedCategory);
  

  // Set up base URL (same logic as your category page)
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://tag-mag-7j6q.vercel.app";

  try {
    // Fetch the JSON file for the specific category
    const res = await fetch(`${baseUrl}/data/${decodedCategory}.json`);
    console.log("res:",res)
    
    if (!res.ok) {
      console.error("Failed to fetch data:", res.status);
      return notFound();
    }

    const articles: Article[] = await res.json();
    
    // Find the specific article by matching the href/slug
    const article = articles.find(
      (a) => a.href === slug
    );
    
    if (!article) {
      console.log("Article not found for slug:", slug);
      return notFound();
    }
    
    // console.log("article:", article);

    // Get related articles (excluding the current one)
    const relatedArticles = articles
      .filter(a => a.href !== slug)
      .slice(0, 2); // Get first 2 related articles

    return (
      <div className="container py-3">
        <div className="">
          <DetailSection
            image={article.image}
            category={article.category}
            title={article.title}
            published={article.published}
            slug={article.href}
            newsDetail={article.newsDetail}
          />
        </div>
        
        <div className="row justify-content-center border-bottom border-top border-black col-12 col-md-10 col-lg-12 text-center mx-auto">
          <h2 className="section-subtitle py-5">Related Articles</h2>
        </div>
        
        <div className="lg:mx-5 mx-0   row border-black border-bottom">
          {relatedArticles.map((relatedArticle, idx) => (
            <div className="col-lg-6" key={idx}>
              <ArticleCard
                category={relatedArticle.category}
                published={relatedArticle.published}
                imageUrl={relatedArticle.image}
                imageAlt={relatedArticle.imageAlt}
                title={relatedArticle.title}
                href={`/${category}/${relatedArticle.href}`}
                imageWidth="600px"
                imageHeight="400px"
              />
            </div>
          ))}
          
          {/* If there are fewer than 2 related articles, you can add fallback content or leave empty */}
          {relatedArticles.length === 0 && (
            <div className="col-12 text-center py-4">
              <p>No related articles found.</p>
            </div>
          )}
        </div>
        
        <div className="container">
          <ConnectionCards />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching article data:", error);
    return notFound();
  }
};

export default DetailPage;