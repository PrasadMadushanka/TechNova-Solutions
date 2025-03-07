import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles.css';

const JobForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setSubmitted(true);
    };
    
    return (
        
        <section className="job-form-wrapper">
            <div className="job-form-container">
                {/* Left Column - Heading */}
                <div className="job-form-header">
                    <h2>Apply for this Job</h2>
                </div>

                {/* Right Column - Form */}
                <div className="job-form">
                    {!submitted ? (
                        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input {...register('name', { required: true, minLength: 3 })} placeholder="Full Name" />
                                {errors.name && <span className="error">Name is required (min 3 characters)</span>}
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} placeholder="Email" />
                                {errors.email && <span className="error">Enter a valid email</span>}
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Phone Number" />
                                {errors.phone && <span className="error">Enter a valid 10-digit number</span>}
                            </div>

                            <div className="form-group">
                                <label>Resume (PDF only)</label>
                                <input type="file" {...register('resume', { required: true })} accept="application/pdf" />
                                {errors.resume && <span className="error">Upload a PDF (max 5MB)</span>}
                            </div>

                            <div className="form-group">
                                <label>Cover Letter</label>
                                <textarea {...register('coverLetter', { required: true, minLength: 50 })} placeholder="Cover Letter (min 50 characters)"></textarea>
                                {errors.coverLetter && <span className="error">Cover letter must be at least 50 characters</span>}
                            </div>

                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    ) : (
                        <p className="success-message">Thank you for applying! Our team will review your application.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JobForm;
