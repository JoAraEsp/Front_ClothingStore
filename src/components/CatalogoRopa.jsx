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

  const productos = [
    {
      id: 1,
      nombre: 'Camiseta',
      descripcion: 'Camiseta de algodón',
      precio: 89,
      imagen: 'https://pixabay.com/get/g9210ff1caa6ce9d09263023046181a48ea92ccff6ed33585db721156fd6ea297779710f57c8da6c6f95c7b12ada13e0c859736a21cf9935b127ecb5398844ab189a14bd184a13b4dadac8f82d1edbcd5_1280.png',
    },
    {
      id: 2,
      nombre: 'Pantalón',
      descripcion: 'Pantalón de mezclilla',
      precio: 199,
      imagen: 'https://pixabay.com/get/gad2888ed6bd65478fec505c2106239c1eaf836b2bc8756c4401c3f12f11c6d852771348ce53cb0e69b8feb94b73335ec7fb0e5d09a09d44d24e1537ead1ea2c9eaecad73e72990431455ed57f9039a32_1280.png',
    },
    {
      id: 3,
      nombre: 'Vestido',
      descripcion: 'Vestido de seda',
      precio: 349,
      imagen: 'https://pixabay.com/get/g9b2d0dd6fdc8e1b13c46faab126b19327591ec68ffaeca9a80e5b79e454a5be15c2334034c49cf89304ce8700792ef581bb6378a49d8affe20fcd616836ccc0f0e8299c8c7dd1ce79d211202d939f656_1280.png',
    },
    {
      id: 4,
      nombre: 'Chamarra',
      descripcion: 'Chamarra de piel',
      precio: 179,
      imagen: 'https://pixabay.com/get/g279a303c364957831928e289ce267af14ae6a393af4bb6b45fe036fe703e363f525e0815a9559732359b35bebefce508b42f7a29f5664e4cf5681da5bab6d4b3510f1bb609e56484588515590fd1378a_1280.png',
    },
    {
      id: 5,
      nombre: 'Zapatos',
      descripcion: 'Zapatos de piel',
      precio: 119,
      imagen: 'https://pixabay.com/get/gf9c98f9476d318beb286747682a450bfb7bf2b3b24c9e447e568e9f1cfb99aea34e2db7e595a6ddab2c4f601127f14ee312c3cb57828319001e9b64364339d5ff12f4f7a15eb5889b0f918324ba0e881_1280.png',
    },
    {
      id: 6,
      nombre: 'Blusa',
      descripcion: 'Blusa de algodón',
      precio: 89,
      imagen: 'https://pixabay.com/get/g6c81318093c49b85308aace1aafb7a1c12f757f89a1f676c15fe33d9c1b2e15739cc2a4b48308a03858ad29053712ef24ac954c67f1b195774c6ad12384bfc8ee5c05e87b5a1b282791be413fcb7b132_1280.png',
    },
  ];

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
