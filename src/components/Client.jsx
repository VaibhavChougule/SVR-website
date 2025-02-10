import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../config.js';

function Client() {
  const { ticketId } = useParams();
  const [ticketData, setTicketData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [lowRating, setLowRating] = useState(false);

  useEffect(() => {
    fetchTicketData();
  }, [ticketId]);

  const fetchTicketData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${config.API_URI}/api/allocation/${ticketId}`);
      if (!res.ok) throw new Error('Failed to fetch ticket data');
      const data = await res.json();
      setTicketData(data);
      if (data.feedback) setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitFeedback = async () => {
    if (!feedback.trim()) {
      alert('Please enter feedback before submitting.');
      return;
    }
    try {
      const res = await fetch(`${config.API_URI}/api/client/submitFeedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticketId, feedback, rating, status: 'completed' }),
      });
      const responseData = await res.json();
      
      if (responseData.status === "Low Rating") {
        setLowRating(true);
      } else {
        alert('Feedback submitted successfully!');
        setSubmitted(true);
        setTicketData((prevData) => ({ ...prevData, status: 'completed' }));
        setLowRating(false);
      }
    } catch (err) {
      alert('Error submitting feedback. Please try again.');
    }
  };

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="bg-slate-800 text-white min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-sky-500 mb-6 text-center">Client Ticket Details</h1>

      {ticketData ? (
        <div className="bg-slate-700 p-6 rounded shadow-md w-full max-w-4xl">
          <h2 className="text-xl md:text-2xl font-semibold text-sky-400 mb-4 text-center md:text-left">Ticket Information</h2>
          <p className="text-sm md:text-base"><strong>Ticket ID:</strong> {ticketData.ticketId}</p>
          <p className="text-sm md:text-base"><strong>Engineer Assigned:</strong> {ticketData.Engineer || "N/A"}</p>
          <p className="text-sm md:text-base">
            <strong>Status:</strong> 
            <span className={`font-bold ${ticketData.status === 'Pending' ? 'text-yellow-400' : 'text-green-400'}`}> 
              {ticketData.status}
            </span>
          </p>
          {lowRating && <p className="text-red-400 font-bold mt-2">Rating: Low Rating (Our Team will Contact you soon...)</p>}

          {(ticketData.status === 'pending' || ticketData.status === "feedbackWaiting") && !submitted ? (
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Provide Your Feedback</h3>
              
              <textarea
                className="w-full p-2 text-black rounded text-sm md:text-base"
                placeholder="Enter your feedback..."
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

              <label className="block mt-4 text-white text-sm md:text-base">Rate (0-10): {rating}</label>
              <input
                type="range"
                min="0"
                max="10"
                value={rating}
                onChange={(e) => setRating(e.target.value)}s
                className="w-full"
              />

              <button
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full md:w-auto hover:bg-green-600"
                onClick={handleSubmitFeedback}
              >
                Submit Feedback
              </button>
            </div>
          ) : (
            <p className="text-green-400 mt-4 text-center md:text-left">Feedback submitted. Thank you!</p>
          )}
        </div>
      ) : (
        <p className="text-white text-center">No ticket found.</p>
      )}
    </div>
  );
}

export default Client;