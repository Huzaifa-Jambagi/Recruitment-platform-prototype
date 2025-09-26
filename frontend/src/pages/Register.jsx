import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    headline: "",
    location: "",
    about: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/signup",
        {
          email: form.email,
          password: form.password,
          profile: {
            fullName: form.fullName,
            headline: form.headline,
            location: form.location,
            about: form.about,
          },
        }
      );

      console.log("Signup successful:", res);
      alert("Registration successful! You can now login.");
      navigate("/login"); // redirect to login page

    } catch (err) {
      console.error("Signup error:", err);
      alert( "Registration failed, Server error");
    }finally {
    setLoading(false); 
  }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f8f9fa" }}
    >
      <div className="card shadow p-4" style={{ width: "500px" }}>
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            minLength="4"
            className="form-control mb-3"
          />
          <input
            type="text"
            name="headline"
            placeholder="Headline (e.g. Full Stack Developer)"
            value={form.headline}
            onChange={handleChange}
            className="form-control mb-3"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="form-control mb-3"
          />
          <textarea
            name="about"
            placeholder="About yourself (optional)"
            value={form.about}
            onChange={handleChange}
            className="form-control mb-3"
          />
          <button type="submit" className="btn btn-success w-100">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link> &nbsp;
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
