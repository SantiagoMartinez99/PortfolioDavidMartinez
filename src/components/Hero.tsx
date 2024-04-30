import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GithubIcon from "../assets/techIcons/icons8-github (1).svg";

function Hero() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="hero min-h-screen  bg-base-200 relative ">
      <div
        className="absolute inset-0 bg-black opacity-10 overflow-hidden bg-repeat-x"
        style={{
          zIndex: "-1",
        }}
      ></div>

      <div className="hero-content flex-col lg:flex-row gap-32 ">
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
          <motion.h2
            className="py-6 text-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.2, 0.7, 1.01],
            }}
          >
            {t("hero.heroDesc")}
          </motion.h2>
          <div className="flex gap-3">
            <motion.a
              className="btn btn-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.3,
                ease: [0, 0.2, 0.7, 1.01],
              }}
              href="https://www.linkedin.com/in/david-santiago-martinez-blanco-dsmb/"
            >
              {t("hero.btnContact")}
            </motion.a>
            <motion.a
              href={
                i18n.language === "es"
                  ? "/src/assets/cv/HojaDeVidaSantiagoMartinez.pdf"
                  : "/src/assets/cv/CvDavidSantiagoMartinez.pdf"
              }
              download
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
            </motion.a>
            <motion.figure
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.6,
                ease: [0, 0.2, 0.7, 1.01],
              }}
            >
              <a href="https://github.com/SantiagoMartinez99">
                <img
                  src={GithubIcon}
                  alt="github Icon"
                  className="hover:cursor-pointer"
                ></img>
              </a>
            </motion.figure>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
