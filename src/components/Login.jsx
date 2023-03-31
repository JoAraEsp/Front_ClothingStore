import React, { useState, useContext } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom'
import { AuthContext} from '../contexts/AuthContext';
import Swal from 'sweetalert2'

import '../css/Forms.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bearerToken, setBearerToken] = useState()
  const [user, setUser] = useState();
  const [data, setData] = useState();

  const login = (e) => {
    e.preventDefault();

    fetch('http://localhost:9292/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then(res => res.json())
      .then(data => {
        setBearerToken(data.token)
        setData(data)
      })
      .catch(err => { UserIncorrect() })

  }

  const GetUser = () => {
    fetch(`http://localhost:8080/user/email/${email}`)
      .then(res => res.json())
      .then(data => {
        setUser(data.data)
      })
  }

  const UserCorrect = () => {
    
    localStorage.setItem("user-token", JSON.stringify(bearerToken))
    localStorage.setItem("user-info", JSON.stringify(user))

    window.location.reload(true);

    return (
      < Navigate to="/" replace={true} />
    )

  }

  const UserIncorrect = () => {
    Swal.fire({
      position: 'bottom',
      title: 'Usuario incorrecto',
      color: '#fff',
      width: '800px',
      background: '#D0342C',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className="container">
        {data &&
        GetUser()}

        {user && UserCorrect()}
      <form onSubmit={login}>
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