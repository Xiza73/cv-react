import Header from "./../components/Header";
import SimpleContent from "./../components/SimpleContent";
import IconList from "./../components/IconList";
import DotsLevel from "./../components/DotsLevel";
import BarsLevel from "./../components/BarsLevel";
import MainList from "./../components/MainList";
import {
  rows,
  header,
  profile,
  contact,
  abilities,
  languages,
  workExperience,
  education,
  //interests,
  personalProjects,
} from "./../utils/data/data";

export const MainPage = () => {
  const row1 = {
    gridTemplateRows: `repeat(${rows.firstColumn - 1}, auto) ${1}fr`,
  };
  const row2 = {
    gridTemplateRows: `repeat(${rows.secondColumn - 1}, auto) ${1}fr`,
  };
  const components = [
    <SimpleContent
      key={profile.title}
      title={profile.title}
      content={profile.content}
    />,
    <IconList key={contact.title} title={contact.title} rows={contact.rows} />,
    <DotsLevel
      key={abilities.title}
      title={abilities.title}
      rows={abilities.rows}
    />,
    <BarsLevel
      key={languages.title}
      title={languages.title}
      rows={languages.rows}
    />,
    <MainList
      key={workExperience.title}
      title={workExperience.title}
      rows={workExperience.rows}
    />,
    <MainList
      key={personalProjects.title}
      title={personalProjects.title}
      rows={personalProjects.rows}
    />,
    <MainList
      key={education.title}
      title={education.title}
      rows={education.rows}
    />,
    /* <MainList title={interests.title} rows={interests.rows} /> */
  ];

  return (
    <>
      <div className="header">
        <Header title={header.title} description={header.description} link={header.link} />
      </div>
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
};
