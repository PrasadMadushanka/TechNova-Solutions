import React from 'react';
import '../styles.css';
import AboutImage from '../assets/about-image.jpg'; // Add your image here
import { FaPlay, FaAward, FaPaperPlane } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about">
            {/* Left Column - Image */}
            <div className="about-image">
                <img src={AboutImage} alt="About Us" />
               
            </div>

            {/* Right Column - Content */}
            <div className="about-content">
                <h3>About Us</h3>
                <h1>Discover The World of TechNova Solutions</h1>
                <p>
                    TechNova Solutions is a fast-growing web development company specializing in AI-powered applications, 
                    cloud computing, and modern UI/UX development. Our clients include startups and enterprises looking for 
                    scalable and efficient web applications.
                </p>
                
                {/* Read More Button */}
                <a href="#" className="read-more">Read More</a>

                {/* Stats */}
                <div className="about-stats">
                    <div className="stat">
                        <FaAward className="stat-icon" />
                        <span className="stat-text">25 Years of Experience</span>
                    </div>
                    <div className="stat">
                        <FaPaperPlane className="stat-icon" />
                        <span className="stat-text">350 Completed Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
