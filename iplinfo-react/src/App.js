import React from 'react';
import './App.css';
import ParamsExample from './Dashboard/dashboard.js';

function App() {
  return (
    <div>
      <header >
      <div >
        <nav className="nnavbar navbar-dark bg-primary text-center">
          {/*  eslint-disable-next-line */}
          <a className="navbar-brand text-center" href="#"><h3> CricPedia <br /> Wiki for 2008-2019 IPL T20 Matches </h3></a>
        </nav>
      </div>
      </header>

      <ParamsExample />
    </div>
  );
}

export default App;
