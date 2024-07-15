import "../App.css";
import { textWithLinks } from "../utils/textUtils";
function ExperienceComponent({ experience }) {

  return (
    <div className="content">
      <div
        style={{
          marginBottom: "10px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span className="t regular-text-bold">
          {experience.title} {experience.company && `| ${experience.company}`}
          {experience.location && `, ${experience.location}`}
        </span>
        <span className="t date">
          {experience.startDate} - {experience.endDate}
        </span>
      </div>

      <span className="t regular-text">{experience.description} </span>

      {experience.projects && experience.projects.length > 0 && (
        <div
          style={{
            marginBottom: "5px",
            marginTop: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="t regular-text">Projects: </span>
          <ul>
            {experience.projects.map((project, index) => (
              <li className="t regular-text" key={index}>
                <p dangerouslySetInnerHTML={{ __html: textWithLinks(project) }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExperienceComponent;
