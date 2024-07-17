import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Vote from "./pages/Vote";
import Confirmvote from "./pages/Confirmvote";
import Sucessful from "./pages/Sucessful";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/confirmvote" element={<Confirmvote />} />
        <Route path="/sucessful" element={<Sucessful />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
