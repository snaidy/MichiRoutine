import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import arrowBack from "/arrowback.svg";
import profile from "/gato1.svg";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="profile">
        <div className="profile-up">
          <img
            className="profile-up-img"
            src={arrowBack}
            alt="ArrowBack"
            onClick={() => navigate(-1)}
          />
          <h2>Perfil</h2>
        </div>
        <div className="profile-info">
          <figure className="photo">
            <img src={profile} alt="Photo" />
          </figure>

          <div className="date">
            <h3>Nombre</h3>
            <span className="view">Edita tú perfil</span>
          </div>
        </div>

        <section className="profile-section">
          <hr className="button-divider" />

          <div className="perfil-info">
            <div className="info-item">
              <span className="info-label">Nombre:</span>
              <span className="info-value">Nombre del Usuario</span>
            </div>
            <hr className="button-divider-item" />
            <div className="info-item">
              <span className="info-label">Teléfono:</span>
              <span className="info-value">123-456-7890</span>
            </div>
            <hr className="button-divider-item" />
            <div className="info-item">
              <span className="info-label">Fecha de Nacimiento:</span>
              <span className="info-value">01 de Enero de 1990</span>
            </div>
            <hr className="button-divider-item" />
            <div className="info-item">
              <span className="info-label">Correo:</span>
              <span className="info-value">usuario@example.com</span>
            </div>
            <hr className="button-divider-item" />
            <div className="info-item">
              <span className="info-label">Rol:</span>
              <span className="info-value">Usuario</span>
            </div>
          </div>

          <hr className="button-divider" />
        </section>
        <div className="nav-mobile-profile">
          <Navbar />
        </div>
      </main>
    </>
  );
};

export default Profile;
