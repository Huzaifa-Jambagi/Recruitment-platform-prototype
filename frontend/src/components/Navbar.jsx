import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setUser(null); 
    navigate("/"); 
  };

  return (
    <div
      className="w-100 p-3 d-flex justify-content-between align-items-center"
      style={{ backgroundColor: "#28a745" }}
    >
      <span className="fw-bold fs-4 text-light">RecruitmentApp</span>
      <div>
        {!user ? (
          <>
            <Link className="btn btn-success me-2" to="/login">Login</Link>
            <Link className="btn btn-light me-2" to="/register">Signup</Link>
          </>
        ) : (
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
