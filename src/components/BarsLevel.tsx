import "../styles/barslevel.scss";

interface IProps {
  title: string;
  rows: {
    content: string;
    percentage: number;
  }[];
}

function BarsLevel({ title, rows }: IProps) {
  const barRow = rows.map((e, i) => (
    <div key={`br${i}`} className="bar-row">
      <p>{e.content}</p>
      <div className="progress-bar">
        <div style={{ width: `${e.percentage}%` }}></div>
      </div>
    </div>
  ));
  return (
    <div className="bars_level-container content-container">
      <h2>{title}</h2>
      {barRow}
    </div>
  );
}

export default BarsLevel;
