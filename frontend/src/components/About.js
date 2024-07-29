import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../images/e-photo.jpg'
import Mission from '../images/mission.jpg'
import Team1 from '../images/team1.jpg'
import Team2 from '../images/team2.jpg'
const About= () => {
  return (
    <div>
      <header className="bg-blue-500 font-serif p-6 flex justify-between items-center">
        <h1 className="text-white text-2xl">E-Commerce</h1>
        <nav>
          <Link to="/" className="text-white hover:underline mx-2">Home</Link>
          <Link to='/about' className="text-white hover:underline mx-2">About</Link>
          <Link to="/contact-us" className="text-white hover:underline mx-2">Contact</Link>
          
        </nav>
      </header>

      <section className="hero bg-gray-200 font-serif text-center py-20">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="mb-6">Learn more about our company and our mission.</p>
      </section>

      <section className="about-content py-20 px-4 font-serif md:px-8">
        <div className="max-w-3xl  mx-auto">
          <div className='flex mb-6'>
            <img src={photo} className='w-96 '/>
            <div className='flex-col ml-14 text-blue-800'>
            <h2 className="text-xl  font-bold mb-4">Our Story</h2>
          <p className="mb-4 text-lg">
            Founded in 2024, E-Commerce has grown from a small startup to a leading online retailer.
            Our mission is to provide the best products at unbeatable prices, ensuring a seamless shopping experience
            for our customers. With a wide range of products and a dedicated team, we strive to exceed customer
            expectations and foster a community of satisfied shoppers.
          </p>
            </div>
          
          </div>
         <div className='flex'>
          <div className='flex-col mr-10 text-blue-800'>
         <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4 text-lg">
            Our mission is to make online shopping easy, affordable, and accessible for everyone. We are committed to
            offering high-quality products, exceptional customer service, and a user-friendly shopping experience. We
            believe in innovation, integrity, and putting our customers first in everything we do.
          </p>
          </div>
          <img src={Mission} className='h-64 w-80'/>
         </div>
          
          <h2 className="text-xl font-bold mb-4 mt-6">Our Team</h2>
          <div className='flex gap-4'>
          <img src={Team1} className='rounded '/>
          <img src={Team2} className='rounded'/>
          </div>
          <p className="mb-4 text-lg">
            Our team is composed of passionate and talented individuals who are dedicated to making E-Commerce the best
            online shopping destination. From our customer service representatives to our logistics team, each member
            plays a crucial role in ensuring our customers receive the best service possible.
          </p>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4 text-lg">
            Have questions or need assistance? Our customer service team is here to help. Reach out to us through our
            <Link to="/contact-us" className="text-blue-500"> Contact Us</Link> page, and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default About;
