interface IProps {
  title: string;
  content: string;
}

function SimpleContent({ title, content }: IProps) {
  return (
    <div className="content-container">
      <h2>{title ? title : "Your title here"}</h2>
      <p>{content ? content : "Your content here"}</p>
    </div>
  );
}

export default SimpleContent;
