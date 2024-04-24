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
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-3xl p-6">
        <h1 className="text-6xl font-bold text-center text-black">Login</h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className=" font-bold block text-xl text-black"
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
              className="font-bold block text-xl text-black"
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

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-black bg-yellow-500"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
