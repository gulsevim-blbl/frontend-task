import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Settings from "./pages/Settings";
import Subscription from "./pages/Subsrciption";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Graphic from "./pages/Graphic";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="bg-custom text-white min-h-screen">
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/graphic" element={<><Navbar /><Graphic /></>} />
          <Route path="/settings" element={<><Navbar /><Settings /></>} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
