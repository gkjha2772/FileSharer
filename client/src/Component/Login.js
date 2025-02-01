import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AuthContext from "../service/AuthContext";

export const Login = () => {
  const { login, Logined } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function
  const [fail, setfail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    if (Logined) {
      navigate("/dashboard");
    } else {
      setfail(true);
    }
  };

  return (
    <div className="login-form">
      <h2 className=" text-3xl font-extrabold  ">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Login
        </button>
        {fail && <p className="text-red-500">Invalid email or password</p>}
      </form>
      <Link to="/signup" className="link">
        Don't have an account? Sign Up
      </Link>{" "}
      {/* Link to signup page */}
    </div>
  );
};

export default Login;
