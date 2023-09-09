import Typewriter from "typewriter-effect";
import "./Components.css";

function Type() {
  return (
    <div className="homeGreet">
      <h2 className="homeGreetStatic">
        Immigrants {" "}
        <span className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                " are the backbone",
                " deserve compensation",
                " have rights",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 200,
            }}
          />
        </span>
      </h2>
    </div>
  );
}

export default Type;
