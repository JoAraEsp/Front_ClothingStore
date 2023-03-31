import { useState, useRef, useContext } from "react"
import { AuthContext } from '../contexts/AuthContext'
import '../css/Forms.css';

function Register() {
    const form = useRef(null);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [card, setCard] = useState('');
    const [status, setStatus] = useState();
    const [bearerToken, setBearerToken] = useState();
    const [data, setData] = useState();
  
    function handleSubmit(e) {
      e.preventDefault();

      const formData = new FormData(form.current);

      fetch('http://localhost:9292/auth/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: formData.get('name'),
              cardNumber: formData.get('cardNumber'),
              email: formData.get('email'),
              password: formData.get('password'),
          })
      })
      .then ((responseHttp) => {
          setBearerToken(data.jwttoken)
          setStatus(responseHttp.status)
          })

  }

  function userCreated() {
    localStorage.setItem("user-token", JSON.stringify(bearerToken))
    Swal.fire({
        position: 'bottom',
        title: 'Usuario creado correctamente',
        color: '#fff',
        width: '800px',
        background: '#166cc2',
        showConfirmButton: false,
        timer: 2500
    })

    navigate('/')

}

function userError() {
  Swal.fire({
      position: 'bottom',
      title: 'Datos incorrectos o ya registrados',
      color: '#fff',
      width: '800px',
      background: '#D0342C',
      showConfirmButton: false,
      timer: 2500
  })


}
  
    return (
      <div className="container">
        { status == 201 && userCreated()  }
          { status == 400 && userError() }
        <form onSubmit={handleSubmit} ref={form} id="form" method="">
          <h2>Registro</h2>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Numero de tarjeta</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name='cardNumber'
              onChange={(event) => setCard(event.target.value)}
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