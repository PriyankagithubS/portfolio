import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './Skills.css';
import { FaJs, FaReact, FaHtml5,  FaNodeJs, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiExpress } from 'react-icons/si';
const skills = [
    { id: 1, name: 'JavaScript', level: '80%', icon: <FaJs /> },
    { id: 2, name: 'React', level: '75%', icon: <FaReact /> },
    { id: 3, name: 'C Programming', level: '90%', icon: <FaJs /> }, // Placeholder icon for C Programming
    { id: 4, name: 'HTML & CSS', level: '90%', icon: <FaHtml5 /> }, // Use FaHtml5 for HTML & CSS
    { id: 5, name: 'MySQL', level: '80%', icon: <SiMysql /> },
    { id: 6, name: 'MongoDB', level: '80%', icon: <SiMongodb /> },
    { id: 7, name: 'Bootstrap', level: '90%', icon: <FaBootstrap /> },
    { id: 8, name: 'Express.js', level: '80%', icon: <SiExpress /> },
    { id: 9, name: 'Node.js', level: '80%', icon: <FaNodeJs /> },
    { id: 9, name: 'Git', level: '80%', icon: <FaGitAlt /> },
];
const Skills = () => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <motion.section
            ref={containerRef}
            id="skills"
            className="skills-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
        >
            <h2 className="skills-title">My Skills</h2>
            <motion.div
                className="skills-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {skills.map(skill => (
                    <motion.div
                        key={skill.id}
                        className="skill-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                        transition={{ duration: 0.5, delay: skill.id * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {skill.icon}
                        <h3 className="skill-name">{skill.name}</h3>
                        <div className="skill-bar">
                            <div className="skill-level" style={{ width: skill.level }}></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )};
export default Skills
