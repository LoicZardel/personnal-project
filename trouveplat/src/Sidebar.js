// src/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => { 
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
            <div className={`sidebar ${isOpen ? 'open' : 'hidden'}`}>
                <h2>Menu</h2>
                <ul>
                    <li>Accueil</li>
                    <li>À Propos</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="content">
                <h1>Bienvenue sur notre site!</h1>
                <p>Ceci est un exemple de sidebar menu avec un menu burger.</p>
            </div>
        </div>
    );
};

export default Sidebar;