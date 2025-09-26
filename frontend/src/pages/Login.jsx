import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form data:", form);
    try {
      const res = await axios.post("http://localhost:3000/auth/login",
        {
          email: form.email,
          password: form.password,

        })
      localStorage.setItem("token", res.data.token);
      alert("Logged in succesfully");

      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Error logging in");
      console.log(error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f8f9fa" }}
    >
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              disabled={loading}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
        <div className="text-center mt-3">
          Don't have an account?
          <Link to="/register">SignUp</Link> &nbsp;
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
