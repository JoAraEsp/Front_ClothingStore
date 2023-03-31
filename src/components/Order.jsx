import { useState, useRef, useContext, useEffect } from "react"
import '../css/Order.css'
import React from 'react'

function Order() {
  const [id, setId] = useState('');
  const [estado, setEstado] = useState('');
  const [status, setStatus] = useState([]);
  const [sends, setSends] = useState([]);
  const [bearerToken, setBearerToken] = useState(JSON.parse(localStorage.getItem("user-token")));

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleEstadoChange = (e) => {
    const value = e.target.value
    setEstado(value);
  };

  useEffect(() => {
    fetch('http://localhost:8080/status')
      .then(response => response.json())
      .then(data => setStatus(data.data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/send')
      .then((response) => response.json())
      .then((data) => setSends(data.data));
  }, []);


function handleSubmit(e) {
  e.preventDefault();

  console.log(id)
  console.log(estado)
  fetch('http://localhost:9292/rabbit/delivered', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + bearerToken, 
      },
      body: JSON.stringify({
          status: estado,
          id: id
      })
  })
      .then(res => res.json())
      .catch(err => console.error(err))

}
  

  return (
    <form onSubmit={handleSubmit} method='' id=''>
      <label>
        ID de la orden:
        <select onChange={handleIdChange}>
          <option value="">Seleccionar la orden que se va a modificar</option>
          {
            sends.map((send) =>(
                <option value={parseInt(send.id)} name="status" id="status" >{send.guide}</option>
            ))
          }
        </select>
      </label>
      <label>
        Estado de la orden:
        <select onChange={handleEstadoChange}>
          <option value="">Seleccionar el estado de la orden</option>
          {
            status.map((statu) =>(
                <option value={statu.name} name="status" id="status" >{statu.name}</option>
            ))
          }
        </select>
      </label>
      <button type="submit">Ejecutar</button>
    </form>
  );
}

export default Order;
