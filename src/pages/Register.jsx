import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await registerUser(name, email, password);

      toast.success("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);

      console.log(error.response);

      toast.error(error.response?.data || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-xl rounded-xl p-10 w-[420px]"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create Account
        </h1>

        <input
          className="w-full mt-8 border rounded-lg p-3"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full mt-5 border rounded-lg p-3"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full mt-5 border rounded-lg p-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="mt-8 w-full bg-blue-600 text-white rounded-lg py-3"
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="text-center mt-6">
          Already have an account?
          <Link to="/" className="ml-2 text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
