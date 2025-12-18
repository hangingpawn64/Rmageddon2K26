import { useState, useEffect } from 'react';
import bgVideo from '../assets/videos/bgvideo.mp4';
import "./HomePage.css";
import Navbar from './Navbar';
import Footer from './Footer';

// need to use Date.now() for proper timer.
export default function HomePage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [timeLeft, setTimeLeft] = useState({
        days: 1,
        hours: 24,
        minutes: 30,
        seconds: 50
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 50;
        const moveY = (clientY - window.innerHeight / 2) / 50;
        setMousePos({ x: moveX, y: moveY });
    };

    return (
        <>
            <section
                className="relative min-h-screen w-full hero-section"
                onMouseMove={handleMouseMove}
            >
                {/* Background Video */}
                <video
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Navbar Overlay */}
                <div className="absolute top-0 left-0 w-full z-50 flex justify-center">
                    <Navbar />
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 min-h-screen flex flex-col items-center justify-between py-20 px-10">

                    {/* Heading */}
                    <h1 className='heading'>RMAGEDDON 2026</h1>

                    {/* Main Content Grid */}
                    <div className="w-full flex flex-col lg:flex-row justify-between items-center max-w-7xl gap-12 lg:gap-0">

                        {/* Left: Countdown */}
                        <div className="countdown-container glass-panel">
                            <h3 className="panel-title">TIME REMAINING</h3>
                            <div className="timer-grid">
                                <div className="time-unit">
                                    <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
                                    <div className="time-label">DAYS</div>
                                </div>
                                <div className="time-separator">
                                    <span>.</span>
                                    <span>.</span>
                                </div>
                                <div className="time-unit">
                                    <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                                    <div className="time-label">HOURS</div>
                                </div>
                                <div className="time-separator">
                                    <span>.</span>
                                    <span>.</span>
                                </div>
                                <div className="time-unit">
                                    <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                    <div className="time-label">MINUTES</div>
                                </div>
                                <div className="time-separator">
                                    <span>.</span>
                                    <span>.</span>
                                </div>
                                <div className="time-unit">
                                    <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                    <div className="time-label">SECONDS</div>
                                </div>
                            </div>
                        </div>

                        {/* Center: Logo & Character */}
                        <div className="center-content relative">
                            <img
                                src="/character.png"
                                alt="character"
                                className="character-img"
                                style={{
                                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
                                }}
                            />
                            <img src="/logo.png" alt="logo" className="center-logo" />
                        </div>

                        {/* Right: Info Box */}
                        <div className="info-container glass-panel">
                            <div className="info-row">
                                <span className="info-label">GAMES:</span>
                                <span className="info-value text-cyan">4+</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">DATES:</span>
                                <span className="info-value text-cyan">27FEB - 1MAR</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">PRIZE POOL:</span>
                                <span className="info-value text-cyan">Rs. 2,00,000</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
                        {/* Map */}
                        <div className="map-wrapper">
                            <img src="/map.png" alt="map" className="map-img" />
                        </div>
                        {/* Mission Text */}
                        <div className="mission-container">
                            <h2 className="mission-title">
                                <span className="text-red">Mission Start :</span> Build, Battle, Dominate
                            </h2>
                            <p className="mission-desc">
                                Gear Up, Crew! RMAGEDDON 2025 Drops You Right Into A High-Stakes Robotics Showdown.
                                Assemble Your Squad, Upgrade Your Bot, And Rise Through The Ranks Of Los Bot-Santos.
                                Earn Respect, Claim Titles, And Rule The Streets With Engineering Mastery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
