import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import "./../styles/themeChanger.scss";

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [displayLabel, setDisplayLabel] = useState("flex");

  return (
    <div className="theme-changer">
      <input
        type="checkbox"
        className="checkbox"
        id="chk"
        checked={theme === "dark"}
        onChange={(_) => setTheme(theme === "light" ? "dark" : "light")}
      />
      <label className="label" htmlFor="chk" style={{ display: displayLabel }}>
        <div className="ficons">
          <FontAwesomeIcon className="ficon fm" icon={faMoon as IconProp} />
          <FontAwesomeIcon className="ficon fs" icon={faSun as IconProp} />
        </div>
        <div className="ball"></div>
      </label>
      <div className="pre-tooltip">
        <div className="tooltip" onClick={(_) => setDisplayLabel("none")}>
          Close
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
