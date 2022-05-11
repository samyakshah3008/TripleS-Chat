import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
