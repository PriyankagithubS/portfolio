import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './About.css';

const About = () => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <motion.section
            ref={containerRef}
            id="about"
            className="about-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
        >
            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">
                        From calibrating medical devices 🩺 to coding dynamic web apps 💻, I’ve made the leap from Biomedical Engineer to MERN Stack Developer, and it’s been an exhilarating ride! I swapped my lab coat for a hoodie and discovered that building sleek, interactive websites can be just as thrilling as fine-tuning a biomedical machine.
                    </p>
                    <p className="about-description">
                        My journey has been like upgrading from a manual to a high-tech digital assistant—just with fewer beeping machines and more exciting JavaScript frameworks! With hands-on experience in MongoDB, Express.js, React, and Node.js, I’m now all about crafting seamless user experiences and solving complex problems with code.
                    </p>
                    <p className="about-description">
                        Whether I’m deploying a full-stack solution or untangling a tricky bug 🐛, I bring the same precision and innovation from my biomedical days into the world of web development. Ready to transform your digital ideas into reality? Let’s code something amazing together! 🚀
                    </p>
                </motion.div>
                <motion.img
                    src="201BM130.jpg"
                    alt="About Me"
                    className="about-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ duration: 1, delay: 0.4 }}
                />
            </div>
        </motion.section>
    );
};

export default About;
