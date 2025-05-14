import Image from "next/image";
import styles from "./page.module.css";
import HomeSection1 from "@/components/HomeSection1";
import ArticleCard from "@/components/ArticleCard";
import MagazineBanner from "@/components/Banner";

export default function Home() {
  return (
    <div className="">
      <HomeSection1 />
      <div className=" mx-5 row ">
        <div className="col-lg-4">
          <ArticleCard
            category="Lifestyle"
            readTime="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba6d5d53b81a43fff4c75f_pexels-ron-lach-8128675-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Beauty Toolbox:Must-Have products for every Routine"
            href="/articles/skincare-secrets"
            imageWidth="450px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Entertainment"
            readTime="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba4d0b187cc1a7496fe671_pexels-koolshooters-6976096-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Small Screen Chronicles: Navigating the World of TV"
            href="/articles/skincare-secrets"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Technology"
            readTime="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65bb7d1022a1f7da711a1460_pexels-oluwaseun-duncan-226232-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Code Chronicles: Exploring the World of Programming and Development"
            href="/articles/skincare-secrets"
          />
        </div>
      </div>

      <div className=" mx-5 row border-black border-bottom">
        <div className="col-lg-4">
          <ArticleCard
            category="Entertainment"
            readTime="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65b7e39b5ff9aae2c327ebdd_pexels-ruslan-alekso-1928131-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Sound Waves: A Symphony of Musical Trends"
            href="/articles/skincare-secrets"
            imageWidth="450px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Business"
            readTime="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65bb7e11b60e47e4e2bb8b2c_pexels-thought-catalog-2228570-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Crypto Chronicles: Updates and Insights in the World of Virtual Coins"
            href="/articles/skincare-secrets"
            imageWidth="450px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Lifestyle"
            readTime="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba796cbb85c6147759d68c_pexels-vanessa-loring-5966137-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Culinary Adventures: Exploring Global Flavors in Your Kitchen"
            href="/articles/skincare-secrets"
          />
        </div>
      </div>
      <div className="border-black border-bottom">
        <MagazineBanner />
      </div>

      <div className="row justify-content-center border-bottom border-black  col-12 col-md-10 col-lg-12 text-center mx-auto">
        <h2 className="section-subtitle   py-5">Latest From Business</h2>
      </div>

         <div className=" mx-5 row border-black border-bottom">
        <div className="col-lg-6">
          <ArticleCard
            category="Business"
            readTime="3 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65bb80783a452a08f674af5a_pexels-andrea-piacquadio-3771089-p-800.jpg"
            imageAlt="Skincare routine demonstration"
            title="CEO Insight: Perspectives on Leadership and Business Innovation"
            href="/articles/skincare-secrets"
            imageWidth="600px"
            imageHeight="400px"
          />
        </div>
        <div className="col-lg-6">
          <ArticleCard
            category="Business"
            readTime="3 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65bb7f7bc84aeeb0552a761d_pexels-gustavo-fring-4005042-p-800.jpg"
            imageAlt="Skincare routine demonstration"
            title="Plug into the Future: Exploring the World of Electric Vehicles"
            href="/articles/skincare-secrets"
           imageWidth="600px"
            imageHeight="400px"
          />
        </div>

      </div>
       
    </div>
  );
}
