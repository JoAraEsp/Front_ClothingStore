import React, { useState, useContext } from 'react';
import { AuthContext} from '../contexts/AuthContext';

import '../css/Forms.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setAuthState } = useContext(AuthContext);
  const history = useHistory();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      /*const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password})*/
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (email === registerData.email && password === registerData.password) {
          setAuthState({ // Corregir el nombre del método setAuthData
            isAuthenticated: true,
            authToken: 'my-auth-token',
            user: {
              name: registerData.name,
              email: registerData.email
            }
          });
        } else {
          setError('Credenciales incorrectas');
        }
      } catch (error) { // Cerrar la llave del bloque try
        console.log(error);
      }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;