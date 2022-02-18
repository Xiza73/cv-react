import { ISimpleProps } from '../utils/types';

function SimpleContent({ title, content }: ISimpleProps) {
  return (
    <div className="content-container">
      <h2>{title ? title : "Your title here"}</h2>
      <p>{content ? content : "Your content here"}</p>
    </div>
  );
}

export default SimpleContent;
