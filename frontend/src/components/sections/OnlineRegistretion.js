import React, { useState } from "react";
import axios from "axios";
import {
  User,
  Phone,
  Mail,
  GraduationCap,
  MapPin,
  BookOpen,
  Calendar,
} from "lucide-react";

const courseOptions = [
  "Paramedical Sciences",
  "Nursing",
  "Pharmacy",
  "Engineering",
  "Management",
  "Polytechnic",
  "BCA",
  "MCA",
];

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    course: "",
    dateOfBirth: "",
    address: "",
    educationBackground: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/submit-form",
        formData
      );
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side - Informational Section */}
        <div className="bg-gradient-to-br from-primary to-secondary text-white p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Your Future Starts Here</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Take the first step towards your dream career. Our comprehensive
            programs are designed to transform your potential into professional
            excellence.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <GraduationCap className="text-white/80" size={32} />
              <span>Multiple Courses Available</span>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="text-white/80" size={32} />
              <span>Flexible Learning Paths</span>
            </div>
            <div className="flex items-center space-x-4">
              <BookOpen className="text-white/80" size={32} />
              <span>Industry-Aligned Curriculum</span>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="p-12">
          <h3 className="text-3xl font-bold text-primary mb-6 text-center">
            Online Registration
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="text-gray-400" size={20} />
              </div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="text-gray-400" size={20} />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <GraduationCap className="text-gray-400" size={20} />
              </div>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Desired Course</option>
                {courseOptions.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="text-gray-400" size={20} />
              </div>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                placeholder="Date of Birth"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="text-gray-400" size={20} />
              </div>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Current Address"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="3"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                <BookOpen className="text-gray-400" size={20} />
              </div>
              <textarea
                name="educationBackground"
                value={formData.educationBackground}
                onChange={handleChange}
                placeholder="Brief Education Background"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors duration-300 font-semibold"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
