import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './Contact.css';

const Contact = () => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <motion.section
            ref={containerRef}
            id="contact"
            className="contact-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
        >
            <h2>Contact Me</h2>
            <div className="contact-details">
                <p>Email: <a href="mailto:priyankashanmugasundaramr@gmail.com">priyankashanmugasundaramr@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/priyankashanmugasundaram/">priyankashanmugasundaram</a></p>
                <p>GitHub: <a href="https://github.com/PriyankagithubS">PriyankagithubS</a></p>
            </div>
            <motion.form
                className="contact-form"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <input type="text" className="form-control" placeholder="Your Name" />
                <input type="email" className="form-control" placeholder="Your Email" />
                <textarea className="form-control" placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </motion.form>
        </motion.section>
    );
};

export default Contact;
