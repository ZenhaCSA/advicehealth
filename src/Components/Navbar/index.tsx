import React from "react";
import "./index.css";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <header className="barra">
          <img
            decoding="async"
            src="https://advicehealth.com.br/wp-content/uploads/2021/07/logo_advice_150.png"
            alt="logo"
            className="logoAH"
          />
          <div className="linksHome">
            <Link
              to="/"
              className="linksAba"
            >
              <p>Home</p>
            </Link>
            <Link
              to="/Agendamentos"
              className="linksAba"
            >
              <p>Agendamentos</p>
            </Link>
            <Link
              to="/Consultas"
              className="linksAba"
            >
              <p>Consultas</p>
            </Link>
            {/* <i class="icon-search"></i> */}
          </div>
        </header>
        <body></body>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Navbar;
