import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ user}) => {
  const [userData] = useState({
    credits: 100,
    courses: [
      { id: 1, title: "Web Development", completed: true },
      { id: 2, title: "Machine Learning Basics", completed: false },
    ],
    certificates: [
      { id: 1, title: "Web Development Certificate", course: "Web Development" },
      // Add more certificates as needed
    ],
    liveInterviews: [
      { id: 1, date: "2024-03-15", topic: "React.js Fundamentals" },
      // Add more live interviews as needed
    ],
    payments: [
      { id: 1, date: "2024-03-10", amount: 50, description: "Web Development Course" },
      // Add more payment entries as needed
    ],
  });

  useEffect(() => {
    // Fetch user data from the server and update state
    // Example API call:
    // fetchUserData(userId).then((data) => setUserData(data));
  }, []); // Run once on component mount

  return (
    <div className="container mx-auto p-4 text-dark dark:text-white">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="dark:bg-gray-800 rounded-md p-8">
          <h2 className="text-3xl text-center font-semibold mb-4">Welcome, {user.email}!</h2>
          <p className="text-gray-600 dark:text-gray-400">Email: {user.email}</p>
          <p className="text-gray-600 dark:text-gray-400">Credits: {userData.credits}</p>
        </div>

        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="dark:bg-gray-800 rounded-md p-8">
            <h3 className="text-xl font-semibold mb-4">Your Courses</h3>
            <ul>
              {userData.courses.map((course) => (
                <li key={course.id} className="mb-2">
                  {course.completed ? (
                    <span className="text-green-500">{course.title}</span>
                  ) : (
                    <span className="text-blue-500">{course.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="dark:bg-gray-800 rounded-md p-8">
            <h3 className="text-xl font-semibold mb-4">Your Certificates</h3>
            <ul>
              {userData.certificates.map((certificate) => (
                <li key={certificate.id} className="mb-2">
                  <span className="text-purple-500">{certificate.title}</span>
                  <p className="text-gray-600 dark:text-gray-400">Course: {certificate.course}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-3">
          <div className="dark:bg-gray-800 rounded-md p-8">
            <h3 className="text-xl font-semibold mb-4">Upcoming Live Interviews</h3>
            <ul>
              {userData.liveInterviews.map((interview) => (
                <li key={interview.id} className="mb-2">
                  <span className="text-yellow-500">{interview.date}</span>
                  <p className="text-gray-600 dark:text-gray-400">Topic: {interview.topic}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-3">
          <div className="dark:bg-gray-800 rounded-md p-8">
            <h3 className="text-xl font-semibold mb-4">Payment History</h3>
            <ul>
              {userData.payments.map((payment) => (
                <li key={payment.id} className="mb-2">
                  <span className="text-blue-500">{payment.date}</span>
                  <p className="text-gray-600 dark:text-gray-400">Amount: ${payment.amount}</p>
                  <p className="text-gray-600 dark:text-gray-400">Description: {payment.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-3 flex justify-end space-x-4">
          <Link
            to="/live-interview"
            className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md transition duration-300"
          >
            Schedule Live Interview
          </Link>
          <Link
            to="/purchase-courses"
            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md transition duration-300"
          >
            Purchase Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
