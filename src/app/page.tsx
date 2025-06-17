import Image from "next/image";
import HomeSection1 from "@/components/HomeSection1";
import ArticleCard from "@/components/ArticleCard";
import MagazineBanner from "@/components/Banner";
import ConnectionCards from "@/components/ConnectionCard";
import economíadata from '../../public/data/economía.json'
import tecnologíadata from '../../public/data/tecnología.json'
import deportesdata from '../../public/data/deportes.json'
import saluddata from '../../public/data/salud.json'
import cienciadata from '../../public/data/ciencia.json'

export default function Home() {
  return (
    <div className="">
      <HomeSection1 />
      <div className="lg:mx-5 mx-2 row ">
        <div className="col-lg-4">
          {economíadata.length > 0 && (
            <ArticleCard
              category={economíadata[0].category}
              published={economíadata[0].published}
              imageUrl={economíadata[0].image}
              imageAlt={economíadata[0].imageAlt}
              title={economíadata[0].title}
              href={`/economía/${economíadata[0].href}`}
              imageWidth="420px"
              imageHeight="300px"
            />
          )}
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category={deportesdata[0].category}
            published={deportesdata[0].published}
            imageUrl={deportesdata[0].image}
            imageAlt={deportesdata[0].imageAlt}
            title={deportesdata[0].title}
            href={`/deportes/${deportesdata[0].href}`}
            imageWidth="420px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category={tecnologíadata[0].category}
            published={tecnologíadata[0].published}
            imageUrl={tecnologíadata[0].image}
            imageAlt={tecnologíadata[0].imageAlt}
            title={tecnologíadata[0].title}
             href={`/tecnología/${tecnologíadata[0].href}`}
            imageWidth="420px"
            imageHeight="300px"
          />
        </div>
      </div>

      <div className="lg:mx-5 mx-0 row border-black border-bottom">
        <div className="col-lg-4">
          <ArticleCard
            category={saluddata[0].category}
            published={saluddata[0].published}
            imageUrl={saluddata[0].image}
            imageAlt={saluddata[0].image}
            title={saluddata[0].title}
             href={`/salud/${saluddata[0].href}`}
            imageWidth="420px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          {economíadata.length > 1 && (
            <ArticleCard
              category={economíadata[1].category}
              published={economíadata[1].published}
              imageUrl={economíadata[1].image}
              imageAlt={economíadata[1].imageAlt}
              title={economíadata[1].title}
              href={`/economía/${economíadata[1].href}`}
              imageWidth="420px"
              imageHeight="300px"
            />
          )}
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category={cienciadata[0].category}
            published={cienciadata[0].published}
            imageUrl={cienciadata[0].image}
            imageAlt={cienciadata[0].image}
            title={cienciadata[0].title}
             href={`/ciencia/${cienciadata[0].href}`}
            imageWidth="420px"
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

      <div className=" lg:mx-5 mx-0 row ">
        <div className="col-lg-6">
          {economíadata.length > 2 && (
            <ArticleCard
              category={economíadata[2].category}
              published={economíadata[2].published}
              imageUrl={economíadata[2].image}
              imageAlt={economíadata[2].imageAlt}
              title={economíadata[2].title}
              href={`/economía/${economíadata[2].href}`}
              imageWidth="572px"
              imageHeight="400px"
            />
          )}
        </div>
        <div className="col-lg-6">
          {economíadata.length > 3 && (
            <ArticleCard
              category={economíadata[3].category}
              published={economíadata[3].published}
              imageUrl={economíadata[3].image}
              imageAlt={economíadata[3].imageAlt}
              title={economíadata[3].title}
              href={`/economía/${economíadata[3].href}`}
              imageWidth="572px"
              imageHeight="400px"
            />
          )}
        </div>
      </div>
      <div className="row justify-content-center border-bottom border-top border-black  col-12 col-md-10 col-lg-12 text-center mx-auto container">
        <h2 className="section-subtitle   py-5">Latest From Technology</h2>
      </div>
      <div className=" lg:mx-5 mx-0 row border-black border-bottom">
        <div className="col-lg-4">
          <ArticleCard
            category={tecnologíadata[1].category}
            published={tecnologíadata[1].published}
            imageUrl={tecnologíadata[1].image}
            imageAlt={tecnologíadata[1].imageAlt}
            title={tecnologíadata[1].title}
            href={`/tecnología/${tecnologíadata[1].href}`}
            imageWidth="420px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category={tecnologíadata[2].category}
            published={tecnologíadata[2].published}
            imageUrl={tecnologíadata[2].image}
            imageAlt={tecnologíadata[2].imageAlt}
            title={tecnologíadata[2].title}
             href={`/tecnología/${tecnologíadata[2].href}`}
            imageWidth="420px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category={tecnologíadata[3].category}
            published={tecnologíadata[3].published}
            imageUrl={tecnologíadata[3].image}
            imageAlt={tecnologíadata[3].imageAlt}
            title={tecnologíadata[3].title}
            href={`/tecnología/${tecnologíadata[3].href}`}
            imageWidth="420px"
            imageHeight="300px"
          />
        </div>
      </div>

      <div className="row justify-content-center border-bottom border-top border-black  col-12 col-md-10 col-lg-12 text-center mx-auto container">
        <h2 className="section-subtitle   py-5">New From Sceince</h2>
      </div>
      <div className=" lg:mx-5 mx-0 row  ">
        <div className="col-lg-4">
          <ArticleCard
            category={cienciadata[1].category}
            published={cienciadata[1].published}
            imageUrl={cienciadata[1].image}
            imageAlt={cienciadata[1].imageAlt}
            title={cienciadata[1].title}
             href={`/ciencia/${cienciadata[1].href}`}
            imageWidth="420px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category={cienciadata[2].category}
            published={cienciadata[2].published}
            imageUrl={cienciadata[2].image}
            imageAlt={cienciadata[2].imageAlt}
            title={cienciadata[2].title}
            href={`/ciencia/${cienciadata[2].href}`}
            imageWidth="420px"
            imageHeight="300px"
          />
        </div>
        <div className="col-lg-4">
          <ArticleCard
            category={cienciadata[3].category}
            published={cienciadata[3].published}
            imageUrl={cienciadata[3].image}
            imageAlt={cienciadata[3].imageAlt}
            title={cienciadata[3].title}
            href={`/ciencia/${cienciadata[3].href}`}
            imageWidth="420px"
            imageHeight="300px"
          />
        </div>
      </div>
      <div className="row justify-content-center border-bottom border-top border-black  col-12 col-md-10 col-lg-12 text-center mx-auto container">
        <h2 className="section-subtitle   py-5">New From Lifestyle</h2>
      </div>
      <div className=" lg:mx-5 mx-0 row border-black border-bottom">
        <div className="col-lg-6">
          <ArticleCard
            category={deportesdata[1].category}
            published={deportesdata[1].published}
            imageUrl={deportesdata[1].image}
            imageAlt={deportesdata[1].imageAlt}
            title={deportesdata[1].title}
            href={`/deportes/${deportesdata[1].href}`}
            imageWidth="572px"
            imageHeight="400px"
          />
        </div>
        <div className="col-lg-6 border-bottom">
          <ArticleCard
             category={deportesdata[2].category}
            published={deportesdata[2].published}
            imageUrl={deportesdata[2].image}
            imageAlt={deportesdata[2].imageAlt}
            title={deportesdata[2].title}
            href={`/deportes/${deportesdata[2].href}`}
            imageWidth="572px"
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