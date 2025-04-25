import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const ImageModal = ({ media, onClose }) => {
  const isYouTube = media.includes("youtube.com") || media.includes("youtu.be");

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg bg-white p-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the media
      >
        {isYouTube ? (
          <iframe
            className="w-full h-[70vh] rounded-lg"
            src={media}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <img
            src={media}
            alt="Enlarged"
            className="w-full h-auto rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

const AccordionItem = ({ title, description, media, onMediaClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm my-4">
      <button
        className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <p className="text-gray-600">{description}</p>
          {media && media.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {media.map((item, index) => {
                const isYouTube =
                  !item.includes("assets") || !item.includes("assets");

                return isYouTube ? (
                  <div
                    key={index}
                    className="w-full h-auto rounded-md shadow-sm cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => onMediaClick(item)}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${item}`}
                      title={`YouTube video ${index}`}
                      className="w-full h-60 rounded-md"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    key={index}
                    src={item}
                    alt={title}
                    className="w-full h-auto rounded-md shadow-sm cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => onMediaClick(item)}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Events = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const accordionData = [
    {
      title: "🚀 Automation Expo South 2025 - Success Unlocked! 🎉",
      description:
        "We had an incredible experience showcasing SVR Robotics at Stall C-30 in the 2nd Regional Automation Expo, Chennai! 🤖✨ A huge thank you to everyone who visited, engaged, and explored the future of automation with us. Your support and enthusiasm made this event a grand success! 🔥Stay tuned for more innovations, collaborations, and futuristic tech. See you at the next big event! ",
      media: [
        "/assets/automationexpo1.jpg",
        "/assets/automationexpo2.jpg",
        "/assets/automationexpo4.jpg",
        "/assets/automationexpo3.jpg",
        "0LSU4OoST5A"  // YouTube video link
      ],
    },
    {
      title: "NAFED 2025",
      description:
        "We are delighted to announce the successful completion of NAFED 2025, a premier event dedicated to Finite Element Analysis and Engineering Design! 🎉 📍 Venue: IIT Hyderabad Sponsored by: SVR Robotics Pvt. Ltd.🔗 FEAST Software Participants contributing to advanced engineering solutions",
      media: [
        "/assets/nafed20252.jpg",
        "/assets/nafed20253.jpg",
        "/assets/nafed20254.jpg",
        "/assets/nafed20255.jpg",
        "/assets/nafed20251.jpg",
        // "https://www.youtube.com/embed/tgbNymZ7vqY"  // YouTube video link
      ],
    },
    {
      title: "ROC 2024",
      description: "Photos from the ROC event(2024).",
      media: [
        "/assets/roc24poster1.jpg",
        "/assets/roc24poster2.jpg",
        "/assets/roc24poster3.jpg",
        "/assets/roc241.jpg",
        "/assets/roc242.jpg",
        "/assets/roc243.jpg",
        "/assets/roc244.jpg",
        // "https://www.youtube.com/embed/ScMzIvxBSi4"  // YouTube video link
      ],
    },
    {
      title: "ROC 2023",
      description: "Photos from the ROC event.",
      media: [
        "/assets/ROC1.jpg",
        "/assets/ROC2.jpg",
        "/assets/ROC3.jpg",
        // "https://www.youtube.com/embed/2Vv-BfVoq4g"  // YouTube video link
      ],
    },
    {
      title: "NAFED 2019",
      description: "Nafed 2019 Developer's & User's Meet, Mumbai.",
      media: [
        "/assets/nafed 2019 (1).jpeg",
        "/assets/nafed 2019 (2).jpeg",
        "/assets/nafed 2019 (3).jpeg",
        "/assets/nafed 2019 (4).jpeg",
        "/assets/nafed 2019 (5).jpeg",
        // "https://www.youtube.com/embed/5qap5aO4i9A"  // YouTube video link
      ],
    },
    {
      title: "NAFED 2018",
      description:
        "Nafed 2018 Developer's & User's Meet at Panimalar College, Chennai.",
      media: [
        "/assets/nafed_1 2018.jpg",
        "/assets/nafed_2 2018.jpg",
        "/assets/nafed_4 2018.jpg",
        "/assets/nafed_3 2018.jpg",
        "/assets/nafed_5 2018.jpg",
        // "https://www.youtube.com/embed/LXb3EKWsInQ"  // YouTube video link
      ],
    },
    {
      title: "AICTE Training",
      description:
        "Khushaldas Badhan delivered a session on 'Applications of Robotics in Nuclear, Defence, Security & Space Science Fields.'",
      media: [
        "/assets/AICTETRAINING.png",
        // "https://www.youtube.com/embed/M7FIvfx5J10"  // YouTube video link
      ],
    },
    {
      title: "JJ Magdum College of Engineering Robotics Workshop",
      description:
        "SVR Robotics conducted a two-day workshop focusing on basics of robotics, real-time applications, and hands-on experience for students.",
      media: [
        "/assets/img- (1)jj.jpg",
        "/assets/img- (2)jj.jpg",
        "/assets/img- (3)jj.jpg",
        "/assets/img- (4)jj.jpg",
        "/assets/img- (5)jj.jpg",
        "/assets/img- (6)jj.jpg",
        // "https://www.youtube.com/embed/3JZ_D3ELwOQ"  // YouTube video link
      ],
    },
    {
      title: "Jorhat Institute of Science and Technology Robotics Workshop",
      description:
        "SVR Robotics conducted a two-day workshop in collaboration with CDAC Kolkata, focusing on basics of robotics and real-time applications.",
      media: [
        "/assets/img-1 jorhat.jpg",
        // "https://www.youtube.com/embed/ktvTqknDobU" YouTube video link
      ],
    }
  ];
  

  return (
    <>
      <Header />
      <main className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Our Events and Workshops
            </h1>
            <p className="text-gray-600">
              Explore our past events and workshops showcasing the innovative
              work and sessions conducted by SVR Robotics.
            </p>
          </header>
          <div>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                description={item.description}
                media={item.media}
                onMediaClick={setSelectedMedia}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Modal */}
      {selectedMedia && (
        <ImageModal
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </>
  );
};

export default Events;
