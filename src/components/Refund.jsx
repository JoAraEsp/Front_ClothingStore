import { useState, useRef, useContext, useEffect } from "react"
import '../css/Order.css'
import React from 'react'

function Refund() {
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
    fetch('http://localhost:8080/refund')
      .then((response) => response.json())
      .then((data) => setSends(data.data));
  }, []);


function handleSubmit(e) {
  e.preventDefault();

  console.log(id)
  console.log(estado)
  fetch('http://localhost:9292/rabbit/notification', {
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
        ID del reembolso:
        <select onChange={handleIdChange}>
          <option value="">Seleccionar el reembolso</option>
          {
            sends.map((send) =>(
                <>
                <option value={parseInt(send.id)} name="status" id="status" >{send.id} motivo: {send.declaration}</option>
                </>
                
            ))
          }
        </select>
      </label>
      <label>
        Estado del reembolso:
        <select onChange={handleEstadoChange}>
          <option value="">Seleccionar el estado del reembolso</option>
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

export default Refund;