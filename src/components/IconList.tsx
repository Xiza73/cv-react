import "../styles/iconlist.scss";
import { IIconProps } from "../utils/types";
import IconRow from "./minimal/IconRow";

function IconList({ title, rows }: IIconProps) {
  const rowsContent = rows.map((e, i) => (
    <IconRow key={`r${i}`} icon={e.icon} content={e.content} url={e.url} />
  ));
  return (
    <div className="icon_list-container content-container">
      <h2>{title}</h2>
      {rowsContent}
    </div>
  );
}

export default IconList;
