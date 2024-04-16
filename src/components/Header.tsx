import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event: MouseEvent) {
      event.preventDefault();

      const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute(
        "href"
      );
      const targetElement = document.querySelector(targetId!);
      if (targetElement) {
        const offsetTop = (targetElement as HTMLElement).offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", scrollToSection);
      });
    };
  }, []);

  return (
    <header>
      <div className="navbar bg-base-100 gap-3 shadow-md flex justify-between items-center fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#my-projects">{t("header.myProjects")}</a>
              </li>
              <li>
                <a href="#experience">{t("header.technologies")}</a>
              </li>
              <li>
                <a href="#technologies">{t("header.experience")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 font-bold text-xl">
            <li>
              <a href="#my-projects">{t("header.myProjects")}</a>
            </li>
            <li>
              <a href="#technologies">{t("header.technologies")}</a>
            </li>
            <li>
              <a href="#experience">{t("header.experience")}</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </header>
  );
}

export default Header;
