import React, { useState } from "react";
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import config from "../config.js"

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Internship",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = new FormData();
    applicationData.append("name", formData.name);
    applicationData.append("email", formData.email);
    applicationData.append("phone", formData.phone);
    applicationData.append("category", formData.category);
    applicationData.append("resume", formData.resume);
    applicationData.append("coverLetter", formData.coverLetter);
    console.log(applicationData)

    try {
      const response = await fetch(`${config.API_URI}/api/jobApplications`, {
        method: "POST",
        body: applicationData,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Failed to submit the application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit the application. Please try again.");
    }
  };

  return (
    <>
    <Header/>
    <div className="bg-blue-200">
    <div className="job-application-form max-w-4xl mx-auto p-8 bg-blue-300 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Job Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Choose Category:</label>
          <select
            defaultValue={"Internship"}
            name="category"
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
          >
            <option value="Internship">Internship</option>
            <option value="Software">Software(Full-time)</option>
            <option value="Mechanical">Mechanical(Full-time)</option>
            <option value="Robotics">Robotics(Full-time)</option>
            <option value="Electronics">Electronics(Full-time)</option>
            <option value="Sales & Marketing">Sales & Marketing(Full-time)</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Resume (PDF):</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Cover Letter:</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="5"
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Application
        </button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default JobApplicationForm;
