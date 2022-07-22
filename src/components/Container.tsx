type Props = {
  components: JSX.Element[];
  rows: { firstColumn: number; secondColumn: number };
};

export default function Container({ components, rows }: Props) {
  const row1 = {
    gridTemplateRows: `repeat(${rows.firstColumn - 1}, auto) ${1}fr`,
  };
  const row2 = {
    gridTemplateRows: `repeat(${rows.secondColumn - 1}, auto) ${1}fr`,
  };
  return (
    <>
      <div className="columns">
        <div className="rows" style={row1}>
          {components.map((e, i) => (i < rows.firstColumn ? e : null))}
        </div>
        <div className="rows" style={row2}>
          {components.map((e, i) => (i >= rows.firstColumn ? e : null))}
        </div>
      </div>
    </>
  );
}
