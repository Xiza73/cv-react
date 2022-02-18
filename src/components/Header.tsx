import "../styles/header.scss";
import { IHeaderProps } from "../utils/types";

function Header({ title, description }: IHeaderProps) {
  return (
    <div className="header-container">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default Header;
