import "./App.css";
import LoginAndRegister from "./pages/login-and-register/login-and-register";
import Home from "./pages/homepage/home";
import Users from "./pages/users/users";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Artists from "./pages/artists/artists";
import Musics from "./pages/musics/musics";
import { useEffect } from "react";
import { getCurrentUser } from "./api/usersApi";
import Page404 from "./pages/404/404";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const CheckUser = async () => {
    const token = localStorage.getItem("token");
    // console.log(token);
    // console.log(location.pathname);
    if (token) {
      try {
        const user = await getCurrentUser();
        // console.log(user);
        if (user.email) {
          if (location.pathname === "/") {
            navigate("/home");
          }
        }
      } catch (err) {
        // console.log(err);
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  };
  useEffect(() => {
    CheckUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginAndRegister />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/musics/:ArtistId" element={<Musics />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
