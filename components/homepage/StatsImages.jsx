import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CloudsLayer } from "./CloudsLayer";
import { usePathname } from "next/navigation";

const StatsImages = ({ currentArea, clickedArea }) => {
  const files_path = process.env.NEXT_PUBLIC_FILES_PATH;
  const path = usePathname();
  const isEnglish = path.includes("en");

  const images = isEnglish
    ? [
        {
          image: "/assets/home/stats/albaha_states/abo-arish.jpg",
          state: "abo-arish",
        },
        {
          image: "/assets/home/stats/albaha_states/ahad.jpg",
          state: "ahad",
        },
        {
          image: "/assets/home/stats/albaha_states/amana.jpg",
          state: "amana",
        },
        {
          image: "/assets/home/stats/albaha_states/arda.jpg",
          state: "arda",
        },
        {
          image: "/assets/home/stats/albaha_states/bish.jpg",
          state: "bish",
        },
        {
          image: "/assets/home/stats/albaha_states/daar.jpg",
          state: "daar",
        },
        {
          image: "/assets/home/stats/albaha_states/damd.jpg",
          state: "damd",
        },
        {
          image: "/assets/home/stats/albaha_states/darb.jpg",
          state: "darb",
        },
        {
          image: "/assets/home/stats/albaha_states/eidaby.jpg",
          state: "eidaby",
        },
        {
          image: "/assets/home/stats/albaha_states/fifa.jpg",
          state: "fifa",
        },
        {
          image: "/assets/home/stats/albaha_states/forsan.jpg",
          state: "forsan",
        },
        {
          image: "/assets/home/stats/albaha_states/harth.jpg",
          state: "harth",
        },
        {
          image: "/assets/home/stats/albaha_states/horob.jpg",
          state: "horob",
        },
        {
          image: "/assets/home/stats/albaha_states/raith.jpg",
          state: "raith",
        },
        {
          image: "/assets/home/stats/albaha_states/sabiaa.jpg",
          state: "sabiaa",
        },
        {
          image: "/assets/home/stats/albaha_states/samta.jpg",
          state: "samta",
        },
        {
          image: "/assets/home/stats/albaha_states/tawal.jpg",
          state: "tawal",
        },
      ]
    : [
        {
          image: "/assets/home/stats/albaha_states/abo-arish.jpg",
          state: "abo-arish",
        },
        {
          image: "/assets/home/stats/albaha_states/ahad.jpg",
          state: "ahad",
        },
        {
          image: "/assets/home/stats/albaha_states/amana.jpg",
          state: "amana",
        },
        {
          image: "/assets/home/stats/albaha_states/arda.jpg",
          state: "arda",
        },
        {
          image: "/assets/home/stats/albaha_states/bish.jpg",
          state: "bish",
        },
        {
          image: "/assets/home/stats/albaha_states/daar.jpg",
          state: "daar",
        },
        {
          image: "/assets/home/stats/albaha_states/damd.jpg",
          state: "damd",
        },
        {
          image: "/assets/home/stats/albaha_states/darb.jpg",
          state: "darb",
        },
        {
          image: "/assets/home/stats/albaha_states/eidaby.jpg",
          state: "eidaby",
        },
        {
          image: "/assets/home/stats/albaha_states/fifa.jpg",
          state: "fifa",
        },
        {
          image: "/assets/home/stats/albaha_states/forsan.jpg",
          state: "forsan",
        },
        {
          image: "/assets/home/stats/albaha_states/harth.jpg",
          state: "harth",
        },
        {
          image: "/assets/home/stats/albaha_states/horob.jpg",
          state: "horob",
        },
        {
          image: "/assets/home/stats/albaha_states/raith.jpg",
          state: "raith",
        },
        {
          image: "/assets/home/stats/albaha_states/sabiaa.jpg",
          state: "sabiaa",
        },
        {
          image: "/assets/home/stats/albaha_states/samta.jpg",
          state: "samta",
        },
        {
          image: "/assets/home/stats/albaha_states/tawal.jpg",
          state: "tawal",
        },
      ];

  return (
    <AnimatePresence>
      <motion.div className="absolute inset-0 flex justify-center items-center bg-[#333]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentArea ? 0 : 1,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          exit={{ opacity: 1, transition: { duration: 0.5 } }}
          className="absolute inset-0">
          <Image
            src={`/assets/home/stats/albaha_states/background.jpg`}
            alt="background"
            fill
            priority
            className="object-cover object-center"
            quality={100}
            unoptimized
          />
        </motion.div>

        {images.map((state) => (
          <motion.div
            key={state.state}
            initial={{ opacity: 0 }}
            animate={{
              opacity:
                state.state === currentArea || state.state === clickedArea
                  ? 1
                  : 0,
              transition: { duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="absolute inset-0">
            <Image
              src={state.image}
              alt={state.state}
              fill
              priority
              className="object-cover object-center"
              quality={100}
              unoptimized
            />
          </motion.div>
        ))}

        <CloudsLayer />
      </motion.div>
    </AnimatePresence>
  );
};

export default StatsImages;
