import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IContact } from "../../utils/types";

function IconRow({ icon, content, url }: IContact) {
  return (
    <div className="icon-row">
      <FontAwesomeIcon icon={icon} />
      {url ? <a href={url}>{content}</a> : <p>{content}</p>}
    </div>
  );
}

export default IconRow;
