import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

interface DetailSectionProps {
  image: string;
  category: string;
  title: string;
  published: string;
  slug: string;
  newsDetail: string;
}

const DetailSection: React.FC<DetailSectionProps> = ({
  image,
  category,
  title,
  published,
  slug,
  newsDetail,
}) => {
  // Check if this is the special article
  const isWandaVazquezArticle =
    slug ===
    "wanda-vazquez-llega-a-acuerdo-y-se-declarara-culpable-en-caso-federal-por-corrupcion";

  // Special content for Wanda Vazquez article
  const renderSpecialArticle = () => (
    <div className="d-flex justify-content-center container">
      <div className="beauty-blog-card position-relative mb-5">
        <div className="blog-header d-flex justify-content-between align-items-center mb-2">
          <span className="category-label">{category}</span>
          <span className="read-time">{published}</span>
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

        <div className="article-content">
          <Link
            href={`/${category.toLowerCase()}/${slug}`}
            className="text-decoration-none"
          >
            <h1 className="blog-title border-bottom border-black mb-4">
              {title}
            </h1>
          </Link>
          <div className="mb-4">
            <p className="detail-para mb-3">
              La exgobernadora de Puerto Rico, Wanda Vázquez, logró un acuerdo
              con la Fiscalía Federal para declararse culpable en el caso por
              corrupción que enfrentan en su contra.Los coacusados, Julio M.
              Herrera Velutini y Mark T. Rossini también de declararán
              culpables.En la moción con fecha del 16 de junio, se indica que
              las partes llegaron a un acuerdo y fiscalía presentará una
              acusación formal con un solo cargo contra los acusados.“En
              consecuencia, las partes solicitan respetuosamente que el Tribunal
              programe una audiencia en la que los acusados puedan ser
              procesados y presentar sus declaraciones conforme a este acuerdo”,
              lee la moción. Además, se solicita que la vista se lleve a cabo de
              manera virtual debido a que dos de los coacusados residen fuera de
              Puerto Rico. “Las partes solicitan que el Tribunal lleve a cabo la
              audiencia de manera virtual. Dos de los acusados, el Sr. Herrera y
              el Sr. Rossini, residen actualmente fuera de los Estados Unidos.
              Asimismo, el Sr. Herrera no puede ingresar a los Estados Unidos en
              este momento debido a la expiración de su visa. Una audiencia
              virtual para todos los acusados permitirá que este asunto avance
              sin demoras y de manera ágil”, añade.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="section-title h4 fw-bold  mb-3">
              Reacciona Wanda Vázquez
            </h2>
            <p className="detail-para mb-3">
              A través de declaraciones escritas, el portavoz de la
              exgobernadora, Juan A. Rosado, indicó que por el momento esta no
              realizará expresiones debido a que continúa una orden de mordaza
              en el caso. “Según ha trascendido en los medios de comunicación,
              han llegado a un acuerdo que pondrá fin al caso radicado el 4 de
              agosto de 2022. No obstante, continúa en vigor la orden de mordaza
              impuesta por el tribunal, lo que me impide ofrecer información
              adicional en este momento. Reconozco el gran reto que esto
              representa al momento de lograr que trascienda la información
              exacta y fidedigna. El pueblo de Puerto Rico puede estar tranquilo
              y confiar en que, tan pronto sea posible, la exgobernadora Wanda
              Vázquez Garced hará sus debidas expresiones, como siempre se ha
              caracterizado: con responsabilidad, transparencia y guiada por la
              verdad”, leen las expresiones.
            </p>

          </div>

          <div className="mb-4">
            <h2 className="section-title h4 fw-bold  mb-3">
             Lo último en el caso
            </h2>
            <p className="detail-para mb-3">
              La semana pasada, la representación legal de la exgobernadora Wanda Vázquez Garced y los coacusados Julio Herrera Velutini y Mark Rossini solicitaron en la vista de estatus del 9 de junio, más tiempo para someter mociones ante el tribunal federal.
            </p>
            <p className="detail-para">
             La fecha pautada originalmente para someter estas mociones era hoy, 16 de junio, pero la jueza federal Silvia Carreño Coll, concedió la solicitud de la defensa de Herrera Velutini para aplazar la fecha límite por cuatro días; es decir, este viernes.
            </p>
            <p className="detail-para">Mientras que la fecha del juicio está pautada para el 25 de agosto, aunque el fiscal federal Nicholas Warren Cannon, había indicado que esperaba que el juicio no se llevara a cabo y que las partes llegaran a un acuerdo.</p>
            <p className="detail-para">La imputación contra Vázquez Garced, el banquero Herrera Velutini y Rossini gira en torno a un presunto esquema en el que, a cambio de contribuciones de campaña y asesoría política, la exgobernadora habría nombrado a un comisionado de instituciones financieras que respondía a los intereses de Herrera Velutini, quien enfrentaba investigaciones regulatorias por parte de la Oficina del Comisionado de Instituciones Financieras (OCIF).</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Default article layout
  const renderDefaultArticle = () => (
    <div className="d-flex justify-content-center container">
      <div className="beauty-blog-card position-relative mb-5">
        <div className="blog-header d-flex justify-content-between align-items-center mb-2">
          <span className="category-label">{category}</span>
          <span className="read-time">{published}</span>
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

        <Link
          href={`/${category.toLowerCase()}/${slug}`}
          className="text-decoration-none"
        >
          <h2 className="blog-title border-bottom border-black">{title}</h2>
        </Link>

        <div>
          <p className="detail-para">{newsDetail}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isWandaVazquezArticle ? renderSpecialArticle() : renderDefaultArticle()}
    </>
  );
};

export default DetailSection;
