import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ShopPage from "./pages/ShopPage";
import SchedulePage from "./pages/SchedulePage";
import AdminPage from "./pages/AdminPage.tsx";
import PostPage from "./pages/PostPage";
import TournamentPage from "./pages/TournamentPage.tsx";

const App = () => {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/news" Component={NewsPage} />
        <Route path="/merch" Component={ShopPage} />
        <Route path="/schedule" Component={SchedulePage} />
        <Route path="/eternal cup" Component={TournamentPage} />
        <Route path="/admin" Component={AdminPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/post/:id" Component={PostPage} />
      </Routes>
    </div>
  );
};

export default App;
