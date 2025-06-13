// app/[category]/[slug]/page.tsx

import ArticleCard from "@/components/ArticleCard";
import ConnectionCards from "@/components/ConnectionCard";
import DetailSection from "@/components/DetailSection1";
import { FC } from "react";
import data from '../../../../public/data/economía.json';
import { notFound } from "next/navigation";


interface DetailPageProps {
  params:Promise <{
    category: string;
    slug: string;
  }>;
}

const  DetailPage: FC<DetailPageProps> = async ({ params }) => { 
  const { category, slug } = await  params;

    const article = data.find(
    (a) => a.category.toLowerCase() === category.toLowerCase() && a.href === slug
  );
  if (!article) return notFound();
  console.log("article:",article);

 
  return (
    <div className="container py-3 ">
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
      <div className="row justify-content-center border-bottom border-top border-black  col-12 col-md-10 col-lg-12 text-center mx-auto">
        <h2 className="section-subtitle   py-5">Related Articles</h2>
      </div>
      <div className=" mx-5 row border-black border-bottom">
        <div className="col-lg-6">
          <ArticleCard
            category="Lifestyle"
            published="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba6fe5e8b4c5d5d4520616_pexels-pus%CC%A6cas%CC%A6-adryan-13051215-p-800.jpg"
            imageAlt="Skincare routine demonstration"
            title="Minimalist Haven: Embracing Simplicity in Your Living Space"
            href="/articles/skincare-secrets"
            imageWidth="600px"
            imageHeight="400px"
          />
        </div>
        <div className="col-lg-6 border-bottom">
          <ArticleCard
            category="Lifestyle"
            published="3 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba6b4ce56d392df5886fed_pexels-pixabay-416747-p-800.jpg"
            imageAlt="Skincare routine demonstration"
            title="Fitness Fusion: Balancing Physical and Mental Health"
            href="/articles/skincare-secrets"
            imageWidth="600px"
            imageHeight="400px"
          />
        </div>
        <div className="container">
          <ConnectionCards />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
