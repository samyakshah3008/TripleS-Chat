import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, Link } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
