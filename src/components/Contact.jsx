import React, { useEffect, useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import config from "../config.js"

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleForm = (event) => {
    event.preventDefault(); // Prevent page reload
    if (!name || !email || !message || !mobile) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, mobile , message });

    const f = fetch(`${config.API_URI}/api/connectUs` , {
      headers: {
        "Content-Type": "application/json",
      },
      method:'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        mobile:mobile,
        message: message,
      })
    })

    f.then(() =>{
      console.log("data sent suceessfullyy");
    })
    f.catch((err) =>{
      console.log(err);
      
    })
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear form fields
    setName('');
    setEmail('');
    setMobile('')
    setMessage('');
  };

  return (
    <>
      <Header />
      <div className="relative bg-[url('../src/assets/eventimg.jpg')] bg-no-repeat bg-cover bg-center w-screen flex flex-col items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-base sm:text-lg">
              We would love to hear from you! Reach out to us using the contact details below or fill out the form.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col lg:flex-row bg-black/50 p-6 sm:p-8 rounded-lg gap-6">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 text-left space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">Contact Details</h2>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-black rounded-full p-4 flex items-center justify-center">
                  <i className="fa-solid fa-location-dot fa-xl"></i>
                </div>
                <div>
                  <p className="text-lg font-semibold">Address:</p>
                  <p className="text-base">Ambegaon Pune Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-400 text-black rounded-full p-4 flex items-center justify-center">
                  <i className="fa-solid fa-envelope fa-xl"></i>
                </div>
                <div>
                  <p className="text-lg font-semibold">Email:</p>
                  <p className="text-base">krunali@svrrobotics.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-400 text-black rounded-full p-4 flex items-center justify-center">
                  <i className="fa-solid fa-phone fa-xl"></i>
                </div>
                <div>
                  <p className="text-lg font-semibold">Phone:</p>
                  <p className="text-base">+91 952 9316 252</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">Get In Touch</h2>
              <form className="space-y-4" onSubmit={handleForm}>
                <div>
                  <label htmlFor="name" className="block mb-1 text-lg font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Your Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-lg font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Your Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block mb-1 text-lg font-semibold">
                    Mobile No.
                  </label>
                  <input 
                    type='number'
                    id="mobile"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Your Mobile No."
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                    
                  ></input>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-lg font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Your Message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
