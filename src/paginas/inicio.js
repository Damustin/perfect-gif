import React from "react";
import Banner from "../components/banner"
import Categorias from "../components/categorias";
import Navbar from "../components/navbar";
import Contact from "../components/contact";

export default class Inicio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <div className="row row-cols-1 row-cols-md-2 g-4 p-5 mb-5">


          <Categorias categoria="Enamorados" srcimg="/enamorados.jpeg" link="/enamorados" />


          <Categorias categoria="Flores Naturales" srcimg="/FloresNaturales.jpeg" link="/flores" />


          <Categorias categoria="Los Mas Elegidos" srcimg="/lomaselegido.jpeg" link="/masvendido" />


          <Categorias categoria="Dulces" srcimg="/dulces.jpeg" link="/dulces" />




          <Categorias categoria="Flores Secas" srcimg="/floressecas.jpeg" link="/secos" />


          <Categorias categoria="Gourmet" srcimg="/gourmet.jpeg" link="/gourmet" />


          <Categorias categoria="Navideños" srcimg="/Navideños.jpeg" link="/navideños" />


        </div>
        <Contact />
      </>
    );
  }
}

