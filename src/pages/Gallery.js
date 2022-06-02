import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Gallery() {
    return (
        <div>
            <Navbar />
            <div className="cardDisplay">
                <section className="card">
                    <header>delicacy</header>
                    <img src="./images/image.png" alt="kat" className="work-card" />
                    <a href="https://kayjinyi.github.io/delicacy/" target="_blank">click here!</a>
                </section>
                <section className="card">
                    <header>porefect</header>
                    <img src="./images/porefecthome.jpg" alt="kat" className="work-card" />
                    <a href="https://porefect.herokuapp.com/" target="_blank">click here!</a>
                </section>
                <section className="card">
                    <header>day planner</header>
                    <img src="./images/dayplanner.jpg" alt="kat" className="work-card" />
                    <a href="https://jittel.github.io/day-planner/" target="_blank">click here!</a>
                </section>
            </div>
            <Footer />
        </div>
    )
}