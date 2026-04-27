import React, { useEffect, useState } from "react";
import "./Roulette.scss";
import { Wheel } from "react-custom-roulette";
import Icono from "../../assets/imgs/general/icono.png";

const CATEGORY_COLORS = {
  "INVERSIÓN": "#4FA786",
  "INVERSION": "#4FA786",
  "PRESUPUESTO": "#C49A6E",
  "BNA+": "#2E7CB5",
  "AHORRO": "#6BA3D0",
  "SEGURIDAD": "#18435A",
  "CRÉDITO": "#7E72A8",
  "CREDITO": "#7E72A8",
};

const FALLBACK_COLORS = ["#4FA786", "#C49A6E", "#2E7CB5", "#6BA3D0", "#18435A", "#7E72A8"];

function Roulette({ goToNextPage, questions, setTopic, logo }) {
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [text, setText] = useState(true);
  const [rotate, setRotate] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const data = Object.keys(questions).map((key, i) => ({
      option: key,
      style: {
        backgroundColor: CATEGORY_COLORS[key.toUpperCase()] ?? FALLBACK_COLORS[i % FALLBACK_COLORS.length],
        textColor: "white",
      },
    }));
    setData(data);
  }

  function rotateRoulette() {
    setPrizeNumber(calculateProbability());
    setRotate(true);
    setText(false);
  }

  function calculateProbability() {
    return Math.floor(Math.random() * Object.keys(questions).length);
  }

  function stopSpinning() {
    setRotate(false);
    setTopic(data[prizeNumber].option);
    setTimeout(() => {
      goToNextPage();
    }, 2000);
  }

  return (
    <div
      className="roulette-page"
      onMouseDown={() => {
        if (text) rotateRoulette();
      }}
    >
      {text && (
        <p className="roulette-title">Tocá la pantalla para<br/>girar la ruleta</p>
      )}
      <div className="roulette-container">
        {data.length !== 0 && (
          <div className="wheel-wrapper">
            <Wheel
              mustStartSpinning={rotate}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={stopSpinning}
              outerBorderWidth={14}
              outerBorderColor={"#0c2340"}
              radiusLineWidth={0}
              radiusLineColor="#0c2340"
              fontSize={18}
              fontWeight={700}
              spinDuration={0.5}
              pointerProps={{ style: { width: "18%", top: "1dvh", right: "1dvh" } }}
              innerRadius={0}
              innerBorderColor={"#0c2340"}
              innerBorderWidth={0}
              textDistance={62}
            />
            <div className="wheel-center">
              <img src={Icono} alt="" />
            </div>
            <div className="wheel-dots">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className={`dot dot-${i}`} />
              ))}
            </div>
            <div className="wheel-stand">
              <div className="stand-neck" />
              <div className="stand-base" />
            </div>
          </div>
        )}
      </div>
      <div className="footer">
        <img src={logo} alt="Banco Nación" />
      </div>
    </div>
  );
}

export default Roulette;
