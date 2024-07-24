import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './Contact.css';

const Contact = () => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4a5cd7f5-18b7-4fe4-a277-a6c6d7c13f2d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Message sent successfully!");
            event.target.reset();  // Reset form fields
        } else {
            alert("Failed to send message. Please try again.");
        }
    };

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
                onSubmit={onSubmit}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                <textarea className="form-control" name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </motion.form>
        </motion.section>
    );
};

export default Contact;
