import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobDetails from "./components/JobDetails";
import About from "./components/About";
import JobForm from "./components/JobForm";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
    return (
        <div>
            <Header />
            <section id="home">
                <Hero />
            </section>
            <section id="job-details">
                <JobDetails />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="apply">
                <JobForm />
            </section>
            <Footer />
        </div>
    );
};

export default App;
