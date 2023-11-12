import React from 'react'
import { Link } from 'react-router-dom'
import Inicio from '/Inicio3.jpg'
import google from "/Google.svg";
import phone from "/phone.svg";
import { useForm } from 'react-hook-form';
import './login.scss';
const Login = () => {
    const { register, handleSubmit } = useForm();  
    const onSubmit = async (data) => {
        console.log(data)
      };
  return (
    <main className="login">
      <figure className="leftL">
        <img src={Inicio} alt="dekstop" />
      </figure>
      <section className="info">
        {/* <figure className="logoD">
          <img src={mykitty} alt="Logo" />
        </figure> */}
        <h2>MichiRoutine</h2>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-div">
            <label className="form-label">
              <span>Correo</span>
            </label>
            <input
              type="email"
              className="form-input"
              name="email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="form-div">
            <label className="form-label">
              <span>Contraseña</span>
            </label>
            <input
              type="password"
              className="form-input"
              name="password"
              {...register("password", { required: true })}
            />
          </div>

          <button type="submit" className="button-login">
            Iniciar sesión
          </button>
          <hr className="button-divider" />

          <div className="form-others">
            <img src={google} alt="Google"  />
            <span>o</span>
            <img src={phone} alt="Phone"  />
          </div>

          <span className="form-register">
            ¿No tienes una cuenta?
            <span> </span>
            {/* <Link to="/registro" className="text">
              Regístrate
            </Link> */}
          </span>
        </form>
      </section>
    </main>
  )
}

export default Login