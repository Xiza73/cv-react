import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./../styles/themeChanger.scss";

//const themeOptions = [{ value: "light" }, { value: "dark" }];

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="theme-changer">
      <input
        type="checkbox"
        className="checkbox"
        id="chk"
        checked={theme === "dark"}
        onChange={(_) => setTheme(theme === "light" ? "dark" : "light")}
      />
      <label className="label" htmlFor="chk">
        <div className="ficons">
          <FontAwesomeIcon className="ficon fm" icon={faMoon} />
          <FontAwesomeIcon className="ficon fs" icon={faSun} />
        </div>
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default ThemeChanger;
