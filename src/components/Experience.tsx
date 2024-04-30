import { useTranslation } from "react-i18next";
import Reveal from "../utils/Reveal";
function Experience() {
  const [t] = useTranslation("global");
  return (
    <section id="experience">
      <h1 className="py-10 text-5xl font-bold text-center ">
        {t("experience.title")}
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
              (2017-2023) <br /> {t("experience.college.title")}
            </time>
            <Reveal direction="horizontal">
              <div className="text-lg font-black">
                Universidad Distrital Francisco José de Caldas
              </div>
            </Reveal>
            <Reveal direction="horizontal">
              <>{t("experience.college.description")}</>
            </Reveal>
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
              <br /> {t("experience.kantar.title")}
            </time>
            <Reveal direction="horizontalReverse">
              <div className="text-lg font-black">
                Millward Brown Colombia S.A.S
              </div>
            </Reveal>
            <Reveal direction="horizontal">
              <>{t("experience.kantar.description")}</>
            </Reveal>
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
              (2022-Actualmente) <br /> {t("experience.exsis.title")}
            </time>
            <Reveal direction="horizontal">
              <div className="text-lg font-black">
                Exsis Software y Soluciones S.A.S
              </div>
            </Reveal>
            <Reveal direction="horizontal">
              <>{t("experience.exsis.description")}</>
            </Reveal>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Experience;
