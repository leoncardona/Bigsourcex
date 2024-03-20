import Tag from "../components/Tag";
import tags from "../../data/tags.json";
import resources from "../../data/resources.json";
import Card from "../components/Card";
import type { Resource } from "../../types/resource";
import "./styles/Home.css";
import { useState } from "preact/hooks";

const Home = () => {
  const [currentResources, setResources] = useState<Resource[]>(
    resources as Resource[]
  );

  const [activeTag, setActiveTag] = useState<string>("all");

  const filterResources = (tag: string) => {
    if (tag === "all") {
      setResources(resources as Resource[]);
    } else {
      const filteredResources = resources.filter((resource) =>
        resource.tags.includes(tag)
      );
      setResources(filteredResources as Resource[]);
    }
    setActiveTag(tag);
  };

  return (
    <main>
      <h1 className="title">
        BIGSOURCE<span>X</span>
      </h1>
      <h2 className="subtitle">The resource collection for web developers.</h2>
      <section className="tags-container">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            active={tag === activeTag}
            onClick={() => filterResources(tag)}
          >
            {tag}
          </Tag>
        ))}
      </section>
      <section className="resources-container">
        {currentResources.map(
          (
            { title, description, tags, image, link }: Resource,
            index: number
          ) => (
            <Card
              key={index}
              title={title}
              description={description}
              tags={tags}
              image={image}
              link={link}
            />
          )
        )}
      </section>
    </main>
  );
};

export default Home;
