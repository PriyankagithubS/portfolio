import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Non-invasive Glucometer',
        description: `A Glucometer developed from scratch, integrating sensor technology to detect glucose levels using breath.
        Presented at Smart India Hackathon 2022 (Hardware edition) and L&T Techgium contest.`,
        link: 'https://github.com/PriyankagithubS/NON-INVASIVE-GLUCOMETER.git' // Add actual link if available
    },
    {
        id: 2,
        title: 'Food Delivery App',
        description: "🎨 Dynamic and Colorful Frontend Experience 🌟 Crafted an engaging and visually appealing food delivery app with a lively and intuitive interface. Leveraged React to create a smooth and interactive experience for users to effortlessly order and filter their favorite dishes. Features include an animated cart, category-based item selection, and a sleek, colorful design that enhances the user journey from browsing to checkout.",
        link: 'https://food-order-app-phi-rouge.vercel.app/' // Existing link
    }

    // Add more projects as needed
];

const Projects = () => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <motion.section
            ref={containerRef}
            id="projects"
            className="projects-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
        >
            <h2 className="projects-title">My Projects</h2>
            <motion.div
                className="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {projects.map(project => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                        transition={{ duration: 0.5, delay: project.id * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="project-button">Visit Page</button>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
