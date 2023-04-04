import React from 'react';
import '../css/CatalogoRopa.css';
import { useState, useEffect } from 'react'




  

function CatalogoRopa() {
  const [cloths, setCloths] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/cloth')
      .then((response) => response.json())
      .then((data) => setCloths(data.data));
  }, []);


  return (
    <div className="catalogo-ropa">
      {cloths.map((cloth) => (
        <div key={cloth.id} className="producto">
          <img src={cloth.url} alt={cloth.name} />
          <div className="descripcion">
            <h3>{cloth.name}</h3>
            <p className="precio">${cloth.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatalogoRopa;
