import "../styles/dotslevel.scss";
import { IDotsLvlProps } from '../utils/types';
import DotRow from "./minimal/DotRow";

function DotsLevel({ title, rows }: IDotsLvlProps) {
  const dotsRows = rows.map((e, i) => (
    <DotRow key={`a${i}`} content={e.content} subcontent={e.subcontent} icons={e.icons} dots={e.dots} />
  ));
  return (
    <div className="dots_level-container content-container">
      <h2>{title}</h2>
      <div className="dots-rows">{dotsRows}</div>
    </div>
  );
}

export default DotsLevel;
