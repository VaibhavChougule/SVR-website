import React, { useEffect, useState } from 'react';
import config from "../config.js"

const Jobs = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await fetch(`${config.API_URI}/api/getJobApplications`);
        const data = await response.json();
        setApplications(data);
        console.log(data)
      } catch (err) {
        setError('Error fetching job applications');
      } finally {
        setLoading(false);
      }
    };

    fetchJobApplications();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Job Applications</h2>
      {applications.length === 0 ? (
        <p className="text-center text-lg">No applications available.</p>
      ) : (
        <div className="space-y-6">
          {applications.map((application, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{application.name}</h3>
              <p className="text-gray-600">Email: {application.email}</p>
              <p className="text-gray-600">Phone: {application.phone}</p>
              <p className="text-gray-600">Position: {application.category}</p>
              {application.coverLetter && (
                <p className="text-gray-600">Cover Letter: {application.coverLetter}</p>
              )}
              {/* <p className="text-gray-600">Cover Letter: {application.coverLetter}</p> */}
              {application.resumePath && (
                <a
                  href={application.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  View Resume (PDF)
                </a>
              )}

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
