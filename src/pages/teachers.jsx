import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import teachers from "../data/teachersData"; // ✅ import shared data

const Teachers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-4">
          Meet the awesome <span className="text-purple-600">TEACHERS</span> and connect with them!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-60 object-cover rounded-xl"
              />
              <Link
                to={`/contact-teacher/${teacher.id}`}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-center w-full"
              >
                Connect Now
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Teachers;
