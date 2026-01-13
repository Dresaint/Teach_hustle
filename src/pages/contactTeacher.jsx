import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import teachers from "../data/teachersData"; // ✅ import shared data

const ContactTeacher = () => {
  const { id } = useParams();
  const teacher = teachers.find((t) => t.id === parseInt(id));

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!teacher) {
    return <p className="text-center mt-10">Teacher not found!</p>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-3xl mx-auto px-4 py-10">
        {!submitted ? (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">
              Contact {teacher.name}
            </h1>

            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-xl p-6 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border p-3 rounded-lg"
              ></textarea>

              {/* Hidden field with teacher email */}
              <input type="hidden" name="teacherEmail" value={teacher.email} />

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          </>
        ) : (
          <div className="text-center bg-green-100 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-green-700">
              ✅ Message Sent!
            </h2>
            <p className="mt-2">
              Your message has been sent to <b>{teacher.name}</b> (
              {teacher.email}).
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ContactTeacher;
