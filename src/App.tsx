import "./App.scss";
import Header from "./components/Header";
import SimpleContent from "./components/SimpleContent";
import IconList from "./components/IconList";
import DotsLevel from "./components/DotsLevel";
import BarsLevel from "./components/BarsLevel";
import MainList from "./components/MainList";
import data from "./utils/data/data";

function App() {
  const {
    header,
    profile,
    contact,
    abilities,
    languages,
    workExperience,
    education,
    interests,
  } = data;
  return (
    <div className="cv-container">
      <div className="header">
        <Header title={header.title} description={header.description} />
      </div>
      <div className="columns">
        <div className="rows row1">
          <SimpleContent title={profile.title} content={profile.content} />
          <IconList title={contact.title} rows={contact.rows} />
          <DotsLevel title={abilities.title} rows={abilities.rows} />
          <BarsLevel title={languages.title} rows={languages.rows} />
        </div>
        <div className="rows row2">
          <MainList title={workExperience.title} rows={workExperience.rows} />
          <MainList title={education.title} rows={education.rows} />
          <MainList title={interests.title} rows={interests.rows} />
        </div>
      </div>
    </div>
  );
}

export default App;
