import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import config from "../config.js"

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState("View all");
  console.log(config.API_URI);
  

  const categories = [
    "View all",
    "Software",
    "Mechanical",
    "Robotics",
    "Electronics",
    "Sales & Marketing",
    "Internship",
  ];

  const jobsData = [
    {
      title: "Software Engineer",
      description: "Currently, there are no vacancies available for Software Engineers.",
      location: "N/A",
      type: "N/A",
      category: "Software",
    },
    {
      title: "Mechanical Engineer",
      description: "Currently, there are no vacancies available for Mechanical Engineers.",
      location: "N/A",
      type: "N/A",
      category: "Mechanical",
    },
    {
      title: "Robotics Engineer",
      description: "Currently, there are no vacancies available for Robotics Engineers.",
      location: "N/A",
      type: "N/A",
      category: "Robotics",
    },
    {
      title: "Electronics Engineer",
      description: "Currently, there are no vacancies available for Electronics Engineers.",
      location: "N/A",
      type: "N/A",
      category: "Electronics",
    },
    {
      title: "Sales and Marketing Representative",
      description: "Currently, there are no vacancies available for Electronics Engineers.",
      location: "N/A",
      type: "N/A",
      category: "Sales & Marketing",
    },
    {
      title: "Internship - Mechanical/Civil",
      description: "Currently, there are no vacancies available for Electronics Engineers.",
      location: "N/A",
      type: "N/A",
      category: "Internship",
    },
    {
      title: "Internship - Software Development",
      description: "Currently, there are no vacancies available for Electronics Engineers.",
      location: "N/A",
      type: "N/A",
      category: "Internship",
    },
    {
      title: "Internship - Software Developer",
      description: "Currently, there are no vacancies available for Electronics Engineers.",
      location: "N/A",
      type: "N/A",
      category: "Internship",
    },
  ];

  const filteredJobs =
    selectedCategory === "View all"
      ? jobsData
      : jobsData.filter((job) => job.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="p-6 font-sans text-gray-800 bg-gradient-to-r from-blue-100 to-blue-200">
        {/* Header Section */}
        <header className="text-center mb-10 ">
          <h1 className="text-4xl font-bold mb-4">Be part of our mission</h1>
          <p className="text-orange-800 font-bold">
            We're looking for passionate people to join us on our mission. We
            value flat hierarchies, clear communication, and full ownership and
            responsibility.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md bg-slate-100"
            >
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex justify-between items-center text-sm font-bold text-gray-500 mb-4">
                <span>{job.location}</span>
                <span>{job.type}</span>
              </div>
              {/* Conditionally render the Apply button */}
              {!job.description.startsWith("Currently, there are no vacancies") && (
                <a
                  href="/JobApplicationForm"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Apply →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
