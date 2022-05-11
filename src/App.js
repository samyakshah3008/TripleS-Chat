import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, Link } from "react-router-dom";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
