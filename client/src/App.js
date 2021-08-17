import React from "react";
import "./App.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


import { BrowserRouter as Router } from "react-router-dom";

import Home from './app/layout/Home';


function App() {

  return (
    <div>
   
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
