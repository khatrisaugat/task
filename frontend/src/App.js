import "./App.css";
import LoginAndRegister from "./pages/login-and-register/login-and-register";
import Home from "./pages/homepage/home";
import Users from "./pages/users/users";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Artists from "./pages/artists/artists";
import Musics from "./pages/musics/musics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginAndRegister />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/musics/:ArtistId" element={<Musics />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
