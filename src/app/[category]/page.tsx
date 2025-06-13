import { FC } from "react";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import ConnectionCards from "@/components/ConnectionCard";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

interface Article {
  category: string;
  imageAlt: string;
  title: string;
  newsDetail: string;
  href: string;
  image: string;
  published: string;
}

const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {
  // Await the params promise
  const resolvedParams = await params;
  const category = decodeURIComponent(resolvedParams.category);
  
  console.log("category:", category);
  const res = await fetch(`http://localhost:3000/data/${category}.json`);
  if (!res.ok) {
    return notFound();
  }
  const articles: Article[] = await res.json();
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div>
      <div className="section-header ps-2 p-3">
        <div className="row justify-content-center border-bottom border-black col-12 col-md-10 col-lg-12 text-center mx-auto">
          <h1 className="section-title py-3">{formattedCategory}</h1>
        </div>
      </div>
      <div className="mx-5 row">
        {articles.map((article, idx) => (
          <div className="col-lg-4" key={idx}>
            <ArticleCard
              category={article.category}
              published={article.published}
              imageUrl={article.image}
              imageAlt={article.imageAlt}
              title={article.title}
              href={`/${category}/${article.href}`}
              imageWidth="450px"
              imageHeight="300px"
            />
          </div>
        ))}
      </div>
      <div className="container border-black border-top">
        <ConnectionCards />
      </div>
    </div>
  );
};

export default CategoryPage;
