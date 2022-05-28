import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IContact } from "../../utils/types";

function IconRow({ icon, content, url }: IContact) {
  return (
    <div className="icon-row">
      {typeof icon === "string" ? (
        <svg>
          <image href={icon} />
        </svg>
      ) : (
        <FontAwesomeIcon icon={icon as IconProp} />
      )}
      {url ? <a href={url}>{content}</a> : <p>{content}</p>}
    </div>
  );
}

export default IconRow;
