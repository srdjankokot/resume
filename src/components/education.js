import "../App.css";
function EducationComponent(props) {
  return (
    <div className="content">
      <span className="t regular-text-bold">{props.title}</span>
      <span className="t date">{props.duration} </span>
    </div>
  );
}

export default EducationComponent;
