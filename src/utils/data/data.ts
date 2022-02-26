import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ISimpleProps, IHeaderProps } from "../types";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  IBarsLvlProps,
  IMainListProps,
  IDotsLvlProps,
  IIconProps,
} from "../types";

export const rows: { firstColumn: number; secondColumn: number } = {
  firstColumn: 4,
  secondColumn: 3,
};

export const header: IHeaderProps = {
  title: "manuel fajardo",
  description: "web developer",
  link: "https://github.com/Xiza73/cv-react",
};

export const profile: ISimpleProps = {
  title: "Perfil",
  content:
    "Estudiante de 9no ciclo de Ingeniería de Software deseoso de continuar creciendo en logros, conocimientos y experiencias, constantemente actualizándose en tecnologías centradas por ahora en el mundo del desarrollo.",
};

export const contact: IIconProps = {
  title: "Contacto",
  rows: [
    {
      //icon: faEnvelope,
      icon: faEnvelope,
      content: "m.fajardo.1098@gmail.com",
      url: undefined,
    },
    {
      icon: faPhoneAlt,
      content: "+51938263506",
      url: undefined,
    },
    {
      icon: faMapMarkerAlt,
      content: "Comas, Lima, Perú",
      url: undefined,
    },
    {
      icon: faGithubSquare,
      content: "Xiza73",
      url: "https://github.com/Xiza73",
    },
    {
      icon: faLinkedin,
      content: "m-fajardo-as",
      url: "https://www.linkedin.com/in/m-fajardo-as/",
    },
  ],
};

export const abilities: IDotsLvlProps = {
  title: "Competencias",
  rows: [
    {
      content: "Back-end Dev",
      subcontent: ["Express", "Spring", "Nest"],
      icons: [
        "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      ],
      dots: 3,
    },
    {
      content: "Front-end Dev",
      subcontent: ["Angular", "React"],
      icons: [
        "https://cdn.worldvectorlogo.com/logos/angular-icon.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      ],
      dots: 3,
    },
    {
      content: "DBA",
      subcontent: ["PostgreSQL", "MongoDB", "MySQL"],
      icons: [
        "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      ],
      dots: 3,
    },
    {
      content: "Metodologías",
      subcontent: ["Agile", "Classic"],
      icons: [
        "https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png",
      ],
      dots: 2,
    },
    {
      content: "DevOps",
      subcontent: ["Docker", "Kubernetes"],
      icons: ["https://i.imgur.com/4eDzdl4.png"],
      dots: 1,
    },
  ],
};

export const languages: IBarsLvlProps = {
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
};

export const workExperience: IMainListProps = {
  title: "Experiencia Laboral",
  rows: [
    {
      title: "T-Integro S.A.C - Desarrollador Web",
      date: "Julio, 2021 - Actualidad",
      achievements: [
        "Implementación de Historias de Usuarios a nivel front, back y base de datos utilizando las tecnologías de Angular, Spring, Postgres.",
        "Manejo de microservicios.",
        "Mantenimiento continuo de proyectos.",
        "Trabajo bajo metodología ágil, Scrum.",
      ],
    },
    /* {
      title: "Arca de Papel E.I.R.L - Freelancer",
      date: "Agosto, 2021 - Enero, 2022",
      achievements: [
        "Maquetación de vistas interactivas en React.",
        "Manejo de un servidor dedicado para el despliegue constante del proyecto.",
        "Actualización de data y creación de schemas en MongoDB.",
        "Implementación de funciones de MongoDB en Nestjs.",
      ],
    }, */
  ],
};

export const personalProjects: IMainListProps = {
  title: "Freelance",
  rows: [
    {
      title:
        "Web con ejercicios interactivos para Inicial, Primaria y Secundaria",
      date: "2021 - 2022",
      achievements: ["ReactJS, NodeJS (NestJS), MongoDB, Typescript"],
    },
    {
      title: "Sistema de búsqueda de libros académicos en pdf",
      date: "2021",
      achievements: ["Angular, NodeJS (Express), MongoDB, Typescript"],
    },
    {
      title: "Sistema de búsqueda de cursos con Webscraping",
      date: "2021",
      achievements: ["Angular, NodeJS (Express), Typescript, MongoDB, Python"],
    },
    /* {
      title: "Horario con manejo de reportes para una radio",
      date: "2021",
      achievements: ["ReactJS, NodeJS (Express), MongoDB"],
    }, */
    {
      title: "Bot para Discord",
      date: "2020 - Mantenimiento continuo",
      achievements: ["NodeJS (Express), Typescript, MongoDB, DiscordJS"],
    },
  ],
};

export const education: IMainListProps = {
  title: "Educación",
  rows: [
    {
      title: "Ingeniería de Software",
      detail: "Universidad Nacional Mayor de San Marcos",
      date: "2017 - Actualidad",
    },
  ],
};

export const interests: IMainListProps = {
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
