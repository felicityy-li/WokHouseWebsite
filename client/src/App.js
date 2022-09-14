import "./App.css";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import OrderOnlineSystem from "./pages/OrderOnlineSystem";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu_nonorders" element={<Menu />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/order_online" element={<OrderOnlineSystem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
