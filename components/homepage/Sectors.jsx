"use client";

import LineTitle from "@/UI/LineTitle";
import Image from "next/image";
import { useState } from "react";
import Diamonds from "./Diamonds";
import DiamondInfo from "./DiamondsInof";
import SectoresBackground from "./SectoresBackground";

function Sectors({ data }) {
  const [activateAnimation, setActivateAnimation] = useState(false);
  const [selectedDiamond, setSelectedDiamond] = useState(null);

  const handleReset = () => {
    setSelectedDiamond(null);
  };

  return (
    <section className="snap-start  text-white relative flex flex-col gap-0 h-screen s-10">
      <div className="relative w-full h-full z-30 bg-black/50">
        <LineTitle className={`m-24 mt-30 mx-50 mb-0 z-30`}>
          القطاعات التنموية
        </LineTitle>
        {selectedDiamond && (
          <div
            onClick={handleReset}
            className="absolute left-30 top-30 cursor-pointer z-10">
            عودة
          </div>
        )}

        <Diamonds
          data={data}
          activateAnimation={activateAnimation}
          selectedDiamond={selectedDiamond}
          setSelectedDiamond={setSelectedDiamond}
          setActivateAnimation={setActivateAnimation}
        />
        <DiamondInfo
          activateAnimation={activateAnimation}
          selectedDiamond={selectedDiamond}
        />
      </div>
      <SectoresBackground
        data={data}
        selectedDiamond={selectedDiamond}
        activateAnimation={activateAnimation}
      />
    </section>
  );
}

const ZigZag = () => {
  return (
    <div className="absolute w-full">
      <Image
        src={`/assets/home/sectors/zigzag.svg`}
        alt="zig zag"
        width={180}
        height={100}
        className="w-full bg-repeat scale-90"
      />
    </div>
  );
};

export default Sectors;
