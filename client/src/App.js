import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { AuthProvider } from "./Context/AuthContext";
import Signup from "./Pages/Signup";


function App() {
  return (
    <div className="App">
      <AuthProvider>

      <Router>
        <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
