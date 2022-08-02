import LogoScreen from "./components/screenContent/LogoScreen";
import TextScreen from "./components/screenContent/TextScreen";
import ButtonScreen from "./components/screenContent/ButtonScreen";
import FullGridScreen from "./components/screenLayout/FullGridScreen";
import ScreenOverlayContainer from "./components/screenLayout/ScreenOverlayContainer";
import CanvasScreen from "./components/screenContent/CanvasScreen";
import Footer from "./components/footer/Footer";

import ProjectSummaryPage from "./components/projectSummaryPages/ProjectSummaryPage";

import { useState } from "react";

// Projects data:
import washingDisasterSolverData from "../projects_data/washing_disaster_solver.json";

// Texts for TextScreen elements
// import textScreenTexts from "../resources/textScreenTexts.json"
const textScreenTexts = [
  "Hey! I am self-taught programmer. In the past years I was primarily focusing on backend development.",
  "However, that does not really matter...",
  "This is a website  where I simply list projects that I had worked on in the past.",
  "I made this website solely for my own amusement and I do not want to show off what I do with my free time. In fact, I don't know what you are doing on this website...",
  "Here you'll be able to read a short description of projects that I have completed and that, I think, deserve a special acknowledgement from me. I just do not what to forget what I do with my free time :)",
];

function App() {
  const [startAnimate, setStartAnimate] = useState(false);

  // Deleting a "start animation" button and triggering a begging of an animation on the THREE.JS screen
  const startAnimation = () => {
    window.setTimeout(() => {
      setStartAnimate(true);

      // Deleting button and contaier after the button was pressed
      var button = document.getElementById("text-based__button");
      var buttonContainer = document.getElementById("button__container");
      var overlayContainer = document.getElementById(
        "screen__overlay__container"
      );
      buttonContainer.removeChild(button);
      overlayContainer.removeChild(buttonContainer);
    }, 1000);
  };

  // making a list that stores all <TextScreen/> components
  const textScreenList = [];
  for (var i = 0; i < textScreenTexts.length; i++) {
    textScreenList.push(
      <TextScreen text={textScreenTexts[i]} textCount={i} key={i}></TextScreen>
    );
  }

  return (
    <div>
      <main className="bg-gray-900">
        {/* Use example: */}
        <ProjectSummaryPage props={washingDisasterSolverData} />

        <FullGridScreen>
          <LogoScreen />

          {textScreenList}

          <ScreenOverlayContainer>
            <ButtonScreen
              extraContainerClasses=" absolute w-screen z-20"
              onButtonClick={startAnimation}
            />
            <CanvasScreen
              extraContainerClasses=" absolute w-screen z-10"
              canvasId="mainCanvas"
              startAnimate={startAnimate}
            />
          </ScreenOverlayContainer>
        </FullGridScreen>
      </main>
      <Footer />
    </div>
  );
}

export default App;
