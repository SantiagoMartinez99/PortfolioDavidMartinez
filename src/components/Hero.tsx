import React from "react";
import { useTranslation } from "react-i18next";

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
        <img
          className="max-w-sm rounded-full shadow-2xl"
          src="src\assets\imagenSantiago.jpg"
          alt="profileImg"
        />
        <section>
          <h1 className="text-5xl font-bold">{t("hero.heroTitle")}</h1>
          <p className="py-6">{t("hero.heroDesc")}</p>
          <div className="flex gap-3">
            <button className="btn btn-primary">{t("hero.btnContact")}</button>
            <button className="btn btn-primary">
              {t("hero.btnDownloadCV")}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
