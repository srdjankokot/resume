import "../App.css";
function ReferenceComponent({reference}) {
  return (
    <div className="content">
      <span className="t regular-text">
    {reference.name}  | {reference.company} | <a href={`mailto:${reference.email}`}>{reference.email}</a>
      </span>
    </div>
  );
}

export default ReferenceComponent;
