import React from 'react'
import './ContactUs.css'
import Card3D from '../components/Cards'
import teamData from '../data/teamData.json'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// Helper function to dynamically import images
const getImagePath = (path) => {
  if (!path) return null;
  // Extract filename from path like "/src/assets/image.png"
  const filename = path.split('/').pop();
  try {
    return new URL(`../assets/${filename}`, import.meta.url).href;
  } catch (e) {
    console.error('Error loading image:', path, e);
    return null;
  }
}

const ContactUs = () => {
  return (
    <>
      <div className='contact-us'>
        <div className="absolute top-0 left-0 w-full z-50 flex justify-center">
          <Navbar />
        </div>
        <div className='contact-content'>
          <h1 className='contact-heading'>CONTACT US</h1>
          <div className='cards-container'>
            {teamData.teamMembers.map((member) => (
              <Card3D
                key={member.id}
                image={getImagePath(member.image)}
                name={member.name}
                role={member.role}
                instagram={member.instagram}
                linkedin={member.linkedin}
                whatsapp={member.whatsapp}
                characterImage={getImagePath(member.characterImage)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactUs