import image from "./logo.png";
import "./App.css";
import ContentHeader from "./components/contentHeader";
import EducationComponent from "./components/education";
import ExperienceComponent from "./components/experience";
import ReferenceComponent from "./components/reference";
import { experiences, references, skills, hobbies, programLanguages, cicd } from "./utils/constants";
import LanguageComponent from "./components/language";
import ContactComponent from "./components/contact";
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <div id="p1">
        <div
          style={{
            marginRight: "18mm",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img src={image} alt="Srdjan Kokot" />
        </div>

        <div>
          <div className="content-container">
            <ContentHeader title="Contact" color="white" />
            <div>
              <ContactComponent
                contact="kokotsrdjan@gmail.com"
                icon={faEnvelope}
                callback={() => {
                  window.open("mailto:kokotsrdjan@gmail.com");
                }}
              />

              <ContactComponent
                contact="+381631322248"
                icon={faPhone}
                callback={() => {
                  window.open("tel:+381631322248");
                }}
              />
              <ContactComponent
                contact="LinkedIn"
                icon={faLinkedin}
                callback={() => {
                  window.open(
                    "https://www.linkedin.com/in/srdjan-kokot-3799a094/"
                  );
                }}
              />
              <ContactComponent
                contact="Novi Sad, Serbia"
                icon={faHome}
                callback={() => {
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=Novi+Sad,+Serbia"
                  );
                }}
              />
            </div>
          </div>

          <div className="content-container">
            <ContentHeader title="Skills" color="white" />
            <div>
              <span className="t s1_1">{skills.join(", ")}</span>
            </div>
          </div>

                <div className="content-container">
            <ContentHeader title="Programming Languages" color="white" />
            <div>
              <span className="t s1_1">{programLanguages.join(", ")}</span>
            </div>
          </div>

                <div className="content-container">
            <ContentHeader title="CI/CD & Tools" color="white" />
            <div>
              <span className="t s1_1">{cicd.join(", ")}</span>
            </div>
          </div>

          <div className="content-container">
            <ContentHeader title="Languages" color="white" />
            <div>
              <LanguageComponent title="Serbian" proficiency={100} />
              <LanguageComponent title="English" proficiency={70} />
            </div>
          </div>

          <div className="content-container">
            <ContentHeader title="Hobbies" color="white" />
            <div>
              <span className="t s1_1">{hobbies.join(", ")}</span>
            </div>
          </div>
        </div>
      </div>

      <div id="p2">
        <div className="header">
          <span className="t title">SRDJAN KOKOT </span>
          <span className="t subtitle">Mobile developer </span>
        </div>

        <div className="content-container ">
          <ContentHeader title="Profile" />
          <div className="content">
            <span className="t regular-text">
Mobile developer with 10+ years of experience building and maintaining native and cross-platform applications using Android, iOS, Flutter, React Native, and Compose Multiplatform. I have strong proficiency in Java, Swift, Kotlin, and Dart, with solid working knowledge of JavaScript, and the ability to quickly adapt to and work with other programming languages as needed. In addition to deep mobile expertise, I have hands-on experience with Java development and CI/CD automation, leveraging Jenkins and GitHub Actions to automate build, test, and deployment workflows. I focus on code quality, reliable delivery pipelines, and efficient collaboration within cross-functional teams.
            </span>
          </div>
        </div>

        <div className="content-container ">
          <ContentHeader title="EDUCATION" />
          <div>
            <EducationComponent
              title="Bachelor's degree in Business Information Systems | University of Novi Sad, Faculty of Economics in, Subotica"
              duration="Sep 2006 - Sep 2011"
            />
          </div>
        </div>

        <div className="content-container ">
          <ContentHeader title="Experience" />
          <div>
            {experiences.map((experience, index) => (
              <ExperienceComponent key={index} experience={experience} />
            ))}
          </div>
        </div>

        <div className="content-container ">
          <ContentHeader title="References" />

          <div>
            {references.map((reference, index) => (
              <ReferenceComponent key={index} reference={reference} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
