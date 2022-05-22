import { Outlet, Link } from "react-router-dom";
import "../styles/Header.css";
import Button from "@mui/material/Button";
const Layout = () => {
  return (
    <>
      <nav>
      <ul className="links">
        <Button const path="/" variant="outlined" color="error">
          <Link to="/">Главная</Link>
        </Button>
      </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
