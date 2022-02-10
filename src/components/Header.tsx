import "../styles/header.scss";

interface IProps {
  title: string;
  description: string;
}

function Header({ title, description }: IProps) {
  return (
    <div className="header-container">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default Header;
