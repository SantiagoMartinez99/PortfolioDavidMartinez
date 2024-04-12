import CitasMedicasImg from "../assets/projectImages/CitasVeterinarioImg.png";
import CalorieTracker from "../assets/projectImages/calorieTrackerImg2.png";
import TiendaVirtual from "../assets/projectImages/ecommerceImg.png";
import ControlGastos from "../assets/projectImages/presupuestoImg copy.png";
import Propinas from "../assets/projectImages/propinasImg.png";
import type { Project } from "../types";

export const db: Project[] = [
  {
    id: 1,
    name: "Citas Medicas",
    image: CitasMedicasImg,
    desc: "Aplicación web básica de manejo de citas de mascotas",
    techUsed: ["JS", "HTML", "CSS"],
    link: "asd",
  },
  {
    id: 2,
    name: "Control de Gastos",
    image: ControlGastos,
    desc: "Aplicación web básica para el control de gastos básicos",
    techUsed: ["JS", "HTML", "CSS"],
    link: "asd",
  },
  {
    id: 3,
    name: "Calculadora de Propinas",
    image: Propinas,
    desc: "Aplicación web básica para calcular propinas",
    techUsed: ["JS", "HTML", "CSS"],
    link: "ad",
  },
  {
    id: 4,
    name: "Contador de Calorías",
    image: CalorieTracker,
    desc: "Aplicación web básica para el seguimiento y control de actividad física y alimentación y las calorías asociadas.",
    techUsed: ["JS", "HTML", "CSS"],
    link: "asd",
  },
  {
    id: 5,
    name: "Tienda Virtual",
    image: TiendaVirtual,
    desc: "E commerce para una tienda de guitarras.",
    techUsed: ["JS", "HTML", "CSS"],
    link: "asd",
  },
  {
    id: 5,
    name: "Citas Medicas V2",
    image: CitasMedicasImg,
    desc: "Aplicación web básica de manejo de citas de mascotas",
    techUsed: ["JS", "HTML", "Tailwind","Zustand"],
    link: "asd",
  },
];  
