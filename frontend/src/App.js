import "./App.css";
import LoginAndRegister from "./pages/login-and-register/login-and-register";
import Home from "./pages/homepage/home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginAndRegister />} />
          <Route path="/admin" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
