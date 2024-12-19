import React, { useEffect, useState } from "react";
import "./Roulette.scss";
import { Wheel } from "react-custom-roulette";

function Roulette({ goToNextPage, questions, setTopic, logo }) {
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [text, setText] = useState(true);
  const [rotate, setRotate] = useState(false);
  const [data, setData] = useState([]);

  const colors = [
    "#ef476f",
    "#06d6a0",
    "#fb8500",
    "#118ab2",
    "#9381ff",
    "#a5be00",
  ];

  //Bloquear click derecho
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let i = 0;
    let data = [];
    Object.keys(questions).map((key) => {
      data.push({
        option: key,
        style: { backgroundColor: colors[i], textColor: "white" },
      });
      i++;
    });
    setData(data);
    console.log(data);
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
    }, 3000);
  }

  return (
    <div
      className="roulette-page"
      onMouseDown={() => {
        if (text) rotateRoulette();
      }}
    >
      <div className="top-section">
        <img src={logo} alt="logo" />
      </div>
      <div className="roulette-container">
        {data.length !== 0 && (
          <div>
            <Wheel
              mustStartSpinning={rotate}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={() => {
                stopSpinning();
              }}
              outerBorderWidth={20}
              outerBorderColor={"#0062AD"}
              radiusLineWidth={0}
              radiusLineColor="white"
              fontSize={18}
              spinDuration={0.5}
              pointerProps={{
                style: { width: "20%", top: "1dvh", right: "1dvh" },
              }}
              innerRadius={0}
              innerBorderColor={"#0062AD"}
              innerBorderWidth={40}
              textDistance={55}
            />
            {text && (
              <p className="text">Tocá la pantalla para girar la ruleta</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Roulette;
