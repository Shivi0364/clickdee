import Card from "./components/UI/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div className="topContent">
          <Card className="topContentFirst">
            <h1>Why the industry chooses clickdee?</h1>
            <p>
              Our targeted and tracked calls are tailored to your business needs, audience, and geolocation. Our targeted and tracked calls are tailored to your business needs, audience, and
              geolocation. Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.
            </p>
          </Card>

          <div className="contentOuter">
            <Card>
              <h2>Choose Your Local Targeting</h2>
              <p>Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.</p>
            </Card>
          </div>
          <div className="contentOuter">
            <Card>
              <h2>Track Your Conversion</h2>
              <p>We use the most progressive tracking and analytics technology to ensure that every call can be tracked and evaluated.</p>
            </Card>
          </div>
        </div>
        <div className="bottomContent">
          <div className="blank-div"></div>
          <div className="contentOuter">
            <Card>
              <h2>Track Your Conversion</h2>
              <p>We use the most progressive tracking and analytics technology to ensure that every call can be tracked and evaluated.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
