import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Welcome from "../components/Welcome";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
   const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  if (token && storedUser) {
    setUser(JSON.parse(storedUser)); 
  }
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Navbar user={user} setUser={setUser} />
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "calc(100vh - 60px)" }}
      >
        {user ? <ProfileCard user={user} /> : <Welcome />}
      </div>
    </div>
  );
};

export default Home;
