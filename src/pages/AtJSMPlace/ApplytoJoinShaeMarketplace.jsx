import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplytoJoinShaeMarketplace = () => {
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
        "http://localhost:5000/api/marketplace",
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
        alert(data.message || "Application submitted successfully!");

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
    <div className="min-h-screen flex items-center absolute inset-0 bg-black/60 backdrop-blur-md justify-center text-white px-4">
  <div className="relative z-10 bg-gray/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 text-white">
        <h2 className="text-3xl text-white font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Apply to Join Shae Marketplace
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            {/* <label className="block mb-1 text-sm text-gray-400">
              Your Name (optional)
            </label> */}
            <input
              type="text"
              name="name"
              placeholder="Your Name (optional)"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:border-white placeholder-white/30"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:border-white placeholder-white/30"
            />
          </div>

          {/* Company */}
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:border-white placeholder-white/30"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              name="agree"
              placeholder="Your Name (optional)"
              checked={formData.agree}
              onChange={handleChange}
              className="accent-green-500"
            />
            <label>I agree to receive updates</label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={loading || !formData.agree}
              className="flex-1 bg-gradient-to-r from-green-800 to-green-600 py-2 rounded-lg font-semibold hover:scale-105 transition duration-300 disabled:opacity-50"
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

export default ApplytoJoinShaeMarketplace;

