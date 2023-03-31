import React, { useState } from 'react';
import '../css/Order.css'

function Order() {
  const [id, setId] = useState('');
  const [estado, setEstado] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { id, estado };
    const response = await fetch('/api/actualizar-orden', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID de la orden:
        <input type="text" value={id} onChange={handleIdChange} />
      </label>
      <label>
        Estado de la orden:
        <select value={estado} onChange={handleEstadoChange}>
          <option value="">Seleccionar estado...</option>
          <option value="en proceso">En proceso</option>
          <option value="enviado">Enviado</option>
          <option value="entregado">Entregado</option>
        </select>
      </label>
      <button type="submit">Ejecutar</button>
    </form>
  );
}

export default Order;
