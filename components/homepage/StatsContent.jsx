"use client";

const { StateInfo } = require("./StateInfo");
import { motion } from "framer-motion";

const StatsContent = ({ currentAreaInfo, showContent, data }) => {
  const default_data = data.find((item) => (item.id = 12));
  return currentAreaInfo ? (
    <motion.div
      className="flex items-center justify-between w-full h-fit mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="w-full flex flex-col items-start gap-6 justify-center">
        {currentAreaInfo.sectorIndicators
          .slice(0, Math.ceil(currentAreaInfo.sectorIndicators.length / 2))
          .map((item, index) => (
            <StateInfo key={index} index={index} data={item} />
          ))}
      </div>

      <div className="w-[60%] mr-120 flex flex-col items-start gap-6 justify-start">
        {currentAreaInfo.sectorIndicators
          .slice(Math.ceil(currentAreaInfo.sectorIndicators.length / 2))
          .map((item, index) => (
            <StateInfo index={index} key={index} data={item} />
          ))}
      </div>
    </motion.div>
  ) : (
    showContent && (
      <motion.div
        className="flex items-center justify-between w-full h-fit mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="w-full flex flex-col items-start gap-6 justify-center">
          {default_data.sectorIndicators
            .slice(0, Math.ceil(default_data.sectorIndicators.length / 2))
            .map((item, index) => (
              <StateInfo key={index} index={index} data={item} />
            ))}
        </div>

        <div className="w-[60%] mr-120 flex flex-col items-start gap-6 justify-start">
          {default_data.sectorIndicators
            .slice(Math.ceil(default_data.sectorIndicators.length / 2))
            .map((item, index) => (
              <StateInfo index={index} key={index} data={item} />
            ))}
        </div>
      </motion.div>
    )
  );
};

export default StatsContent;
