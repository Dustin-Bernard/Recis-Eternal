import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ShopPage from "./pages/ShopPage";
import SchedulePage from "./pages/SchedulePage";
import AdminComponent from "./components/AdminComponent";

const App = () => {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/news" Component={NewsPage} />
        <Route path="/shop" Component={ShopPage} />
        <Route path="/schedule" Component={SchedulePage} />
        <Route path="/admin" Component={AdminComponent} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
};

export default App;
