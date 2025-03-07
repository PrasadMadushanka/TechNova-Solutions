import React, { lazy, Suspense } from "react";
import "../styles.css";

const Logo = lazy(() => import("./Logo"));

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Logo />
                    </Suspense>
                </div>
                <nav className="nav-container">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#job-details">Careers</a></li>
                        
                        <li><a href="#apply">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
