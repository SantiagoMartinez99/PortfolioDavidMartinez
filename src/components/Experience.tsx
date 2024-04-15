import React from "react";

function Experience() {
  return (
    <>
      <section id="experience">
        <h1 className="py-10 text-5xl font-bold text-center ">
          {" "}
          Mi Experiencia
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-32">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">
                {" "}
                (2017-2023) <br /> Ingeniero de Sistemas
              </time>
              <div className="text-lg font-black">
                Universidad Distrital Francisco José de Caldas
              </div>
              Ingeniero de Sistemas graduado de la Universidad Distrital, con
              sólida formación en ciencias básicas, humanísticas y técnicas.
              Apasionado por la tecnología y comprometido con el mejoramiento
              continuo. Enfocado en areas como Ingeniería de Software, Ciencias
              de la computación, gestión informática y redes de la comunicación.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">
                (2021)
                <br /> Scripting Assistant
              </time>
              <div className="text-lg font-black">
                Millward Brown Colombia S.A.S
              </div>
              Colaborador activo en el diseño y realización de encuestas,
              seguido de un análisis exhaustivo de los datos obtenidos. Destreza
              en el uso del software IBM SPSS para llevar a cabo un análisis
              estadístico efectivo, contribuyendo así al desarrollo y ejecución
              exitosa de proyectos.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">
                (2022-Actualmente) <br /> Desarrollador Front end Jr
              </time>
              <div className="text-lg font-black">
                Exsis Software y Soluciones S.A.S
              </div>
              Me he involucrado activamente en el diseño y mejora de
              aplicaciones utilizando React, colaborando en la implementación de
              un almacén de datos para centralizar la información empresarial
              mediante el uso de Angular. También he participado en el
              desarrollo de aplicaciones para la generación de contratos
              inteligentes y manejo de transacciones inmobiliarias a través de
              blockchain, utilizando React y Solidity.
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Experience;
