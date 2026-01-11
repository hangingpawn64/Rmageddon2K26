import {useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Robowar from './Robowar';
import './Events.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Events = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }, []);

    return (
        <>
            <div className="events-container">
                <div className="top-0 left-0 w-full z-50 flex justify-center events-navbar-wrapper" data-aos="fade-down" data-aos-delay="0">
                    <Navbar />
                </div>
                <div className="events-robowar-wrapper"><Robowar /></div>
            </div>
            <Footer />
        </>
    )
}
export default Events