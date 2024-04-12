import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen  bg-base-200 relative bg-transparent">
      <div
        className="absolute inset-0 bg-black opacity-10 overflow-hidden bg-repeat-x"
        style={{
          zIndex: "-1",
          backgroundImage:
            "url(https://i.pinimg.com/originals/88/66/b2/8866b25a23afb5185612095ffc57eca3.gif)",
        }}
      ></div>
      <div className="hero-content flex-col lg:flex-row gap-32">
        <img
          src="src\assets\imagenSantiago.jpg"
          className="max-w-sm rounded-full shadow-2xl"
        />
        <section>
          <h1 className="text-5xl font-bold">
            ¡👋 Hola, soy Santiago Martinez!
          </h1>
          <p className="py-6">
            Soy Ingeniero de Sistemas enfocado en Desarrollo Web, principalmente
            con React, tambien uso Angular, y manejo JS, TS, Firebase, Django y
            otras tecnologias
          </p>
          <div className="flex gap-3">
            <button className="btn btn-primary">Contáctame aquí</button>
            <button className="btn btn-primary">Descargar CV</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
