import type { Resource } from "../../types/resource";
import "./styles/Card.css"

const Card = ({ title, description, tags, image, link }: Resource) => {
  return (
    <article className="card" onClick={() => window.open(link, "_blank")}>
      <img className="card-image" src={image} alt="Resource image" loading="lazy" />
      <section className="card-body">
        <div>
          <h1 className="card-title">{title}</h1>
          <h2 className="card-description">{description}</h2>
        </div>
        <ul className="card-tags">
          {tags.map((tag) => (
            <li className="card-tag">{tag}</li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Card;
