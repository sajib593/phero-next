"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const MOCK_EMAIL = "admin@example.com";
  const MOCK_PASSWORD = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      // Set cookie (simple way)
      document.cookie = "isLoggedIn=true; path=/";

      // Redirect to items page
      router.push("/items");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Demo Login: admin@example.com / 123456
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
