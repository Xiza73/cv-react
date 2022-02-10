import "../styles/dotslevel.scss";
import { IAbilities } from "../utils/types";
import DotRow from "./minimal/DotRow";

interface IProps {
  title: string;
  rows: IAbilities[];
}

function DotsLevel({ title, rows }: IProps) {
  const dotsRows = rows.map((e, _) => (
    <DotRow key={e.key} content={e.content} icons={e.icons} dots={e.dots} />
  ));
  return (
    <div className="dots_level-container content-container">
      <h2>{title}</h2>
      <div className="dots-rows">{dotsRows}</div>
    </div>
  );
}

export default DotsLevel;
