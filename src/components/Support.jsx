import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import config from "../config.js";
import Chatbox from "./Chatbox.jsx";

const Support = () => {
  const [maintenanceData, setMaintenanceData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    organizationName: "",
    query: "",
    image: null,
  });

  const [productData, setProductData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    organizationName: "",
    productName: "",
    message: "",
    // image: null,
  });

  const [trainingData, setTrainingData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    organizationName: "",
    message: "",
    // image: null,
  });

  const [setupData, setSetupData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    organizationName: "",
    productName: "",
    message: "",
    // image: null,
  });

  const [visibleForm, setVisibleForm] = useState(null); 
  // const [isChatboxOpen, setIsChatboxOpen] = useState(true);
  const [modal, setModal] = useState(false)

  // const handleChatboxClose = () => {
  //   setIsChatboxOpen(false);
  // };

  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "Maintenance") {
      setMaintenanceData({ ...maintenanceData, [name]: value });
    } else if (formType === "Product") {
      setProductData({ ...productData, [name]: value });
    } else if (formType === "Training") {
      setTrainingData({ ...trainingData, [name]: value });
    } else if (formType === "Setup") {
      setSetupData({ ...setupData, [name]: value });
    }
  };

  const handleFileChange = (e, formType) => {
    if (formType === "Maintenance") {
      setMaintenanceData({ ...maintenanceData, image: e.target.files[0] });
    } else if (formType === "Product") {
      setProductData({ ...productData, image: e.target.files[0] });
    } else if (formType === "Training") {
      setTrainingData({ ...trainingData, image: e.target.files[0] });
    } else if (formType === "Setup") {
      setSetupData({ ...setupData, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    if (formType === "Maintenance") {
      formDataToSend.append("fullName", maintenanceData.fullName);
      formDataToSend.append("email", maintenanceData.email);
      formDataToSend.append("contactNo", maintenanceData.contactNo);
      formDataToSend.append("organizationName", maintenanceData.organizationName);
      formDataToSend.append("query", maintenanceData.query);
      if (maintenanceData.image) formDataToSend.append("image", maintenanceData.image);
      console.log("formdata appended")
    } else if (formType === "Product Details") {
      formDataToSend.append("fullName", productData.fullName);
      formDataToSend.append("email", productData.email);
      formDataToSend.append("contactNo", productData.contactNo);
      formDataToSend.append("organizationName", productData.organizationName);
      formDataToSend.append("productName", productData.productName);
      formDataToSend.append("message", productData.message);
      // if (productData.image) formDataToSend.append("image", productData.image);
      console.log("inside product");

    } else if (formType === "Training and Workshop") {
      formDataToSend.append("fullName", trainingData.fullName);
      formDataToSend.append("email", trainingData.email);
      formDataToSend.append("contactNo", trainingData.contactNo);
      formDataToSend.append("organizationName", trainingData.organizationName);
      formDataToSend.append("message", trainingData.message);
      // if (trainingData.image) formDataToSend.append("image", trainingData.image);
    } else if (formType === "Setup and Costing") {
      formDataToSend.append("fullName", setupData.fullName);
      formDataToSend.append("email", setupData.email);
      formDataToSend.append("contactNo", setupData.contactNo);
      formDataToSend.append("organizationName", setupData.organizationName);
      formDataToSend.append("productName", setupData.productName);
      formDataToSend.append("message", setupData.message);
      // if (setupData.image) formDataToSend.append("image", setupData.image);
    }


    formDataToSend.append("formType", formType);
    console.log("submitted:", formType);
    console.log("formdata Name:", formDataToSend.get("fullName"));
    setModal(true);
    fetch(`${config.API_URI}/api/support`,
      {
        method: "POST",
        body: formDataToSend
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("response:", data);
        if (data.success === false) {
          setModal(false)
          alert(data.message);
          return;
        }
        setModal(false)
        resetForm(formType);
        setVisibleForm(null)
        alert(data.message)

      })
      .catch((e) => {
        console.log("Error while submitting the form:", e);
      })


  };

  const resetForm = (formType) => {
    if (formType === "Maintenance") {
      setMaintenanceData({
        fullName: "",
        email: "",
        contactNo: "",
        organizationName: "",
        query: "",
        image: null,
      });
    } else if (formType === "Product Details") {
      setProductData({
        fullName: "",
        email: "",
        contactNo: "",
        organizationName: "",
        productName: "",
        message: "",
        image: null,
      });
    } else if (formType === "Training and Workshop") {
      setTrainingData({
        fullName: "",
        email: "",
        contactNo: "",
        organizationName: "",
        message: "",
        image: null,
      });
    } else if (formType === "Setup and Costing") {
      setSetupData({
        fullName: "",
        email: "",
        contactNo: "",
        organizationName: "",
        productName: "",
        message: "",
        image: null,
      });
    }
  };

  const handleFormSwitch = (formType) => {
    resetForm(formType);
    setVisibleForm(formType);
  };

  const renderForm = (formType) => {
    switch (formType) {
      case "Maintenance":
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">Enter your Name:</label>
              <input id="fullName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="fullName" value={maintenanceData.fullName} onChange={(e) => handleChange(e, "Maintenance")} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email:</label>
              <input id="email" className="w-full p-2 border border-gray-300 rounded-md" type="email" name="email" value={maintenanceData.email} onChange={(e) => handleChange(e, "Maintenance")} />
            </div>
            <div>
              <label htmlFor="contactNo" className="block text-sm font-semibold text-gray-700">Contact Number:</label>
              <input id="contactNo" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="contactNo" value={maintenanceData.contactNo} onChange={(e) => handleChange(e, "Maintenance")} />
            </div>
            <div>
              <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700">Organization Name:</label>
              <input id="organizationName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="organizationName" value={maintenanceData.organizationName} onChange={(e) => handleChange(e, "Maintenance")} />
            </div>
            <div>
              <label htmlFor="query" className="block text-sm font-semibold text-gray-700">Describe your issue:</label>
              <textarea id="query" className="w-full p-2 border border-gray-300 rounded-md" name="query" value={maintenanceData.query} onChange={(e) => handleChange(e, "Maintenance")} />
            </div>
            <div>
              <label htmlFor="file" className="block text-sm font-semibold text-gray-700">Attach a file:</label>
              <input id="file" type="file" className="w-full py-2 text-gray-700" onChange={(e) => handleFileChange(e, "Maintenance")} />
            </div>
          </div>
        );
      case "Product Details":
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">Enter your Name:</label>
              <input id="fullName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="fullName" value={productData.fullName} onChange={(e) => handleChange(e, "Product")} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email:</label>
              <input id="email" className="w-full p-2 border border-gray-300 rounded-md" type="email" name="email" value={productData.email} onChange={(e) => handleChange(e, "Product")} />
            </div>
            <div>
              <label htmlFor="contactNo" className="block text-sm font-semibold text-gray-700">Contact Number:</label>
              <input id="contactNo" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="contactNo" value={productData.contactNo} onChange={(e) => handleChange(e, "Product")} />
            </div>
            <div>
              <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700">Organization Name:</label>
              <input id="organizationName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="organizationName" value={productData.organizationName} onChange={(e) => handleChange(e, "Product")} />
            </div>
            <div>
              <label htmlFor="productName" className="block text-sm font-semibold text-gray-700">Product Name (optional):</label>
              <input id="productName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="productName" value={productData.productName} onChange={(e) => handleChange(e, "Product")} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message (optional):</label>
              <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" name="message" value={productData.message} onChange={(e) => handleChange(e, "Product")} />
            </div>
            {/* <div>
              <label htmlFor="file" className="block text-sm font-semibold text-gray-700">Attach a file:</label>
              <input id="file" type="file" className="w-full py-2 text-gray-700" onChange={(e) => handleFileChange(e, "Product")} />
            </div> */}
          </div>
        );
      case "Training and Workshop":
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">Enter your Name:</label>
              <input id="fullName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="fullName" value={trainingData.fullName} onChange={(e) => handleChange(e, "Training")} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email:</label>
              <input id="email" className="w-full p-2 border border-gray-300 rounded-md" type="email" name="email" value={trainingData.email} onChange={(e) => handleChange(e, "Training")} />
            </div>
            <div>
              <label htmlFor="contactNo" className="block text-sm font-semibold text-gray-700">Contact Number:</label>
              <input id="contactNo" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="contactNo" value={trainingData.contactNo} onChange={(e) => handleChange(e, "Training")} />
            </div>
            <div>
              <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700">Organization Name:</label>
              <input id="organizationName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="organizationName" value={trainingData.organizationName} onChange={(e) => handleChange(e, "Training")} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message:</label>
              <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" name="message" value={trainingData.message} onChange={(e) => handleChange(e, "Training")} />
            </div>
            {/* <div>
              <label htmlFor="file" className="block text-sm font-semibold text-gray-700">Attach a file:</label>
              <input id="file" type="file" className="w-full py-2 text-gray-700" onChange={(e) => handleFileChange(e, "Training")} />
            </div> */}
          </div>
        );
      case "Setup and Costing":
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">Enter your Name:</label>
              <input id="fullName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="fullName" value={setupData.fullName} onChange={(e) => handleChange(e, "Setup")} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email:</label>
              <input id="email" className="w-full p-2 border border-gray-300 rounded-md" type="email" name="email" value={setupData.email} onChange={(e) => handleChange(e, "Setup")} />
            </div>
            <div>
              <label htmlFor="contactNo" className="block text-sm font-semibold text-gray-700">Contact Number:</label>
              <input id="contactNo" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="contactNo" value={setupData.contactNo} onChange={(e) => handleChange(e, "Setup")} />
            </div>
            <div>
              <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700">Organization Name:</label>
              <input id="organizationName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="organizationName" value={setupData.organizationName} onChange={(e) => handleChange(e, "Setup")} />
            </div>
            <div>
              <label htmlFor="productName" className="block text-sm font-semibold text-gray-700">Specific Product (optional):</label>
              <input id="productName" className="w-full p-2 border border-gray-300 rounded-md" type="text" name="productName" value={setupData.productName} onChange={(e) => handleChange(e, "Setup")} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message (optional):</label>
              <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" name="message" value={setupData.message} onChange={(e) => handleChange(e, "Setup")} />
            </div>
            {/* <div>
              <label htmlFor="file" className="block text-sm font-semibold text-gray-700">Attach a file:</label>
              <input id="file" type="file" className="w-full py-2 text-gray-700" onChange={(e) => handleFileChange(e, "Setup")} />
            </div> */}
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Customer Support</h1>
          <h1 className="text-xl font-semibold text-center mb-8">Fill out the form to submit your query.</h1>

          {/* Button Section */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {["Maintenance", "Product Details", "Training and Workshop", "Setup and Costing"].map((category) => (
              <button
                key={category}
                onClick={() => handleFormSwitch(category)}
                className={`px-4 py-2 ${visibleForm === category ? "bg-blue-800 text-white" : "bg-[#010050] text-white"} rounded-lg shadow-md hover:bg-blue-900 transition-all`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Form Modal */}
          {visibleForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="relative max-w-lg w-full p-6 border rounded-lg shadow-lg bg-white sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3">
                <button
                  type="button"
                  onClick={() => setVisibleForm(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <form onSubmit={(e) => handleSubmit(e, visibleForm)} className="space-y-4">
                  {renderForm(visibleForm)}

                  {/* Action Buttons */}
                  <div className="flex justify-between gap-4 flex-wrap">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-4 py-2 bg-[#010050] text-white rounded-lg hover:bg-blue-700"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisibleForm(null)}
                      className="w-full sm:w-auto px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto py-6 px-4 border-t mt-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Frequently Asked Questions</h2>
        <ul className="space-y-6">
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out">
            <strong className="text-lg text-gray-800">What services does your company provide?</strong>
            <p className="text-gray-600 mt-2">We specialize in both educational and application-based robotics solutions and can customize them to suit your needs.</p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out">
            <strong className="text-lg text-gray-800">Where are your offices located?</strong>
            <p className="text-gray-600 mt-2">Our headquarters are in Pune, Maharashtra, India, with global support available online.</p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out">
            <strong className="text-lg text-gray-800">How do I raise a support ticket?</strong>
            <p className="text-gray-600 mt-2">You can use the support page on our website to submit your request or email your query to support@svrinfotech.net.</p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out">
            <strong className="text-lg text-gray-800">What is the typical response time for customer support?</strong>
            <p className="text-gray-600 mt-2">Our support team aims to respond to queries within 24-48 hours.</p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out">
            <strong className="text-lg text-gray-800">Do you provide training in robotics and automation?</strong>
            <p className="text-gray-600 mt-2">We offer training services for students and professionals in robotics, automation, and related technologies.</p>
          </li>
        </ul>
      </div>

      {/* Chatbox Component */}
      {/* {isChatboxOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-auto">
          <Chatbox onClose={handleChatboxClose} />
        </div>
      )} */}

      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 z-50"
          onClick={() => setLoading(false)}
        >
          <h1>Loading..</h1>
        </div>
      )}


      <Footer />
    </>

  );

};

export default Support;
