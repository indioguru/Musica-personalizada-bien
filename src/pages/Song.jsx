import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WaveSurfer from "wavesurfer.js";
const Song = ({ search }) => {
  const navigate = useNavigate();

  const [isPlaying, setIsPlaying] = useState(false);
  const [waveSurfer, setWaveSurfer] = useState(null);

  useEffect(() => {
    setWaveSurfer(
      WaveSurfer.create({
        container: "#waveform",
        barWidth: 3,
        barRadius: 3,
        responsive: true,
        barHeight: 1.5,
        height: 60,
        hideScrollbar: true,
        waveColor: "#b0a4a463",
        progressColor: "#ffffff",
      })
    );
  }, []);

  useEffect(() => {
    if (waveSurfer) {
      waveSurfer.load("/assets/audio/1.mp3");
    }
  }, [waveSurfer]);

  const togglePlayPause = () => {
    waveSurfer.playPause();
    setIsPlaying(!isPlaying);
  };

  const CancelSound = () => {
    waveSurfer.destroy();
  };

  return (
    <div className="song">
      <div className="song_container">
        <div className="containerAll">
          <div className="content_steps">
            <div className="content_circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <p>PASO 3</p>
          </div>
          <h1>
            ¡Listos! &nbsp;
            <span>
              Tu canción personalizada está lista. Óyela y no olvides
              descargarla.
            </span>
          </h1>
          <audio id="audio" src="/assets/audio/1.mp3"></audio>
          <div className="content_audio">
            {isPlaying ? (
              <img
                src="/assets/pausa.png"
                alt=""
                onClick={() => togglePlayPause()}
              />
            ) : (
              <img
                src="/assets/play.png"
                alt=""
                onClick={() => togglePlayPause()}
              />
            )}
            <div id="waveform"></div>
          </div>
          <div className="content_buttons">
            <div className="content_a">
              <a
                href="/assets/audio/1.mp3"
                download={`Tu canción personalizada - ${search}`}
              >
                Descargar
              </a>
            </div>

            <div className="button_two">
              <button
                onClick={() => {
                  CancelSound();
                  navigate("/");
                }}
              >
                Volver a empezar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
