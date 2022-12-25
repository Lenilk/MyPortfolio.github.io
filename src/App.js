import "./App.css";
import mypic from "./pic/mypic.jpg";
function App() {
  return (
    <div className="App">
      <div className="Nav-bar">
        <h3 id="Logo">Lenilk</h3>
        <ul className="ul-nav">
          <li>
            <a href="#Home">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="data-body">
          <div id="About">
            <img src={mypic} className="Mypic" alt="My Profile" />
            <div className="Text-Home">
              <h2>About me</h2>
              <p>My name is Lenilk Jantarangsee</p>
              <p>I'm 18 years old. I am studying in grade 12.</p>
              <p>I live in Trang.My hobby is codding and learning.</p>
              <p>I would like to become a Programmer.</p>
            </div>
          </div>
          <div id="Contact">
            <h2>Contact Me</h2>
            <div className="Contact">
              <div className="Ct-left">
                <p>
                  My Github{"\t"}:{"\t"}
                  <a
                    className="App-link"
                    href="https://github.com/Lenilk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lenilk
                  </a>
                </p>
              </div>
              <div className="Ct-right">
                <p>
                  My Facebook{"\t"}:{"\t"}
                  <a
                    className="App-link"
                    href="https://www.facebook.com/profile.php?id=100069727362395"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lenilk Jantarangsee
                  </a>
                </p>
                {/* https://www.facebook.com/profile.php?id=100069727362395 */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
