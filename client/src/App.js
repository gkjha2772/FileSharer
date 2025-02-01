import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./service/AuthContext.js";
import Login from "./Component/Login.js";
import Dashboard from "./Component/Dashboard.js";
import "./App.css";
import SignUp from "./Component/Sighup.js";
import Navbar from "./Component/Navbar.js";

const PrivateRoute = ({ element }) => {
  const { user } = useContext(AuthContext); // Use useContext here
  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />{" "}
            {/* Redirect to login */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<Dashboard />} />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
