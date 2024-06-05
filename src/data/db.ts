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
    name: "Co Running (En construcción)",
    image: CoRunning,
    desc: "Página dedicada a ofrecer información completa y actualizada sobre el running en Colombia.",
    techUsed: ["React", "TS", "HTML", "Tailwind", "DaisyUI"],
    link: "https://github.com/SantiagoMartinez99",
  },
  {
    id: 1,
    name: "Clon Reddit",
    image: RedditProject,
    desc: "Pagina replicando el funcionamiento de un post de Reddit junto a funcionalidad de traducción.",
    techUsed: ["React", "JS", "HTML", "CSS", "ChakraUI", "Django"],
    link: "https://github.com/SantiagoMartinez99/ProyectoReddit",
  },
  {
    id: 2,
    name: "App clima",
    image: weatherProject,
    desc: "Aplicación que consume una API para obtener información climática de una región específica.",
    techUsed: ["React", "TS", "HTML", "CSS", "Zustand"],
    link: "https://github.com/SantiagoMartinez99/clima-react-typescript",
  },
  {
    id: 3,
    name: "Citas Medicas V2",
    image: CitasMedicasImg,
    desc: "Aplicación web básica de manejo de citas de mascotas",
    techUsed: ["React", "JS", "HTML", "Tailwind", "Zustand"],
    link: "https://github.com/SantiagoMartinez99/Citas-Veterinario-TS-Zustand",
  },

  {
    id: 4,
    name: "Control de Gastos",
    image: ControlGastos,
    desc: "Aplicación web básica para el control de gastos básicos",
    techUsed: ["React", "JS", "HTML", "CSS"],
    link: "https://github.com/SantiagoMartinez99/controlGastos",
  },
  {
    id: 5,
    name: "Calculadora de Propinas",
    image: Propinas,
    desc: "Aplicación web básica para calcular propinas",
    techUsed: ["React", "TS", "HTML", "Tailwind"],
    link: "https://github.com/SantiagoMartinez99/calculadoraPropinas",
  },
  {
    id: 6,
    name: "Contador de Calorías",
    image: CalorieTracker,
    desc: "Aplicación web básica para el seguimiento y control de actividad física y alimentación y las calorías asociadas.",
    techUsed: ["React", "TS", "HTML", "Tailwind"],
    link: "https://github.com/SantiagoMartinez99/CalorieTracker",
  },
  {
    id: 7,
    name: "Tienda Virtual",
    image: TiendaVirtual,
    desc: "E commerce para una tienda de guitarras.",
    techUsed: ["React", "JS", "HTML", "CSS"],
    link: "https://github.com/SantiagoMartinez99/TiendaVirtual",
  },
  {
    id: 8,
    name: "Citas Medicas",
    image: CitasMedicasImg,
    desc: "Aplicación web básica de manejo de citas de mascotas",
    techUsed: ["React", "JS", "HTML", "Tailwind"],
    link: "https://github.com/SantiagoMartinez99/Citas-Medicas",
  },
];
