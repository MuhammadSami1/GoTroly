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
      <div className="w-full max-w-3xl p-6">
        <h1 className="text-7xl font-bold text-center text-black my-20">
          Register
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="profileImage"
              className="font-bold block text-2xl text-black uppercase"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profileImage"
              onChange={handleImageChange}
              className="block w-full px-4 py-2 mt-2 bg-white border-2 border-black"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="name"
              className="font-bold block text-2xl text-black uppercase"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 bg-white border-2 border-black"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="font-bold block text-2xl text-black uppercase"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 bg-white border-2 border-black"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="mobile"
              className="font-bold block text-2xl text-black uppercase"
            >
              Mobile No
            </label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 bg-white border-2 border-black"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="address"
              className="font-bold block text-2xl text-black uppercase"
            >
              Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 bg-white border-2 border-black"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-7 py-2 text-lg tracking-wide font-bold text-black bg-yellow-500"
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
