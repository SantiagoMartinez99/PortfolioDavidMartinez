import CitasMedicasImg from "../assets/projectImages/CitasVeterinarioImg.png";
import RedditProject from "../assets/projectImages/RedditProject.png";
import CalorieTracker from "../assets/projectImages/calorieTrackerImg2.png";
import TiendaVirtual from "../assets/projectImages/ecommerceImg.png";
import ControlGastos from "../assets/projectImages/presupuestoImg copy.png";
import weatherProject from "../assets/projectImages/weatherProject.png";
import CoRunning from "../assets/projectImages/coRunning.png";
import Propinas from "../assets/projectImages/propinasImg.png";
import type { Project } from "../types";

export const db: Project[] = [
  {
    id: 0,
    name: "Co Running (Beta)",
    image: CoRunning,
    desc: "Running Colombia ofrece información actualizada sobre running en el país. Con Google Maps API, mostramos rutas y eventos en un mapa interactivo, respaldados por una base de datos actualizada para mantenerte al tanto de las últimas novedades en el mundo runner.",
    descEng:
      "Running Colombia offers updated information about running in the country. With Google Maps API, we show routes and events on an interactive map, backed by an updated database to keep you up to date with the latest news in the running world.",
    techUsed: [
      "React",
      "TS",
      "HTML",
      "Tailwind",
      "DaisyUI",
      "Redux",
      "Firebase",
    ],
    link: "https://corunning.netlify.app",
  },
  {
    id: 1,
    name: "Clon Reddit",
    image: RedditProject,
    desc: "Una página que simula un post de Reddit, permitiendo interacción con comentarios y votos, y ofrece traducción de contenido. Desarrollada con React y JavaScript para la funcionalidad, HTML y CSS para el diseño, ChakraUI para la interfaz, y Django para el backend.",
    descEng:
      "A page that simulates a Reddit post, allowing interaction with comments and votes, and offers content translation. Developed with React and JavaScript for functionality, HTML and CSS for design, ChakraUI for UI, and Django for the backend.",
    techUsed: ["React", "JS", "HTML", "CSS", "ChakraUI", "Django"],
    link: "https://github.com/SantiagoMartinez99/ProyectoReddit",
  },
  {
    id: 2,
    name: "App clima",
    image: weatherProject,
    desc: "Aplicación que consume una API para obtener información climática de una región específica. Desarrollada con React y TypeScript para la funcionalidad, HTML y CSS para el diseño, y Zustand para el manejo del estado.",
    descEng:
      "Application that consumes an API to get weather information for a specific region. Developed with React and TypeScript for functionality, HTML and CSS for layout.",
    techUsed: ["React", "TS", "HTML", "CSS"],
    link: "https://github.com/SantiagoMartinez99/clima-react-typescript",
  },
  {
    id: 3,
    name: "Citas Medicas V2",
    image: CitasMedicasImg,
    desc: "Aplicación web básica para la gestión de citas de mascotas. Utiliza React y JavaScript para la funcionalidad, HTML y Tailwind CSS para el diseño, y Zustand para el manejo del estado.",
    descEng:
      "Basic web application for pet appointment management. It uses React and JavaScript for functionality, HTML and Tailwind CSS for layout, and Zustand for state management.",
    techUsed: ["React", "JS", "HTML", "Tailwind", "Zustand"],
    link: "https://github.com/SantiagoMartinez99/Citas-Veterinario-TS-Zustand",
  },

  {
    id: 4,
    name: "Control de Gastos",
    image: ControlGastos,
    desc: "Aplicación web básica para el control de gastos. Desarrollada con React y JavaScript para la funcionalidad, HTML y CSS para el diseño.",
    descEng:
      "Basic web application for expense control. Developed with React and JavaScript for functionality, HTML and CSS for design.",

    techUsed: ["React", "JS", "HTML", "CSS"],
    link: "https://github.com/SantiagoMartinez99/controlGastos",
  },
  {
    id: 5,
    name: "Calculadora de Propinas",
    image: Propinas,
    desc: "Calculadora de propinas: aplicación web básica para calcular propinas. Desarrollada con React y TypeScript para la funcionalidad, HTML para la estructura, y Tailwind CSS para el diseño.",
    descEng:
      "Tip calculator: basic web application for calculating tips. Developed with React and TypeScript for functionality, HTML for structure, and Tailwind CSS for layout.",
    techUsed: ["React", "TS", "HTML", "Tailwind"],
    link: "https://github.com/SantiagoMartinez99/calculadoraPropinas",
  },
  {
    id: 6,
    name: "Contador de Calorías",
    image: CalorieTracker,
    desc: "Aplicación web básica para el seguimiento y control de actividad física y alimentación y las calorías asociadas.",
    descEng:
      "Basic web application for fitness tracking and calorie tracking and associated calories.",
    techUsed: ["React", "TS", "HTML", "Tailwind"],
    link: "https://github.com/SantiagoMartinez99/CalorieTracker",
  },
  {
    id: 7,
    name: "Tienda Virtual",
    image: TiendaVirtual,
    desc: "E-commerce para una tienda de guitarras. Desarrollado con React y JavaScript para la funcionalidad, HTML para la estructura, y CSS para el diseño.",
    descEng:
      "E-commerce for a guitar store. Developed with React and JavaScript for functionality, HTML for structure, and CSS for design.",
    techUsed: ["React", "JS", "HTML", "CSS"],
    link: "https://github.com/SantiagoMartinez99/TiendaVirtual",
  },
  {
    id: 8,
    name: "Citas Medicas",
    image: CitasMedicasImg,
    desc: "Aplicación web básica para la gestión de citas de mascotas. Desarrollada con React y JavaScript para la funcionalidad, HTML para la estructura, y Tailwind CSS para el diseño.",
    descEng:
      "Basic web application for pet appointment management. Developed with React and JavaScript for functionality, HTML for structure, and Tailwind CSS for design.",
    techUsed: ["React", "JS", "HTML", "Tailwind"],
    link: "https://github.com/SantiagoMartinez99/Citas-Medicas",
  },
];
