import React from 'react';
import '../styles.css';

const JobDetails = () => {
    return (
        <section className="job-details">
            <div className="card-container">
                {/* Responsibilities Card */}
                <div className="card">
                    <h2>Responsibilities</h2>
                    <ul>
                        <li>Develop responsive React.js applications.</li>
                        <li>Optimize load speed and performance.</li>
                        <li>Implement lazy loading & form validation.</li>
                        <li>Work with REST APIs and state management.</li>
                    </ul>
                </div>

                {/* Requirements Card */}
                <div className="card">
                    <h2>Requirements</h2>
                    <ul>
                        <li>Currently pursuing a Bachelor’s in Computer Science or related field.</li>
                        <li>Strong JavaScript, React.js, and CSS skills.</li>
                        <li>Familiarity with Git, Webpack, and API integration.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;
