import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home_container containerAll">
        <div className="content_info">
          <h1>CANCIÓN DE CUMPLEAÑOS</h1>
          <p>Crea tu canción personalizada de Canti Rondas.</p>
        </div>
        <div className="content_buttons">
          <div className="button_one">
            <button onClick={() => navigate("/nombre")}>Empezar</button>
          </div>

          <div className="button_two">
            <button>Lorem Ipsum</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
