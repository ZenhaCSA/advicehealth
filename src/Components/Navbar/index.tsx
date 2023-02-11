import React from "react";
import "./index.css";
import Grid from "../Styled/Containers/Grid";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Div from "../Styled/Containers/Div";

const Navbar = () => {
  return (
    <>
      <Div>
        <Grid position="relative" gridTemplateColumns="70% 30%" className="barra">
          <img
            decoding="async"
            src="https://advicehealth.com.br/wp-content/uploads/2021/07/logo_advice_150.png"
            alt="logo"
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
          </div>
        </Grid>
        <body></body>
        <div>
          <Outlet />
        </div>
      </Div>
    </>
  );
};

export default Navbar;
