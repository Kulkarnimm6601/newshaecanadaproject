import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestInvestorDesk = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = formData.email.trim();

    if (!trimmedEmail) {
      alert("Email is required");
      return;
    }

    if (!formData.agree) {
      alert("You must agree to receive updates");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/investor-desk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            email: trimmedEmail,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Investor deck request submitted!");

        setFormData({
          name: "",
          email: "",
          company: "",
          agree: false,
        });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server not responding. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Request Investor Deck
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Your Name (optional)
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Your Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Company (optional)
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="accent-pink-500"
            />
            <label>I agree to receive updates</label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={loading || !formData.agree}
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 py-2 rounded-lg font-semibold hover:scale-105 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 border border-gray-700 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RequestInvestorDesk;

