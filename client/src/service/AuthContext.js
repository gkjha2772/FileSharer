import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Logined, setLogined] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:4888/auth/me", {
          headers: { Authorization: token },
        })
        .then((res) => setUser(res.data))
        .catch(() => logout());
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:4888/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      setLogined(true);
    } catch (error) {
      //console.error("Error logging in", error);
      return false;
    }
  };
  const signup = async (name, email, password) => {
    try {
      const response = await axios.post("http://localhost:4888/auth/signup", {
        name,
        email,
        password,
      });

      // Handle success, maybe redirect to login
      alert(response.data.message);
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ Logined, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
