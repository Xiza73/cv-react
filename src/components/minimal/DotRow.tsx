import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faC } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IAbilities } from "../../utils/types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function DotRow({ icons, content, subcontent, dots }: IAbilities) {
  const dotIcons = icons?.map((e, i) =>
    typeof e === "string" ? (
      <svg key={`ic${i}`}>
        <image href={e} />
      </svg>
    ) : (
      <FontAwesomeIcon key={`ic${i}`} icon={e as IconProp} />
    )
  );
  if (dots > 5) dots = 5;
  const dotLvl = [];
  for (let i = 0; i < dots; i++) {
    dotLvl.push(
      <FontAwesomeIcon
        className="il"
        id={`il${i}t`}
        key={`il${i}`}
        icon={faCircle as IconProp}
      />
    );
  }
  for (let i = dots; i < 5; i++) {
    dotLvl.push(
      <FontAwesomeIcon
        className="il"
        id={`il${i}f`}
        key={`il${i}`}
        icon={faC as IconProp}
      />
    );
  }
  return (
    <div className="dot-row">
      <div className="content">
        <div className="text-content">
          <p className="main-content">{content}</p>
          <p className="sub-content">{subcontent.join(", ")}</p>
        </div>
        {dotIcons}
      </div>
      <div className="dots">{dotLvl}</div>
    </div>
  );
}

export default DotRow;
