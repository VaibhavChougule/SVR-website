import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-8 mt-2 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10 items-start px-6">
        {/* About the Company */}
        <div className="max-w-md">
          <h1 className="text-lg font-bold mb-2">About the Company</h1>
          <p className="text-sm text-gray-300 leading-relaxed">
          SVR Robotics Pvt Ltd specializes in Robotics & Automation, manufacturing advanced Autonomous Mobile Robots (AMRs) and innovative clean robots. We deliver cutting-edge solutions tailored to meet diverse automation needs, enhancing operational efficiency and precision across various industries.
          </p>
          <h1 className="text-lg font-bold mt-4 mb-2">Our Associations</h1>
          <p className="text-sm text-gray-300">VSSC/ ISRO Trivandrum, IIT Delhi & BARC Mumbai.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h1 className="text-lg font-bold mb-2">Quick Links</h1>
          <a href="/" className="hover:text-gray-400 text-sm">Home</a>
          <a href="/products" className="hover:text-gray-400 text-sm">Products</a>
          <a href="/Contact" className="hover:text-gray-400 text-sm">Contact</a>
          <a href="/Careers" className="hover:text-gray-400 text-sm">Careers</a>
          <a href="Events" className="hover:text-gray-400 text-sm">Events</a>
          <a href="/Downloads" className="hover:text-gray-400 text-sm">Downloads</a>
        </div>

        {/* Social Media Links and Contact Details */}
        <div className="text-sm">
          <h1 className="text-lg font-bold mb-2">Connect with Us</h1>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/svrrobotics?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=R1ZYQdM3C8E&t=9s"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/_____svr.robotics/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/svr-robotics/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <h1 className="text-lg font-bold mb-2">Contact Us</h1>
          <div className="space-y-2">
            {/* <div className="flex items-center gap-2">
              <i className="far fa-envelope"></i>
              <a href="mailto:krunali@svrrobotics.com" className="hover:text-gray-400">
                krunali@svrrobotics.com
              </a>
            </div> */}
            <div className="flex items-center gap-2">
              <i className="far fa-envelope"></i>
              <a href="mailto:support@svrrobotics.com" className="hover:text-gray-400">
                support@svrrobotics.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone"></i>
              <p className="text-gray-300">+91 952 9316 252</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-6">
         {/* {new Date().getFullYear()} SVR Robotics Pvt. Ltd. Designed and Developed by <a href="https://www.linkedin.com/in/vaibhavchougule475" className='underline'>Vaibhav Chougule.</a> */}
         {new Date().getFullYear()} SVR Robotics Pvt. Ltd. Designed and Developed by Vaibhav Chougule.
      </p>
      
    </footer>
  );
}

export default Footer;
