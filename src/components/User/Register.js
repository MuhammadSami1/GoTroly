import React, { useState } from "react";

function Register() {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Register with:", {
      name,
      email,
      mobile,
      address,
      profileImage,
    });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-3 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-semibold text-center text-gray-700">
          Register
        </h1>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="profileImage"
              className="block text-sm text-gray-800"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profileImage"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="name" className="block text-sm text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block text-sm text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="mobile" className="block text-sm text-gray-800">
              Mobile No
            </label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="address" className="block text-sm text-gray-800">
              Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
