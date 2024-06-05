import React from "react";
import Tag from "../Tag/Tag";
import thumb1 from "../../assets/thumb1.jpg";
import thumb2 from "../../assets/thumb2.jpg";
import thumb3 from "../../assets/thumb3.jpg";
import thumb4 from "../../assets/thumb4.jpg";

const portfolioArray = [
  {
    name: "title 1",
    src: thumb1,
    tags: ["node", "react"],
  },
  {
    name: "title 2",
    src: thumb2,
    tags: ["node", "javascript"],
  },
  {
    name: "title 3",
    src: thumb3,
    tags: ["react", "nextjs", "typescript"],
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <Tag>Portfolio</Tag>

      <h2 className="secondary-heading portfolio-secondary-heading">
        Check out my <br />
        Featured <span>Project</span>
      </h2>

      <div className="portfolio-array">
        {portfolioArray.map((items) => (
          <div className="portfolio-img-container">
            <img src={items.src} alt={items.name} className="portfolio-img" />
            {items.tags.length === 0
              ? ""
              : items.tags.map((tag) => (
                  <p className="portfolio-img-details">{tag}</p>
                ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
