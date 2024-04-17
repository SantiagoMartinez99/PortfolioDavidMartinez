import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Hero() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="hero min-h-screen  bg-base-200 relative bg-transparent">
      <div
        className="absolute inset-0 bg-black opacity-10 overflow-hidden bg-repeat-x"
        style={{
          zIndex: "-1",
          // backgroundImage:
          //   "url(https://i.pinimg.com/originals/88/66/b2/8866b25a23afb5185612095ffc57eca3.gif)",
        }}
      ></div>
      <div className="hero-content flex-col lg:flex-row gap-32">
        <motion.img
          className="max-w-sm rounded-full shadow-2xl"
          src="src\assets\imagenSantiago.jpg"
          alt="profileImg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0, 0.2, 0.7, 1.01],
          }}
        />
        <section>
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.2, 0.7, 1.01],
            }}
          >
            {t("hero.heroTitle")}
          </motion.h1>
          <motion.p
            className="py-6 text-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.2, 0.7, 1.01],
            }}
          >
            {t("hero.heroDesc")}
          </motion.p>
          <div className="flex gap-3">
            <motion.button
              className="btn btn-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.3,
                ease: [0, 0.2, 0.7, 1.01],
              }}
            >
              {t("hero.btnContact")}
            </motion.button>
            <motion.button
              className="btn btn-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                ease: [0, 0.2, 0.7, 1.01],
              }}
            >
              {t("hero.btnDownloadCV")}
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
