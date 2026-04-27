import React, { useEffect } from "react";
import "./End.scss";
import UnoDeTres from "./../../assets/imgs/end/1-de-3-bien.svg";
import DosDeTres from "./../../assets/imgs/end/2-de-3-bien.svg";
import TresDeTres from "./../../assets/imgs/end/3-de-3-bien.svg";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const titleByScore = {
  0: "¡Gracias por participar!",
  1: "¡Bien!",
  2: "¡Muy bien!",
  3: "¡Excelente!",
};

const imageByScore = {
  1: UnoDeTres,
  2: DosDeTres,
  3: TresDeTres,
};

function End({ correctQuestions, totalQuestions, goToNextPage, logo }) {
  const [width, height] = useWindowSize();

  useEffect(() => {
    const t = setTimeout(() => {
      goToNextPage();
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  const title = titleByScore[correctQuestions] ?? "¡Gracias por participar!";
  const image = imageByScore[correctQuestions];
  const showConfetti = correctQuestions / totalQuestions >= 2 / 3;

  return (
    <div className="end-page">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          colors={[
            "#8F8ABD",
            "#F06C29",
            "#007B5F",
            "#507385",
            "#D4AC87",
            "#65C9D8",
          ]}
          numberOfPieces={350}
        />
      )}

      <div className="center">
        <h1>{title}</h1>
        <div className="score-pill">
          Respondiste {correctQuestions}/{totalQuestions} preguntas
          <br />
          correctamente
        </div>

        <div className="final-img-container">
          {image ? (
            <img
              className={`final-img zoom-in score-${correctQuestions}`}
              src={image}
              alt=""
            />
          ) : (
            <p className="final-text">
              Seguí
              <br />
              aprendiendo
              <br />
              sobre educación
              <br />
              financiera
            </p>
          )}
        </div>
      </div>

      <div className="footer">
        <img src={logo} alt="Banco Nación" />
      </div>
    </div>
  );
}

export default End;
