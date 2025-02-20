import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../config.js';

function Employee() {
  const { ticketId } = useParams();
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [engineer, setEngineer] = useState("");
  const [error, setError] = useState(null);
  const [daysRequired, setDaysRequired] = useState({});
  const [daysAllocated, setDaysAllocated] = useState(null);
  const [sendingFeedback, setSendingFeedback] = useState(false);

  useEffect(() => {
    fetchQuery();
  }, [ticketId]);

  const fetchQuery = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${config.API_URI}/api/emp/${ticketId}`);
      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      if (data[0].daysRequired) {
        setDaysAllocated(data[0].daysRequired);
      }
      setEngineer(data[0].Engineer);
      setQuery([data[0]]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSendFeedback = async (queryId) => {
    setSendingFeedback(true);
    try {
      let res = await fetch(`${config.API_URI}/api/emp/sendFeedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ queryId, feedback: 'Feedback sent successfully.' }),
      });
      if (!res.ok) throw new Error('Failed to send feedback');
      alert('Feedback sent successfully!');
      await fetchQuery(); // Refresh the data after feedback is sent
    } catch (error) {
      console.error('Error while sending feedback:', error.message);
    } finally {
      setSendingFeedback(false);
    }
  };

  const handleUpdate = async (queryId) => {
    const days = daysRequired[queryId] || 0;
    if (!days || days <= 0) {
      alert('Please enter a valid number of days.');
      return;
    }
    try {
      let res = await fetch(`${config.API_URI}/api/emp/updateDays`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticketId: queryId, daysRequired: days }),
      });
      if (!res.ok) throw new Error('Failed to update days');
      alert('Days updated successfully!');
      setDaysAllocated(days);
    } catch (error) {
      console.error('Error updating days:', error.message);
    }
  };

  const allKeys = query.length > 0 ? Object.keys(query[0]).filter((key) => key !== '_id') : [];

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="bg-slate-800 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-sky-500 mb-6 text-center">{engineer}</h1>
      {query.length > 0 && (
        <div className="bg-slate-700 p-6 rounded shadow-md overflow-x-auto">
          <h2 className="text-2xl font-semibold text-sky-400 mb-4">Query Details</h2>
          <table className="w-full min-w-[600px] border border-slate-700 text-sm">
            <thead>
              <tr className="bg-slate-600">
                {allKeys.map((header) => (
                  <th key={header} className="px-4 py-2 text-left border border-slate-600">{header}</th>
                ))}
                <th className="px-4 py-2 text-left border border-slate-600">Days Required</th>
                <th className="px-4 py-2 text-left border border-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {query.map((item) => (
                <tr key={item.ticketId} className="bg-slate-700 hover:bg-slate-600">
                  {allKeys.map((field) => (
                    <td key={field} className="px-4 py-2 border border-slate-600">{item[field] || 'N/A'}</td>
                  ))}
                  <td className="px-4 py-2 border border-slate-600">
                    {daysAllocated !== null ? (
                      <span className="text-green-400 font-semibold">{daysAllocated} days allocated</span>
                    ) : (
                      <>
                        <input
                          type="number"
                          placeholder="Enter days needed"
                          className="px-2 py-1 bg-slate-800 text-white border border-slate-600 rounded w-full"
                          value={daysRequired[item.ticketId] || ""}
                          onChange={(e) =>
                            setDaysRequired((prev) => ({ ...prev, [item.ticketId]: e.target.value }))
                          }
                        />
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded mt-2 w-full"
                          onClick={() => handleUpdate(item.ticketId)}
                        >
                          Update
                        </button>
                      </>
                    )}
                  </td>
                  <td className="px-4 py-2 border border-slate-600">
                    <button
                      onClick={() => handleSendFeedback(item.ticketId)}
                      className={`px-4 py-1 rounded w-full ${
                        sendingFeedback ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 text-white'
                      }`}
                      disabled={sendingFeedback}
                    >
                      {sendingFeedback ? 'Sending...' : 'Send Feedback Form'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Employee;
