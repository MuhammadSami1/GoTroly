import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // Implement your login logic here
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl p-6">
        <h1 className="text-7xl font-bold text-center text-black my-20">Login</h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className=" font-bold block text-2xl text-black uppercase"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2  bg-white border-2 border-black"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="font-bold block text-2xl text-black uppercase"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2  bg-white border-2 border-black"
            />
          </div>
          <div
            className="font-semibold block text-sm text-gray-500 tracking-tight uppercase mt-1"
          >
            Forgot Passward ?
          </div>
          <div className="mt-8 mb-28 text-center">
            <button
              type="submit"
              className="px-7 py-2 text-lg tracking-wide font-bold text-black bg-yellow-500"
            >
              SIGN IN
            </button>
            <div
              className="font-semibold block text-sm text-gray-500 tracking-tight uppercase mt-3"
            >
              Create Account
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
