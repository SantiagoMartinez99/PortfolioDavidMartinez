import { useState } from "react";
import { db } from "../data/db";
import { dbTech } from "../data/dbTech";

function MyProjects() {
  // Destructure the state value from useState
  const [data] = useState(db);

  return (
    <section id="my-projects">
      <h1 className="py-10 text-5xl font-bold text-center"> Mis proyectos</h1>

      <section className="flex flex-col  px-5 py-5 items-center bg-base-100">
        {data.map((project) => (
          <div
            key={project.id}
            className="card lg:card-side shadow-2xl  md:mx-32 mx-5 my-5 flex flex-col transition ease-in-out delay-100 hover:scale-110 "
          >
            <figure className="lg:w-1/2 w-full h-full lg:h-1/2">
              <img src={project.image} alt="Album" />
            </figure>
            <div className="card-body flex lg:w-1/2 w-full ">
              <h2 className="card-title ">{project.name}</h2>
              <p>{project.desc}</p>
              <div className="flex gap-2">
                {project.techUsed.map((techName) => {
                  const tech = dbTech.find((tech) => tech.name === techName);
                  return (
                    <a href={tech?.image} key={techName}>
                      <img
                        src={tech?.image}
                        alt={tech?.name}
                        className="h-12 w-12 object-cover"
                      ></img>
                    </a>
                  );
                })}
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Ir al proyecto</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default MyProjects;
