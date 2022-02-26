import "../styles/header.scss";
import { IHeaderProps } from "../utils/types";

function Header({ title, description, link }: IHeaderProps) {
  return (
    <div className="header-container">
      {link ? (
        <>
          <a href={link} className="title">{title}</a>
          <a href={link} className="description">{description}</a>
        </>
      ) : (
        <>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </>
      )}
    </div>
  );
}

export default Header;
