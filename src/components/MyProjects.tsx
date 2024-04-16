import React, { useEffect, useState } from "react";
import { db } from "../data/db";
import { dbTech } from "../data/dbTech";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";

function MyProjects() {
  const [t, i18n] = useTranslation("global");
  const [data] = useState(db);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;
  const indexOfLastProject = currentPage * propertiesPerPage;
  const indexOfFirstProject = indexOfLastProject - propertiesPerPage;
  const currentProperties = data.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const section = document.getElementById("my-projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const prevPage = () => {
    const newPage = currentPage - 1;
    if (newPage >= 1) {
      setCurrentPage(newPage);
      paginate(newPage);
    }
  };

  const nextPage = () => {
    const newPage = currentPage + 1;
    if (newPage <= Math.ceil(data.length / propertiesPerPage)) {
      setCurrentPage(newPage);
      paginate(newPage);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / propertiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section id="my-projects">
      <h1 className="py-10 text-5xl font-bold text-center"> Mis proyectos</h1>

      <span className="flex justify-center md:justify-end md:mx-72 px-5 ">
        <div className="join">
          <button className="join-item btn" onClick={prevPage}>
            {" "}
            &lt; Previous{" "}
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className="join-item btn"
            >
              {number}
            </button>
          ))}
          <button className="join-item btn" onClick={nextPage}>
            {" "}
            Next &gt;
          </button>
        </div>
      </span>

      <section className="flex flex-col  px-5 py-5 items-center bg-base-100">
        {currentProperties.map((project) => (
          <div
            key={project.id}
            className="card lg:card-side shadow-2xl  md:mx-72 mx-5 my-5 flex flex-col transition ease-in-out delay-100 hover:scale-110 "
          >
            <figure className="lg:w-1/2 w-full h-full lg:h-1/2">
              <img src={project.image} alt="Album" />
            </figure>
            <div className="card-body flex lg:w-1/2 w-full ">
              <h2 className="card-title text-2xl font-bold">{project.name}</h2>
              <p className="text-xl">{project.desc}</p>
              <h4 className="text-xl font-bold">
                {t("myProjects.technologies")}
              </h4>

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
                <a className="btn btn-primary" href={project?.link}>
                  {t("myProjects.btnGoToProject")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default MyProjects;
