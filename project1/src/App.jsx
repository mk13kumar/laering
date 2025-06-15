import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./image/alexaimg.png";
import CortanaImage from "./image/cortanaimg.png";
import SiriImage from "./image/siriimg.jpeg";

function App() {
  return (
    <div>
      <div className="container">
        <section className="section">
          <h1 className="title is-4" style={{ margin: "auto" }}>
            {" "}
            personal Digital Assistants
          </h1>
          <div
            className="column "
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexDirection: "row",
              margin: "100px",
            }}
          >
            <div className="colom is -4">
              <ProfileCard
                title="Alexa "
                handle="@alexa99"
                image={AlexaImage}
                discription="Alexa was created By Amazon and helps you buy thing  "
              />
            </div>
            <div className="colom is -4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                discription="Cortana was made By Microsoft ,Who kanws what it dose "
              />
            </div>
            <div className="colom is -4">
              <ProfileCard title="Siri" handle="@siri01" image={SiriImage}
              discription=" Siri was made by Apple and is being phased out "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
