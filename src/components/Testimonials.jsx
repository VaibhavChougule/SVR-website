import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const testimonials = {
    customers: [
        { name: "Tech Solutions", logo: "https://via.placeholder.com/150" },
        { name: "Innovate Inc.", logo: "https://via.placeholder.com/150" },
        { name: "NextGen Ltd.", logo: "https://via.placeholder.com/150" },
        { name: "SmartTech", logo: "https://via.placeholder.com/150" },
    ],
    interns: [
        { name: "Alice Johnson", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { name: "Bob Williams", video: "https://www.w3schools.com/html/movie.mp4" },
    ],
};

const Testimonials = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="min-h-screen bg-gray-50 p-8">
                <h1 className="text-4xl font-bold text-center mb-12">Testimonials</h1>

                {/* Customers Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-center mb-6">Our Customers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {testimonials.customers.map((customer, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                            >
                                <img
                                    src={customer.logo}
                                    alt={customer.name}
                                    className="w-32 h-32 object-contain"
                                />
                                <p className="text-lg font-semibold mt-4">{customer.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Internship Feedback Section */}
                <div>
                    <h2 className="text-3xl font-semibold text-center mb-6">Internship Feedback</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.interns.map((intern, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-bold mb-4">{intern.name}</h3>
                                <video controls className="w-full h-auto rounded-lg">
                                    <source src={intern.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
