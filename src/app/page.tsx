import Image from "next/image";
import HomeSection1 from "@/components/HomeSection1";
import ArticleCard from "@/components/ArticleCard";
import MagazineBanner from "@/components/Banner";
import ConnectionCards from "@/components/ConnectionCard";
import data from '../../public/data/economía.json'

export default function Home() {
  return (
    <div className="">
      <HomeSection1 />
      <div className=" mx-5 row ">
        <div className="col-lg-4">
          {data.length > 0 && (
            <ArticleCard
              category={data[0].category}
              published={data[0].published}
              imageUrl={data[0].image}
              imageAlt={data[0].imageAlt}
              title={data[0].title}
              href={`/economía/${data[0].href}`}
              imageWidth="390px"
              imageHeight="300px"
            />
          )}
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Entertainment"
            published="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba4d0b187cc1a7496fe671_pexels-koolshooters-6976096-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Small Screen Chronicles: Navigating the World of TV"
            href="/entertainment/small-screen-chronicles"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Technology"
            published="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65bb7d1022a1f7da711a1460_pexels-oluwaseun-duncan-226232-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Code Chronicles: Exploring the World of Programming and Development"
            href="/technology/code-chronicles"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
      </div>

      <div className=" mx-5 row border-black border-bottom">
        <div className="col-lg-4">
          <ArticleCard
            category="Entertainment"
            published="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65b7e39b5ff9aae2c327ebdd_pexels-ruslan-alekso-1928131-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Sound Waves: A Symphony of Musical Trends"
            href="/entertainment/sound-waves"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          {data.length > 1 && (
            <ArticleCard
              category={data[1].category}
              published={data[1].published}
              imageUrl={data[1].image}
              imageAlt={data[1].imageAlt}
              title={data[1].title}
              href={`/economía/${data[1].href}`}
              imageWidth="390px"
              imageHeight="300px"
            />
          )}
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Lifestyle"
            published="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba796cbb85c6147759d68c_pexels-vanessa-loring-5966137-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Culinary Adventures: Exploring Global Flavors in Your Kitchen"
            href="/lifestyle/culinary-adventures"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
      </div>
      <div className="border-black border-bottom container">
        <MagazineBanner />
      </div>

      <div className="row justify-content-center border-bottom border-black  col-12 col-md-10 col-lg-12 text-center mx-auto container">
        <h2 className="section-subtitle   py-5">Latest From Business</h2>
      </div>

      <div className=" mx-5 row ">
        <div className="col-lg-6">
          {data.length > 2 && (
            <ArticleCard
              category={data[2].category}
              published={data[2].published}
              imageUrl={data[2].image}
              imageAlt={data[2].imageAlt}
              title={data[2].title}
              href={`/economía/${data[2].href}`}
              imageWidth="550px"
              imageHeight="400px"
            />
          )}
        </div>
        <div className="col-lg-6">
          {data.length > 3 && (
            <ArticleCard
              category={data[3].category}
              published={data[3].published}
              imageUrl={data[3].image}
              imageAlt={data[3].imageAlt}
              title={data[3].title}
              href={`/economía/${data[3].href}`}
              imageWidth="550px"
              imageHeight="400px"
            />
          )}
        </div>
      </div>
      <div className="row justify-content-center border-bottom border-top border-black  col-12 col-md-10 col-lg-12 text-center mx-auto container">
        <h2 className="section-subtitle   py-5">Latest From Technology</h2>
      </div>
      <div className=" mx-5 row border-black border-bottom">
        <div className="col-lg-4">
          <ArticleCard
            category="Technology"
            published="3 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65bb7b10aef080ce3f9423b8_pexels-cottonbro-studio-6153354-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Cognitive Chronicles: Exploring the World of Artificial Intelligence"
            href="/technology/cognitive-chronicles"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Technology"
            published="4 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65bb7ce5cd2756c48e18be82_pexels-thisisengineering-3861969-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Future Tech Files: Dive into Tomorrow's Innovations Today"
            href="/technology/future-tech-files"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Technology"
            published="3 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba7b99b362bb03d11dbd88_pexels-michelangelo-buonarroti-8728380-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Navigating the Future: Cutting-Edge Technologies Redefining Tomorrow"
            href="/technology/navigating-future"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
      </div>

      <div className="row justify-content-center border-bottom border-top border-black  col-12 col-md-10 col-lg-12 text-center mx-auto container">
        <h2 className="section-subtitle   py-5">New From Entertainment</h2>
      </div>
      <div className=" mx-5 row  ">
        <div className="col-lg-4">
          <ArticleCard
            category="Entertainment"
            published="4 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65b7d99487ba0bab5634ede1_pexels-louis-1200450-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Cinephile Chronicles: The Latest in Cinematic Wonders"
            href="/entertainment/cinephile-chronicles"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Entertainment"
            published="4 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65b7bfcb60f091d7bd50ed9e_pexels-jo-kassis-6461411-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="The Evolution of Dance: From TikTok to Mainstream Culture"
            href="/entertainment/evolution-of-dance"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category="Entertainment"
            published="4 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba4ccd05da28331cf8b7e1_pexels-suzy-hazelwood-3248644-p-500.jpg"
            imageAlt="Skincare routine demonstration"
            title="Reading Room Revelations: The Latest in Literature"
            href="/entertainment/reading-room-revelations"
            imageWidth="390px"
            imageHeight="300px"
          />
        </div>
      </div>
      <div className="row justify-content-center border-bottom border-top border-black  col-12 col-md-10 col-lg-12 text-center mx-auto container">
        <h2 className="section-subtitle   py-5">New From Lifestyle</h2>
      </div>
      <div className=" mx-5 row border-black border-bottom">
        <div className="col-lg-6">
          <ArticleCard
            category="Lifestyle"
            published="2 Min Read"
            imageUrl="https://cdn.prod.website-files.com/65706a428903abc2db294774/65ba6fe5e8b4c5d5d4520616_pexels-pus%CC%A6cas%CC%A6-adryan-13051215-p-800.jpg"
            imageAlt="Skincare routine demonstration"
            title="Minimalist Haven: Embracing Simplicity in Your Living Space"
            href="/lifestyle/minimalist-haven"
            imageWidth="550px"
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
            href="/lifestyle/fitness-fusion"
            imageWidth="550px"
            imageHeight="400px"
          />
        </div>
      </div>
      <div className="container">
        <ConnectionCards />
      </div>
    </div>
  );
}