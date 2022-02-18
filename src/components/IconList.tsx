import "../styles/iconlist.scss";
import { IIconProps } from "../utils/types";
import IconRow from "./minimal/IconRow";

function IconList({ title, rows }: IIconProps) {
  const rowsContent = rows.map((e) => (
    <IconRow key={e.key} icon={e.icon} content={e.content} url={e.url} />
  ));
  return (
    <div className="icon_list-container content-container">
      <h2>{title}</h2>
      {rowsContent}
    </div>
  );
}

export default IconList;
