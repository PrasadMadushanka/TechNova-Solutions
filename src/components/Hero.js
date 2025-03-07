import React from 'react';
import '../styles.css';

const Hero = () => {
    return (
        <section className="hero">
            <h1>React.js Internship <br />  Web Developer</h1>

            <p><i>Join our team and gain hands-on experience in modern web development!</i></p>
            <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Apply Now</button>
        </section>
    );
};

export default Hero;
