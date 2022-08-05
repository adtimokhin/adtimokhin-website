import LogoScreen from "./components/screenContent/LogoScreen";
import TextScreen from "./components/screenContent/TextScreen";
import ButtonScreen from "./components/screenContent/ButtonScreen";
import FullGridScreen from "./components/screenLayout/FullGridScreen";
import ScreenOverlayContainer from "./components/screenLayout/ScreenOverlayContainer";
import CanvasScreen from "./components/screenContent/CanvasScreen";
import Footer from "./components/footer/Footer";

import ProjectSummaryPage from "./components/projectSummaryPages/ProjectSummaryPage";

import CircleTransitionScreen from "./components/animationScreens/circleTransitionAnimation/CircleTransitionScreen";

import { useState } from "react";

// Projects data:
import washingDisasterSolverData from "../projects_data/washing_disaster_solver.json";
import someSpringStuffData from "../projects_data/some_spring_stuff.json";

// Texts for TextScreen elements
import textScreenTexts from "../resources/textScreenTexts.json";

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

        <FullGridScreen>
          <LogoScreen />

          {textScreenList}

          <ScreenOverlayContainer>
            <ButtonScreen
              extraContainerClasses=" absolute w-screen z-40"
              onButtonClick={startAnimation}
            />

            {/* TODO: add this element to the OverlayContainer after the animation finished playing */}
            {/* <ProjectSummaryPage
              props={someSpringStuffData}
              extraContainerClasses=" absolute w-screen z-20"
            /> */}

            <CircleTransitionScreen extraContainerClasses=" absolute w-screen z-20" />

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
