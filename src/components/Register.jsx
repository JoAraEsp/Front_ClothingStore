import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext'
import '../css/Forms.css';

function Register() {
  const { setRegisterData } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // aquí irá la lógica de registro
      await new Promise(resolve => setTimeout(resolve, 1000));


      if (username === '' || email === '' || password === ''){
        setError('Por favor, completa todos los campos');
        return;
      }

      setRegisterData({
        username: username,
        email: email,
        password: password
      });

      console.log("Usuario registrado:", setRegisterData);

      setUsername("");
      setEmail("");
      setPassword("");
    };
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Registro</h2>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
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
            Registrarse
          </button>
        </form>
      </div>
    );
  }
  
  export default Register;