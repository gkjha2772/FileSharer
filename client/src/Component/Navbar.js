import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  return (
    <nav className="bg-slate-700 absolute top-0 left-0 w-[100%] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FileSharer</h1>
      <div>
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded-md mr-2"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded-md"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
