import React from "react";
// import logo from '../src/a.png';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src='https://advicehealth.com.br/wp-content/uploads/2021/07/logo_advice_150.png' className="App-logo" alt="logo" /> */}
        <img
          decoding="async"
          src="https://advicehealth.com.br/wp-content/uploads/2021/07/logo_advice_150.png"
          alt="logo"
          className="logoAH"
        />
        <div className="linksHome">
          <a className="linksAba" href="#">Home</a>
          <a className="linksAba" href="#">Agendamentos</a>
          <a className="linksAba" href="#">Consultas</a>
          {/* <i class="icon-search"></i> */}
        </div>
      </header>
      <body></body>
    </div>
  );
}

export default App;
