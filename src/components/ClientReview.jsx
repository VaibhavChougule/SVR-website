import React from 'react';

const ClientReview = () => {
    const reviews = [
        {
            id: 1,
            name: "Rahul Narale",
            organization: "SVR Robotics",
            designation: "General Manager",
            review: "I am very happy with the service provided by this company. They are very professional and their products are of high quality. I would definitely recommend them to others.",
            rating: 5,
        },
        {
            id: 2,
            name: "Amit Sharma",
            organization: "Tech Solutions",
            designation: "CTO",
            review: "Exceptional support and great attention to detail. Highly recommend!",
            rating: 5,
        },
        {
            id: 3,
            name: "Priya Verma",
            organization: "Innovate Inc.",
            designation: "Product Manager",
            review: "Impressed by their quick turnaround and quality of work.",
            rating: 4,
        },
        // Add more reviews if needed
    ];

    const renderStars = (count) => {
        return '★'.repeat(count) + '☆'.repeat(5 - count);
    };

    return (
        <div className='bg-slate-600 py-10 px-4 m-1 rounded-lg'>
            <h1 className='text-center text-3xl font-semibold underline font-serif text-white mb-8'>
                Client Review
            </h1>

            <div className='max-w-7xl mx-auto flex flex-wrap justify-start gap-6'>
                {reviews.map((element, index) => (
                    <div
                        className='bg-white w-full sm:w-72 p-6 rounded-lg shadow-lg text-wrap text-justify font-serif text-md transition-transform duration-300 hover:scale-105'
                        key={index}
                    >
                        <h2 className='indent-7 mb-3'>{element.review}</h2>
                        <p className='mb-2 font-medium text-yellow-500'>
                            {renderStars(element.rating)}
                        </p>
                        <div className='text-right text-sm text-gray-600'>
                            <p>{element.name}</p>
                            <p>{element.designation}</p>
                            <p>{element.organization}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientReview;
