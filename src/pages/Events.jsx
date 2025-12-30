import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Robowar from './Robowar';
const sumobg = "/sumobg.png";
const Events = () => {
    return (
        <>
            <div className="events">
                <div className="absolute top-0 left-0 w-full z-50 flex justify-center">
                    <Navbar />
                </div>
                <Robowar/>
            </div>
            <Footer />
        </>
    )
}

export default Events