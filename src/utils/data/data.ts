import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const data = {
  header: {
    title: "manuel fajardo",
    description: "web developer",
  },
  profile: {
    title: "Perfil",
    content:
      "Estudiante de 9no ciclo de Ingeniería de Software deseoso de continuar creciendo en logros, conocimientos y experiencias, constantemente actualizándose en tecnologías centradas por ahora en el mundo del desarrollo.",
  },
  contact: {
    title: "Contacto",
    rows: [
      {
        key: "r1",
        //icon: faEnvelope,
        icon: faEnvelope,
        content: "m.fajardo.1098@gmail.com",
        url: undefined,
      },
      {
        key: "r2",
        icon: faPhoneAlt,
        content: "+51938263506",
        url: undefined,
      },
      {
        key: "r3",
        icon: faMapMarkerAlt,
        content: "Comas, Lima, Perú",
        url: undefined,
      },
      {
        key: "r4",
        icon: faGithubSquare,
        content: "Xiza73",
        url: "https://github.com/Xiza73",
      },
      {
        key: "r5",
        icon: faLinkedin,
        content: "m-fajardo-as",
        url: "https://www.linkedin.com/in/m-fajardo-as/",
      },
    ],
  },
  abilities: {
    title: "Competencias",
    rows: [
      {
        key: "a1",
        content: "Back-end Dev",
        icons: [
          "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
          "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
        ],
        dots: 4,
      },
      {
        key: "a2",
        content: "Front-end Dev",
        icons: [
          "https://cdn.worldvectorlogo.com/logos/angular-icon.svg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        ],
        dots: 4,
      },
      {
        key: "a3",
        content: "DBA",
        icons: [
          "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
          "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        ],
        dots: 4,
      },
      {
        key: "a4",
        content: "Scrum",
        icons: [
          "https://cdn.iconscout.com/icon/free/png-256/scrum-2-458188.png",
        ],
        dots: 3,
      },
    ],
  },
  languages: {
    title: "Idiomas",
    rows: [
      {
        content: "Español",
        percentage: 100,
      },
      {
        content: "Inglés",
        percentage: 40,
      },
    ],
  },
  workExperience: {
    title: "Experiencia Laboral",
    rows: [
      {
        title: "T-Integro S.A.C - Desarrollador",
        date: "Julio, 2021 - Actualidad",
        achievements: [
          "Implementación de Casos de Uso a nivel front, back y base de datos utilizando tecnologías como Angular, Spring Boot, Postgres.",
          "Despliegue a producción al servidor dedicado.",
          "Trabajo bajo la metodología ágil Scrum.",
        ],
      },
      {
        title: "Arca de Papel E.I.R.L - Desarrollador",
        date: "Febrero, 2021 - Junio, 2021",
        achievements: [
          "Maquetación de vistas interactivas en React.",
          "Manejo de un servidor dedicado para el despliegue constante del proyecto.",
          "Actualización de data y creación de schemas en MongoDB.",
          "Implementación/mantenimiento DAO en Nest para las funciones en MongoDB.",
        ],
      },
    ],
  },
  education: {
    title: "Educación",
    rows: [
      {
        title: "Ingeniería de Software",
        detail: "Universidad Nacional Mayor de San Marcos",
        date: "2017 - Actualidad",
      },
    ],
  },
  interests: {
    title: "Intereses",
    rows: [
      {
        paragraph: "Educación: matemáticas, programación.",
      },
      {
        paragraph: "Deportes: natación, ajedrez.",
      },
    ],
  },
};

export const interests = {
  title: "Intereses",
  rows: [
    {
      paragraph: "Educación: matemáticas, programación.",
    },
    {
      paragraph: "Deportes: natación, ajedrez.",
    },
  ],
};

export default data;
