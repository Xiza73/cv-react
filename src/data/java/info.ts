import {
  IBarsLvlProps,
  IMainListProps,
  IDotsLvlProps,
} from "../../utils/types";

export const rows: { firstColumn: number; secondColumn: number } = {
  firstColumn: 4,
  secondColumn: 2,
};

export const abilities: IDotsLvlProps = {
  title: "Competencias",
  rows: [
    {
      content: "Back-end Dev",
      subcontent: ["Spring Boot", "Express", "Nest"],
      icons: [
        "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
        "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      ],
      dots: 3,
    },
    {
      content: "Front-end Dev",
      subcontent: ["React", "Angular", "Vue"],
      icons: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        "https://cdn.worldvectorlogo.com/logos/angular-icon.svg",
      ],
      dots: 4,
    },
    {
      content: "DBA",
      subcontent: ["PostgreSQL", "Oracle", "MongoDB", "MySQL"],
      icons: [
        "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      ],
      dots: 4,
    },
    {
      content: "Lenguajes",
      subcontent: ["Java", "JavaScript", "TypeScript"],
      icons: [
        "https://www.svgrepo.com/show/303388/java-4-logo.svg",
        "https://static.cdnlogo.com/logos/j/69/javascript.svg",
      ],
      dots: 4,
    },
    {
      content: "Metodologías",
      subcontent: ["Agile", "Classic"],
      icons: [
        "https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png",
      ],
      dots: 3,
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
      title: "Wally POS S.A.C. - Jr. Full Stack Developer",
      date: "Marzo, 2022 - Actualidad",
      achievements: [
        "Vue, NuxtJS, NodeJS, Express, NestJS, MongoDB.",
        "Manejo de API REST",
        "Mantenimiento constante del sistema principal 'MiWally'.",
        "Manejo de microservicios en NodeJS con Express y NestJS.",
        "Refactorización del sistema secundario 'Consulta MiWally' de Vue a NuxtJS.",
        "Trabajo bajo metodología ágil Scrum en el rol de desarrollador.",
      ],
    },
    {
      title: "T-Integro S.A.C - Desarrollador Web",
      date: "Junio, 2021 - Marzo, 2022",
      achievements: [
        "Java, Spring Boot, Java, Angular, Postgres.",
        "Manejo de API REST",
        "Implementación de Historias de Usuarios a nivel front, back y base de datos.",
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
      achievements: ["Angular, Java, Spring Boot, MySQL, Typescript"],
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
    /* {
      title: "Bot para Discord",
      date: "2020 - Mantenimiento continuo",
      achievements: ["NodeJS (Express), Typescript, MongoDB, DiscordJS"],
    }, */
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
