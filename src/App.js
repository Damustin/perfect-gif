

import React from "react";


import Dulces from "./paginas/dulces";
import Inicio from "./paginas/inicio";
import Formulario from "./paginas/contact";
import Payment from "./paginas/payment";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";




  export default class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        
          <Router>
            
            <Routes>
              <Route path="/dulces" element={<Dulces />} />
              <Route path="/" element={<Inicio />} />
              <Route path="/secos" element={<Dulces />} />
              <Route path="/navideños" element={<Dulces />} />
              <Route path="/masvendido" element={<Dulces />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/flores" element={<Dulces />} />
              <Route path="/enamorados" element={<Dulces />} />
              <Route path="/gourmet" element={<Dulces />} />
              <Route path="/about" element={<Dulces />} />
              <Route path="/contact" element={<Formulario/>}/>
            </Routes>
        
          </Router>
        
      );
    }
  }
  


