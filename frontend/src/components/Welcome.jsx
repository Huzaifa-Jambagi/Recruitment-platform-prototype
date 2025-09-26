import { Link } from "react-router-dom";

const Welcome = () => (
  <div className="text-center">
    <h1 className="fw-bold mb-3" style={{ color: "#2b8a3e" }}>
      Welcome to the AI Recruitment Platform
    </h1>
    <p className="lead mb-4 text-center" style={{ color: "#2b8a3e" }}>
      Streamline hiring with our AI-powered recruitment tools. Register now and explore!
    </p>
    <div>
      <Link className="btn btn-success btn-lg me-2" to="/register">Get Started</Link>
      <Link className="btn btn-outline-success btn-lg" to="/login">Login</Link>
    </div>
  </div>
);

export default Welcome;
