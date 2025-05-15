"use client";
import { useState } from "react";

const areas = [
  { state: "abo-arish", x: 420, y: 380, w: 100, h: 100 },
  { state: "ahad", x: 400, y: 480, w: 150, h: 80 },
  { state: "amana", x: 300, y: 375, w: 100, h: 100 },
  { state: "arda", x: 520, y: 350, w: 100, h: 100 },
  { state: "bish", x: 220, y: 180, w: 200, h: 80 },
  { state: "daar", x: 550, y: 160, w: 100, h: 150 },
  { state: "damd", x: 420, y: 320, w: 60, h: 60 },
  { state: "darb", x: 130, y: 30, w: 150, h: 180 },
  { state: "eidaby", x: 470, y: 250, w: 80, h: 80 },
  { state: "fifa", x: 550, y: 310, w: 30, h: 30 },
  { state: "forsan", x: -100, y: 400, w: 300, h: 200 },
  { state: "harth", x: 540, y: 460, w: 100, h: 100 },
  { state: "horob", x: 420, y: 180, w: 100, h: 100 },
  { state: "raith", x: 400, y: 80, w: 100, h: 100 },
  { state: "sabiaa", x: 270, y: 270, w: 150, h: 100 },
  { state: "samta", x: 400, y: 560, w: 150, h: 50 },
  { state: "tawal", x: 420, y: 600, w: 100, h: 60 },
];

export const Mapping = ({
  setCurrentArea,
  showContent,
  setClickedArea,
  currentArea,
  data,
}) => {
  const [temp, setTemp] = useState(null);

  return (
    <div className="w-[550px] h-full absolute left-[50%] transform -translate-x-1/2 -top-0 text-sm font-obld">
      {showContent && (
        <div className="relative">
          {areas.map(({ state, x, y, w, h }) => (
            <div
              key={state}
              onClick={() => {
                setTemp(null);
                setClickedArea(currentArea);
                setTemp(currentArea);
              }}
              onMouseEnter={() => {
                setCurrentArea(state);
                setClickedArea(null);
              }}
              onMouseLeave={() => {
                setCurrentArea(null);
                setClickedArea(temp);
              }}
              className={`absolute flexify rounded-2xl ${state} cursor-pointer`}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                width: `${w}px`,
                height: `${h}px`,
              }}></div>
          ))}
        </div>
      )}
    </div>
  );
};
