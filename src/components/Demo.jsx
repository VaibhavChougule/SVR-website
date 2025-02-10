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
    const [modalImage, setModalImage] = useState(null);

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
        JobApplications: "/api/getJobApplications",
    };

    const handleCategoryClick = async (category) => {
        if(category === "JobApplications") {
            setSelectedCategory(category)
            // setLoading(true)
            setError(null)
            return;
        };
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

            // Sort data based on status order
            const statusOrder = {
                OPEN: 1,
                pending: 2,
                feedbackWaiting: 3,
                Completed: 4
            };

            const sortedData = [...data].sort((a, b) => {
                const orderA = statusOrder[a.status] || 5; // Handle unknown statuses
                const orderB = statusOrder[b.status] || 5;
                return orderA - orderB;
            });

            setPopupData(sortedData);
        } catch (err) {
            setError("Failed to fetch data. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    const handleAssignEngineer = async (ticketId) => {
        console.log("Ticket ID:", ticketId);
        console.log("Engineer Assignments:", engineerAssignments);

        const engineerName = engineerAssignments["name"];

        if (!engineerName) {
            console.error("No engineer assigned for this ticket.");
            return;
        }

        let assignment = {
            ticketId: ticketId,
            Engineer: engineerName,
        };

        try {
            setLoading(true);
            let res = await fetch(`${config.API_URI}/api/engineerAssignment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(assignment),
            });

            console.log("Engineer Assignment Sent");

            if (!res.ok) {
                throw new Error(`Failed to assign engineer. Status: ${res.status}`);
            }

            const data = await res.json();
            console.log("Engineer Assignment Status:", data);
        } catch (error) {
            console.error("Error while assigning engineer:", error.message);
        }
        finally {
            setLoading(false);
        }
    };


    const handleClose = async (ticketId) => {
        console.log(ticketId)
        let assignment = {
            ticketId: ticketId
        };

        try {
            setLoading(true);
            let res = await fetch(`${config.API_URI}/api/ticketClose`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(assignment),
            });

            console.log("Closing the ticket:" , ticketId);

            if (!res.ok) {
                throw new Error(`Failed to close ticket. Status: ${res.status}`);
            }

            const data = await res.json();
            console.log("Ticket Closing Status:", data);
        } catch (error) {
            console.error("Error while closing ticket:", error.message);
        }
        finally {
            setLoading(false);
        }
    }


   

    const allKeys = Array.from(new Set(popupData.flatMap((item) => Object.keys(item).filter((key) => key !== "_id"))));

    const renderContent = () => {
        switch (selectedCategory) {
            case "Maintenance":
                if (popupData.length <= 0) {
                    return "no data found"
                }
                return (

                    <div className="bg-slate-700 p-6 rounded shadow-md overflow-x-auto">
                        <h2 className="text-2xl font-semibold text-sky-400 mb-4">{selectedCategory}</h2>
                        <table className="w-full border border-slate-700 min-w-[600px]">
                            <thead>
                                <tr className="bg-slate-600 text-sm">
                                    {allKeys.map((header) => (
                                        <th key={header} className="px-4 py-2 text-left border border-slate-600">
                                            {header}
                                        </th>
                                    ))}
                                    <th className="px-4 py-2 text-left border border-slate-600">Assign Engineer</th>
                                    <th className="px-4 py-2 text-left border border-slate-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {popupData.map((item, index) => (
                                    <tr key={index} className="bg-slate-700 hover:bg-slate-600 text-sm">
                                        {allKeys.map((field) => (
                                            <td key={field} className="px-4 py-2 border border-slate-600">
                                                {field.toLowerCase().includes("image") && item[field] ? (
                                                    <img
                                                        src={item[field]}
                                                        alt="Preview"
                                                        className="w-20 h-20 object-cover cursor-pointer"
                                                        onClick={() => setModalImage(item[field])}
                                                    />
                                                ) : (
                                                    item[field] || "N/A"
                                                )}
                                            </td>
                                        ))}
                                        {item.status !== "Completed" ? (
                                            <>
                                                <td className="px-4 py-2 border border-slate-600">
                                                    <select
                                                        onChange={(e) => setEngineerAssignments({ name: e.target.value })}
                                                        className="bg-slate-600 text-white p-1 rounded w-full"
                                                    >
                                                        <option value="">Select Engineer</option>
                                                        {["Ankita Bhosale", "Sanket Patil", "Jayesh", "Vaibhav Chougule"].map((name, idx) => (
                                                            <option key={idx} value={name}>
                                                                {name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td className="px-4 py-2 border border-slate-600">
                                                    <button
                                                        onClick={() => handleAssignEngineer(item.ticketId)}
                                                        className="bg-green-500 text-white px-4 py-1 rounded"
                                                    >
                                                        Assign
                                                    </button>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="px-4 py-2 border border-slate-600 text-center text-gray-400" colSpan="2">
                                                    Completed
                                                </td>
                                            </>
                                        )}

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                );

            case "ProductDetails":
                if (popupData.length <= 0) {
                    return "no data found"
                }
                return (

                    <div className="bg-slate-700 p-6 rounded shadow-md overflow-x-auto">
                        <h2 className="text-2xl font-semibold text-sky-400 mb-4">{selectedCategory}</h2>
                        <table className="w-full border border-slate-700 min-w-[600px]">
                            <thead>
                                <tr className="bg-slate-600 text-sm">
                                    {allKeys.map((header) => (
                                        <th key={header} className="px-4 py-2 text-left border border-slate-600">
                                            {header}
                                        </th>
                                    ))}
                                    {/* <th className="px-4 py-2 text-left border border-slate-600">Assign Engineer</th> */}
                                    <th className="px-4 py-2 text-left border border-slate-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {popupData.map((item, index) => (
                                    <tr key={index} className="bg-slate-700 hover:bg-slate-600 text-sm">
                                        {allKeys.map((field) => (
                                            <td key={field} className="px-4 py-2 border border-slate-600">
                                                {field.toLowerCase().includes("image") && item[field] ? (
                                                    <img
                                                        src={item[field]}
                                                        alt="Preview"
                                                        className="w-20 h-20 object-cover cursor-pointer"
                                                        onClick={() => setModalImage(item[field])}
                                                    />
                                                ) : (
                                                    item[field] || "N/A"
                                                )}
                                            </td>
                                        ))}
                                        {item.status !== "Completed" ? (
                                            <>
                                                
                                                <td className="px-4 py-2 border border-slate-600">
                                                    <button
                                                        onClick={() => handleClose(item.ticketId)}
                                                        className="bg-green-500 text-white px-4 py-1 rounded"
                                                    >
                                                        Close
                                                    </button>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="px-4 py-2 border border-slate-600 text-center text-gray-400" colSpan="2">
                                                    Completed
                                                </td>
                                            </>
                                        )}

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                );

            case "TrainingWorkshop":
                if (popupData.length <= 0) {
                    return "no data found"
                }
                return (

                    <div className="bg-slate-700 p-6 rounded shadow-md overflow-x-auto">
                        <h2 className="text-2xl font-semibold text-sky-400 mb-4">{selectedCategory}</h2>
                        <table className="w-full border border-slate-700 min-w-[600px]">
                            <thead>
                                <tr className="bg-slate-600 text-sm">
                                    {allKeys.map((header) => (
                                        <th key={header} className="px-4 py-2 text-left border border-slate-600">
                                            {header}
                                        </th>
                                    ))}
                                    {/* <th className="px-4 py-2 text-left border border-slate-600">Assign Engineer</th> */}
                                    <th className="px-4 py-2 text-left border border-slate-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {popupData.map((item, index) => (
                                    <tr key={index} className="bg-slate-700 hover:bg-slate-600 text-sm">
                                        {allKeys.map((field) => (
                                            <td key={field} className="px-4 py-2 border border-slate-600">
                                                {field.toLowerCase().includes("image") && item[field] ? (
                                                    <img
                                                        src={item[field]}
                                                        alt="Preview"
                                                        className="w-20 h-20 object-cover cursor-pointer"
                                                        onClick={() => setModalImage(item[field])}
                                                    />
                                                ) : (
                                                    item[field] || "N/A"
                                                )}
                                            </td>
                                        ))}
                                        {item.status !== "Completed" ? (
                                            <>
                                                
                                                <td className="px-4 py-2 border border-slate-600">
                                                    <button
                                                        onClick={() => handleClose(item.ticketId)}
                                                        className="bg-green-500 text-white px-4 py-1 rounded"
                                                    >
                                                        Close
                                                    </button>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="px-4 py-2 border border-slate-600 text-center text-gray-400" colSpan="2">
                                                    Completed
                                                </td>
                                            </>
                                        )}

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                );

            case "SetupCosting":
                if (popupData.length <= 0) {
                    return "no data found"
                }
                return (

                    <div className="bg-slate-700 p-6 rounded shadow-md overflow-x-auto">
                        <h2 className="text-2xl font-semibold text-sky-400 mb-4">{selectedCategory}</h2>
                        <table className="w-full border border-slate-700 min-w-[600px]">
                            <thead>
                                <tr className="bg-slate-600 text-sm">
                                    {allKeys.map((header) => (
                                        <th key={header} className="px-4 py-2 text-left border border-slate-600">
                                            {header}
                                        </th>
                                    ))}
                                    {/* <th className="px-4 py-2 text-left border border-slate-600">Assign Engineer</th> */}
                                    <th className="px-4 py-2 text-left border border-slate-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {popupData.map((item, index) => (
                                    <tr key={index} className="bg-slate-700 hover:bg-slate-600 text-sm">
                                        {allKeys.map((field) => (
                                            <td key={field} className="px-4 py-2 border border-slate-600">
                                                {field.toLowerCase().includes("image") && item[field] ? (
                                                    <img
                                                        src={item[field]}
                                                        alt="Preview"
                                                        className="w-20 h-20 object-cover cursor-pointer"
                                                        onClick={() => setModalImage(item[field])}
                                                    />
                                                ) : (
                                                    item[field] || "N/A"
                                                )}
                                            </td>
                                        ))}
                                        {item.status !== "Completed" ? (
                                            <>

                                                <td className="px-4 py-2 border border-slate-600">
                                                    <button
                                                        onClick={() => handleClose(item.ticketId)}
                                                        className="bg-green-500 text-white px-4 py-1 rounded"
                                                    >
                                                        Close
                                                    </button>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="px-4 py-2 border border-slate-600 text-center text-gray-400" colSpan="2">
                                                    Completed
                                                </td>
                                            </>
                                        )}

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                );

            case "JobApplications":
                return (
                    <>
                    <Jobs/>
                    </>
                );

            default:
                return <p className="text-white text-center">Select a category to view details.</p>;
        }
    };


    if (!isAuthenticated) {
        return (
            <div className="bg-slate-800 text-white min-h-screen flex justify-center items-center p-4">
                <form onSubmit={handleLogin} className="bg-slate-700 p-6 rounded shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold text-sky-400 mb-4 text-center">Admin Login</h1>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-sm mb-2" htmlFor="adminId">
                            Admin ID
                        </label>
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
                        <label className="block text-sm mb-2" htmlFor="password">
                            Password
                        </label>
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

    // const allKeys = Array.from(new Set(popupData.flatMap((item) => Object.keys(item).filter((key) => key !== "_id"))));

    return (
        <div className="bg-slate-800 text-white min-h-screen p-6">
            <h1 className="text-3xl font-bold text-sky-500 mb-6 text-center">Admin Dashboard</h1>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {Object.keys(categoryUrls).map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className="bg-sky-500 text-white py-2 px-4 rounded text-sm sm:text-base"
                    >
                        {category.replace(/([A-Z])/g, " $1").trim()}
                    </button>
                ))}
            </div>

            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4" onClick={() => setLoading(false)}>
                    {/* <img src={modalImage} alt="Large Preview" className="max-w-full max-h-full rounded shadow-lg" /> */}
                    <h1>Loading..</h1>
                </div>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {renderContent(popupData, allKeys)}

            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4" onClick={() => setModalImage(null)}>
                    <img src={modalImage} alt="Large Preview" className="max-w-full max-h-full rounded shadow-lg" />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
