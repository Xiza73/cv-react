import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faC } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IAbilities } from "../../utils/types";

function DotRow({ icons, content, dots }: IAbilities) {
  const dotIcons = icons?.map((e, i) =>
    typeof e === "string" ? (
      <>
        <svg key={`ic${i}`}>
          <image href={e} />
        </svg>
      </>
    ) : (
      <FontAwesomeIcon key={`ic${i}`} icon={e} />
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
        icon={faCircle}
      />
    );
  }
  for (let i = dots; i < 5; i++) {
    dotLvl.push(
      <FontAwesomeIcon
        className="il"
        id={`il${i}f`}
        key={`il${i}`}
        icon={faC}
      />
    );
  }
  return (
    <div className="dot-row">
      <div className="content">
        <p>{content}</p>
        {dotIcons}
      </div>
      <div className="dots">{dotLvl}</div>
    </div>
  );
}

export default DotRow;
