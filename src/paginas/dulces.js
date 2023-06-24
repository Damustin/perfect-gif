import React, { useEffect, useState } from "react";
import axios from "axios";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Personajes from "../components/personaje";

//public key f2d3332bdb8452014a90369c15ee6eca
//private key 57c04526300e801a0adb69811393eb5b3363b751
//ts 1  157c04526300e801a0adb69811393eb5b3363b751f2d3332bdb8452014a90369c15ee6eca
// hash 79445fdc209e62e8a8f45fb41038da73

// url https://gateway.marvel.com:443/v1/public/characters?apikey=f2d3332bdb8452014a90369c15ee6eca

//row row-cols-1 row-cols-md-2 g-4

const Dulces = () => {
    const [personajes, setPersonajes] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f2d3332bdb8452014a90369c15ee6eca&hash=79445fdc209e62e8a8f45fb41038da73"
        )
        .then((res) => {
          setPersonajes(res.data.data.results); 
          console.log(res.data.data.results)// Actualiza el estado con los datos de la API
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <>
        <Navbar />
  
        <h1 id="marvelh1" className="justify-content-center align-items-center">
          Consumo de Api de Marvel
        </h1>
  
        <div className="row row-cols-1 row-cols-md-2 g-4 p-5">
          {personajes.map((per) => (
            <Personajes 
            key={per.id}
            title={per.name} 
            img={`${per.thumbnail.path}.${per.thumbnail.extension}`}
            desc={per.description}/>
          ))}
        </div>
  
        <Contact />
      </>
    );
  };
  

export default Dulces;
