import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";
import Button from "@mui/material/Button";

function Header2() {
  const [header] = useState("header");

  return (
    <header className={header}>
      <div className="logo" src="/src/images/logo@2x.png">
        logo
      </div>
      <ul className="links">
        <Button const path="/contact" variant="outlined" color="error">
          <Link to="/contact">Admin</Link>
        </Button>
      </ul>
    </header>
  );
}

export default Header2;
