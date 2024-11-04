import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Project Management Tool',
        description: "🚀 Empowering Productivity with a Full-Stack Project Management Tool 🌟 Developed a robust and intuitive project management solution leveraging the MERN stack (MongoDB, Express, React, Node.js) to streamline team collaboration and task organization. With a dynamic, user-friendly interface, it enables users to effortlessly create, track, and manage tasks and projects in real-time. Key features include role-based access control, progress tracking, and interactive dashboards, modern design that optimizes productivity and enhances the user experience from login to project completion. LOGIN CREDENTIALS USERNAME:priyankashan16@gmail.com PASSWORD:123456789",
        link: 'https://projectmangertoolcapstone.netlify.app/',
        image: '/project tool.png',
        githubFrontend: 'https://github.com/PriyankagithubS/capstoneFrontend.git',
        githubBackend: 'https://github.com/PriyankagithubS/capstoneBackend.git'
    },
    {
        id: 2,
        title: 'Food Delivery App',
        description: "🎨 Dynamic and Colorful Frontend Experience 🌟 Crafted an engaging and visually appealing food delivery app with a lively and intuitive interface. Leveraged React to create a smooth and interactive experience for users to effortlessly order and filter their favorite dishes. Features include an animated cart, category-based item selection, and a sleek, colorful design that enhances the user journey from browsing to checkout.",
        link: 'https://food-order-app-phi-rouge.vercel.app/',
        image: '/foodapp.png',
        githubFrontend: 'https://github.com/PriyankagithubS/food-order-app.git',
        githubBackend: 'https://github.com/username/food-delivery-backend'
    },
   
    {
        id: 3,
        title: 'Appointment Booking App',
        description: "🚀 Developing innovative web solutions with a passion for clean code and seamless user experiences. Committed to delivering impactful applications that bridge technology and user needs 🌟",
        link: 'https://doctorappointmentbookingapp.netlify.app/',
        image: '/appointmentApp.png',
        githubFrontend: 'https://github.com/PriyankagithubS/appointmentbooking.git',
        githubBackend: 'https://github.com/PriyankagithubS/appointmentBookingBackend.git'
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
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="project-button">Visit Page</button>
                        </a>
                        <div className="project-buttons">
                            <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
                                <button className="project-button">GitHub Frontend</button>
                            </a>
                            <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                                <button className="project-button">GitHub Backend</button>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
