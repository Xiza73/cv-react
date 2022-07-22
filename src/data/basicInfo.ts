import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { IHeaderProps, IIconProps, ISimpleProps } from "../utils/types";
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const header: IHeaderProps = {
  title: "manuel fajardo",
  description: "full stack developer",
  link: "https://github.com/Xiza73/cv-react", // portfolio link
};

export const profile: ISimpleProps = {
  title: "Perfil",
  content:
    "Estudiante de 10mo ciclo de Ingeniería de Software deseoso de continuar creciendo en logros, conocimientos y experiencias, constantemente actualizándose en tecnologías centradas en el mundo del desarrollo.",
};

export const contact: IIconProps = {
  title: "Contacto",
  rows: [
    {
      icon: faEnvelope,
      content: "m.fajardo.1098@gmail.com",
      url: null,
    },
    {
      icon: faPhoneAlt,
      content: "+51938263506",
      url: null,
    },
    {
      icon: faMapMarkerAlt,
      content: "Comas, Lima, Perú",
      url: null,
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