import "../styles/mainlist.scss";
import { IMainListProps } from "../utils/types";

function MainList({ title, rows }: IMainListProps) {
  const mainRows = rows.map((e, i) => {
    const achvs: JSX.Element[] = [];
    if (e.achievements && e.achievements?.length > 0) {
      e.achievements.forEach((element, index) => {
        achvs.push(
          <p key={`ach${index}`} className="list">
            - {element}
          </p>
        );
      });
    }
    return (
      <div key={`mr${i}`} className="main-row">
        {e.paragraph && (
          <>
            <h3 className="paragraph">{e.paragraph}</h3>
            <div className="extra"></div>
          </>
        )}
        {e.title && <h3>{e.title}</h3>}
        {e.detail && <p className="detail">{e.detail}</p>}
        {e.date && <p className="date">{e.date}</p>}
        {e.achievements && achvs}
      </div>
    );
  });
  return (
    <div className="main_list-container content-container">
      {title && <h2>{title}</h2>}
      <div className="main-rows">{mainRows}</div>
    </div>
  );
}

export default MainList;
