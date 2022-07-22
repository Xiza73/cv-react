import Header from "../components/Header";
import { header } from "../data/basicInfo";
import Container from "../components/Container";
import data from "./../data/js";

export const MainPage = () => {
  return (
    <>
      <div className="header">
        <Header
          title={header.title}
          description={header.description}
          link={header.link}
        />
      </div>
      <Container components={data.components} rows={data.rows} />
    </>
  );
};
