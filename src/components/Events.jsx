import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Events = () => {
    return (
        <>
            {/* Navbar Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 flex justify-center">
                <Navbar />
            </div>
            <div>Events</div>
            <Footer />
        </>
    )
}

export default Events