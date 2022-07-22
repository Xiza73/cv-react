import SimpleContent from "../../components/SimpleContent";
import IconList from "../../components/IconList";
import DotsLevel from "../../components/DotsLevel";
import MainList from "../../components/MainList";
import {
  rows,
  workExperience,
  education,
  abilities,
  personalProjects,
} from "./info";
import { profile, contact } from "../basicInfo";

const data = {
  rows,
  components: [
    <SimpleContent
      key={profile.title}
      title={profile.title}
      content={profile.content}
    />,
    <IconList key={contact.title} title={contact.title} rows={contact.rows} />,
    <DotsLevel
      key={abilities.title}
      rows={abilities.rows}
      title={abilities.title}
    />,
    <MainList
      key={education.title}
      title={education.title}
      rows={education.rows}
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
  ],
};

export default data;
