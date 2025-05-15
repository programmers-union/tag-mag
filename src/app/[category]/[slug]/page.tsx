// app/[category]/[slug]/page.tsx

import ArticleCard from "@/components/ArticleCard";
import ConnectionCards from "@/components/ConnectionCard";
import DetailSection from "@/components/DetailSection1";
import { FC } from "react";

interface DetailPageProps {
  params:Promise <{
    category: string;
    slug: string;
  }>;
}

const  DetailPage: FC<DetailPageProps> = async ({ params }) => { 
  const { category, slug } = await  params;

  // Optional formatting
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  const formattedSlug = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="container ">
      <div className="">
        <DetailSection
          image="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba6d5d53b81a43fff4c75f_pexels-ron-lach-8128675.jpg"
          category="Lifestyle"
          title="Beauty Toolbox: Must-Have Products for Every Routine"
          readTime="2 Min Read"
          slug="beauty-toolbox-must-have-products"
        />
      </div>
      <div className="row justify-content-center border-bottom border-top border-black  col-12 col-md-10 col-lg-12 text-center mx-auto">
        <h2 className="section-subtitle   py-5">Related Articles</h2>
      </div>
      <div className=" mx-5 row border-black border-bottom">
        <div className="col-lg-6">
          <ArticleCard
            category="Lifestyle"
            readTime="2 Min Read"
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
            readTime="3 Min Read"
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
