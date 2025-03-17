import React from 'react';
import Tag from '../Tag/Tag';
import thumb1 from '../../assets/thumb1.jpg';
import thumb2 from '../../assets/thumb2.jpg';
import thumb3 from '../../assets/thumb3.jpg';
// import thumb4 from "../../assets/thumb4.jpg";
import feedbackapp from '../../assets/feedbackappdesktop.png';
import githubfinder from '../../assets/githhubfinder-dark-mode.png';
import nextfoodfullscreen from '../../assets/nextfoodfullscreen.png';
import housemarketdesktop from '../../assets/housemarketdesktopview.png';
import supportDesk from '../../assets/support-deskdesktop.png';
import securePull from '../../assets/securepull.png';
import aiPortfolio from '../../assets/AI-portfolio.png';
import todoApp from '../../assets/todoapp.png';
import dinnerAward from '../../assets/dinner_award.png';

import crytpoPay from '../../assets/cryptoPay.png';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import { fadeIn } from '../variant';
import { AnimatePresence, motion } from 'framer-motion';

import { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';

const portfolioArray = [
	{
		name: 'Dinner Award',
		href: 'https://dinner-night-award-repo.vercel.app/',
		src: dinnerAward,
		tags: ['Dinner Award', 'React', 'TypeScript'],
	},
	{
		name: 'Secure Pull',
		href: 'https://secure-pull.com/',
		src: securePull,
		tags: ['Secure Pull', 'Angular', 'TypeScript'],
	},
	{
		name: 'Cryto Pay',
		href: 'https://crypto-e2xxytpq9-babatund-seguns-projects-5956ffd0.vercel.app/',
		src: crytpoPay,
		tags: ['Crypto currency', 'React'],
  },
  {
		name: 'Housemarket',
		src: housemarketdesktop,
		href: 'https://house-marketplace-hzo0.onrender.com/',
		tags: ['House-market-app', 'React'],
	},
	{
		name: 'Food community',
		href: 'https://nextjs-food-project.vercel.app/',
		src: nextfoodfullscreen,
		tags: ['Next-level-food', 'NextJS'],
	},
	{
		name: 'AI-portfolio',
		href: 'https://ej16.my.canva.site/babatundesegun-ai-portfolio',
		src: aiPortfolio,
		tags: ['AI portfolio', 'AI'],
	},
	
	{
		name: 'Github-finder',
		href: 'https://github-finder-alpha-six.vercel.app/',
		src: githubfinder,
		tags: ['Github-finder', 'React'],
	},
	{
	  href: "https://support-ticket-desk.onrender.com/",
	  name: "Support-desk",
	  src: supportDesk,
	  tags: ["Support-system-app", "React"],
	},
	{
		href: 'https://todo-app-fmge.onrender.com/',
		name: 'feedback-app',
		src: todoApp,
		tags: ['Todo-app', 'typescript'],
	},
	{
		href: 'https://give-feedback-app.onrender.com/',
		name: 'feedback-app',
		src: feedbackapp,
		tags: ['Feedback app', 'react'],
	},
];

function Portfolio() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);
	return (
		<section id="portfolio" className="portfolio">
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
							target="_blank"
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
								transition={{ type: 'spring', duration: 0.9 }}
								whileHover={{ scale: 1.05 }}
								viewport={{ once: true }}
								src={items.src}
								alt={items.name}
								className="portfolio-img"
								loading="lazy"
							/>
							<div className="portfolio-details-container">
								<div className="portfolio-details-subcontainer">
									{items.tags.length === 0
										? ''
										: items.tags.map((tag, tagIndex) => (
												<motion.p
													style={{
														color: colors.redAccent[100],
														background: colors.blueAccent[800],
													}}
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
