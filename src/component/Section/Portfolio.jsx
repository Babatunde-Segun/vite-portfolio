import React from "react";
import Tag from "../Tag/Tag";

const portfolioArray = [
  {
    src: "",
    tag: ["node", "react"],
  },
  {
    src: "",
    tag: ["node", "javascript"],
  },
  {
    src: "",
    tag: ["react", "nextjs", "typescript"],
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

      <div className="portfolio-array"></div>
    </section>
  );
}

export default Portfolio;
