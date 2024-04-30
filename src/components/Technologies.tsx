import { dbTech } from "../data/dbTech";
import Reveal from "../utils/Reveal";
import { useTranslation } from "react-i18next";

function Technologies() {
  const [t] = useTranslation("global");

  return (
    <section id="technologies">
      <Reveal>
        <h1 className="my-14 text-5xl font-bold text-center">
          {t("technologies.title")}
        </h1>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap justify-evenly gap-5 items-center md:mx-32 my-10">
          {dbTech.map((tech, index) => (
            <figure key={index}>
              <img
                src={tech?.image}
                alt={tech?.image}
                className="h-12 w-12 object-cover"
              ></img>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Technologies;
