import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const { setUser } = useUser();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const user = await loginUser(email, password);

      setUser(user);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch {
      toast.error("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Document Management
        </h1>

        <p className="text-center text-gray-500 mt-2">Login to continue</p>

        <input
          className="w-full mt-8 border rounded-lg p-3 outline-blue-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full mt-5 border rounded-lg p-3 outline-blue-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="mt-8 w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700"
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        <p className="text-center mt-6">
          Don't have an account?
          <Link to="/register" className="ml-2 text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
