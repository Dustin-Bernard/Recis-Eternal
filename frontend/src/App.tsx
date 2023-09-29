import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";



const App = () => {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/admin" Component={AdminPage}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/Register" Component={RegisterPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
};

export default App;
