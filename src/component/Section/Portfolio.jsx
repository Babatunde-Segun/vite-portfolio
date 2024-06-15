import React from "react";
import Tag from "../Tag/Tag";
import thumb1 from "../../assets/thumb1.jpg";
import thumb2 from "../../assets/thumb2.jpg";
import thumb3 from "../../assets/thumb3.jpg";
import thumb4 from "../../assets/thumb4.jpg";
import nextfoodfullscreen from "../../assets/nextfoodfullscreen.png";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { fadeIn } from "../variant";
import { AnimatePresence, motion } from "framer-motion";

const portfolioArray = [
  {
    name: "title 1",
    src: thumb1,
    href: "https://house-marketplace-hzo0.onrender.com/",
    tags: ["node", "React"],
  },
  {
    name: "title 2",
    href: "https://github-finder-alpha-six.vercel.app/",
    src: thumb2,
    tags: ["node", "JavaScript"],
  },
  {
    href: "https://todo-app-fmge.onrender.com/",
    name: "title 3",
    src: thumb3,
    tags: ["react", "NextJS", "typescript"],
  },
  {
    name: "title 4",
    href: "https://nextjs-food-project.vercel.app/",
    src: nextfoodfullscreen,
    tags: ["NextJS"],
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

      <motion.div
        variants={fadeIn()}
        initial="hidden"
        whileInView="showWithStaggerChildren"
        viewport={{
          once: true,
        }}
        exit="remove"
        className="portfolio-array"
      >
        {portfolioArray.map((items, index) => (
          <AnimatePresence key={index}>
            <Link
              to={items.href}
              className="portfolio-img-container"
              key={index}
            >
              <motion.img
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  showWithStaggerChildren: { opacity: 1, scale: 1 },
                }}
                exit={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.9 }}
                whileHover={{ scale: 1.09 }}
                viewport={{ once: true }}
                src={items.src}
                alt={items.name}
                className="portfolio-img"
              />
              <div className="portfolio-details-container">
                <div className="portfolio-details-subcontainer">
                  {items.tags.length === 0
                    ? ""
                    : items.tags.map((tag, tagIndex) => (
                        <motion.p
                          key={tagIndex}
                          className="portfolio-img-details"
                        >
                          {tag}
                        </motion.p>
                      ))}
                </div>
              </div>
            </Link>
          </AnimatePresence>
        ))}
      </motion.div>
    </section>
  );
}

export default Portfolio;
