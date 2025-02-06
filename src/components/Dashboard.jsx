import React, { useEffect, useState } from "react";
import Jobs from "./Jobs.jsx";
import config from "../config.js";

const Dashboard = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [popupData, setPopupData] = useState([]);
  const [engineerAssignments, setEngineerAssignments] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${config.API_URI}/api/authenticate`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminId, password }),
      });

      const result = await response.json();

      if (result.status === "success") {
        setIsAuthenticated(true);
      } else {
        setError("Invalid Admin ID or Password");
      }
    } catch (err) {
      setError("Error during authentication. Please try again.");
    }
  };

  const categoryUrls = {
    Maintenance: "/api/getQuery/Maintenance",
    ProductDetails: "/api/getQuery/ProductDetails",
    TrainingWorkshop: "/api/getQuery/TrainingAndWorkshop",
    SetupCosting: "/api/getQuery/SetUpAndCosting",
    JobApplications: "/api/getQuery/TrainingAndWorkshop"
  };

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${config.API_URI}${categoryUrls[category]}`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setPopupData(data);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAssignEngineer = async (ticketId) => {
    console.log("Ticket ID:", ticketId);
    console.log("Engineer Assignments:", engineerAssignments);
  
    // Make sure the engineer is assigned to the ticket
    const engineerName = engineerAssignments["name"]; // Assuming engineerAssignments is a mapping of ticketId -> engineerName
  
    if (!engineerName) {
      console.error("No engineer assigned for this ticket.");
      return;
    }
  
    let assignment = {
      ticketId: ticketId,
      Engineer: engineerName, // Pass the specific engineer for the given ticket
    };
  
    try {
      // Send POST request to the backend
      let res = await fetch(`${config.API_URI}/api/engineerAssignment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure content type is JSON
        },
        body: JSON.stringify(assignment), // Send the assignment object as JSON
      });
  
      console.log("Engineer Assignment Sent");
  
      // Check if the response is successful
      if (!res.ok) {
        throw new Error(`Failed to assign engineer. Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log("Engineer Assignment Status:", data);
  
      // Optionally handle successful assignment here
      // e.g., show a success message or update UI
    } catch (error) {
      console.error("Error while assigning engineer:", error.message);
      // Optionally show a user-friendly error message
    }
  };
  

  if (!isAuthenticated) {
    return (
      <div className="bg-slate-800 text-white min-h-screen flex justify-center items-center">
        <form onSubmit={handleLogin} className="bg-slate-700 p-6 rounded shadow-md">
          <h1 className="text-2xl font-bold text-sky-400 mb-4">Admin Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="adminId">Admin ID</label>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full p-2 rounded bg-slate-600 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-slate-600 text-white"
              required
            />
          </div>
          <button type="submit" className="w-full bg-sky-500 py-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  }

  const allKeys = Array.from(
    new Set(popupData.flatMap((item) => Object.keys(item).filter((key) => key !== "_id")))
  );

  return (
    <div className="bg-slate-800 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-sky-500 mb-6">Admin Dashboard</h1>
      <div className="flex gap-4 mb-6">
        {Object.keys(categoryUrls).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="bg-sky-500 text-white py-2 px-4 rounded"
          >
            {category.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {popupData.length > 0 && (
        <div className="bg-slate-700 p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-sky-400 mb-4">{selectedCategory}</h2>
          <table className="min-w-full border border-slate-700">
            <thead>
              <tr className="bg-slate-600">
                {allKeys.map((header) => (
                  <th key={header} className="px-4 py-2 text-left text-sm border border-slate-600">
                    {header}
                  </th>
                ))}
                <th className="px-4 py-2 text-left text-sm border border-slate-600">Assign Engineer</th>
                <th className="px-4 py-2 text-left text-sm border border-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {popupData.map((item, index) => (
                <tr key={index} className="bg-slate-700 hover:bg-slate-600">
                  {allKeys.map((field) => (
                    <td key={field} className="px-4 py-2 border border-slate-600">
                      {item[field] || 'N/A'}
                    </td>
                  ))}
                  <td className="px-4 py-2 border border-slate-600">
                    <select
                      value={engineerAssignments.name || ""}
                      onChange={(e) =>
                        // setEngineerAssignments({ ...engineerAssignments, [item._id]: e.target.value })
                        setEngineerAssignments({ name: e.target.value })
                      }
                      className="bg-slate-600 text-white p-1 rounded w-full"
                    >
                      <option value="">Select Engineer</option>

                      <option key={index} value="Ankita Bhosale">
                        Ankita Bhosale
                      </option>
                      <option key={index} value="Sanket Patil">
                        Sanket Patil
                      </option>
                      <option key={index} value="Jayesh">
                        Jayesh
                      </option>
                      <option key={index} value="Vaibhav Chougule">
                        Vaibhav Chougule
                      </option>

                    </select>
                  </td>

                  <td className="px-4 py-2 border border-slate-600">
                    <button onClick={() => handleAssignEngineer(item.ticketId)} className="bg-green-500 text-white px-4 py-1 rounded">
                      Assign
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
};

export default Dashboard;
