import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './HeroSection.css';

const HeroSection = () => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [displayText, setDisplayText] = useState('');
    const [typingCompleted, setTypingCompleted] = useState(false); // New state to track typing completion
    const fullText = "I'm a passionate developer, Interested in Frontend and Fullstack";

    useEffect(() => {
        if (isVisible && !typingCompleted) { // Check if typing is not yet completed
            let index = 0;
            const interval = setInterval(() => {
                setDisplayText((prev) => prev + fullText.charAt(index));
                index += 1;
                if (index >= fullText.length) {
                    clearInterval(interval);
                    setTypingCompleted(true); // Set the flag to true when typing is complete
                }
            }, 100); // Adjust the typing speed here
        }
    }, [isVisible, typingCompleted]); // Dependency array includes typingCompleted

    return (
        <motion.section
            ref={containerRef}
            className="hero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <h1>Welcome to My Portfolio</h1>
            <p>{displayText}</p>
            <a
                href="D:\Devloper\day1 react\New portfolio\portfolio\public\201BM130 PRIYANKA S NEW (5).pdf" // Replace with the actual path to your resume
                download
                className="download-button"
            >
                Download Resume
            </a>
        </motion.section>
    );
};

export default HeroSection;
