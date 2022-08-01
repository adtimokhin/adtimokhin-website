import LogoScreen from "./components/screenContent/LogoScreen";
import TextScreen from "./components/screenContent/TextScreen";
import ButtonScreen from "./components/screenContent/ButtonScreen";
import FullGridScreen from "./components/screenLayout/FullGridScreen";
import ScreenOverlayContainer from "./components/screenLayout/ScreenOverlayContainer";
import CanvasScreen from "./components/screenContent/CanvasScreen";
import Footer from "./components/footer/Footer";

import ProjectSummaryPage from "./components/projectSummaryPages/ProjectSummaryPage";

import { useState } from "react";

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

  // TODO: Move these JSONs into a separate file
  // TODO: Finish editing the JSON for WDS. Add bg colour selection, text colour selection
  // TODO: Make custom colours for each project I want to list on my sit
  // TODO: Add links in the paragrpahs
  const washingDisasterSolverContent = {
    projectName: "Washing Disaster Solver",
    imageScr: "projects/washingDisasterSolverLOGO.svg",
    paragraphs: [
      {
        heading: "Epighraph",
        content: [
          {
            text: '" Testing is what seperates a good programmer from a goof "',
          },
        ],
      },
      {
        heading: "Released",
        content: [
          {
            text: "Nov 16 2021",
          },
        ],
      },

      {
        heading: "What is this project",
        content: [
          {
            text: " Back in school I lived in a dorm with a very limited number of washing machines. There were too many of us living in the dorm, making it a nightmare using these washing machines.",
          },
          {
            text: " Washing Disaster Solver us a webapp, that I tested in my dorm, that allowed to book time to use dryers and washing machines.",
          },
          {
            text: " The system was exclusive to my dorm. It was not tested elsewhere.",
          },
        ],
      },
      {
        heading: "Technologies used",
        content: [
          {
            list: [
              "Spring Framework",
              "Hibernate Framework",
              "Postgres Database",
              "Apache Freemarker Template",
              "Bootstrap 5",
            ],
          },
        ],
      },

      {
        heading: "What part of the project I completed",
        content: [
          {
            text: " Well... All of it",
          },
        ],
      },

      {
        heading: "How to get a look at this wonderful project",
        content: [
          {
            text: " Unfortunately you can't anymore :(",
          },
          {
            text: " I describe what happened to the project down below. But you can view these sources:",
          },
          { list: ["GitHub Repo", "School coursework"] },
        ],
      },

      {
        heading: "How did it all go down",
        content: [
          {
            text: "Being young and naive is awsemome because you get to pursue what you want to do. As you get more mature you realise that besides being naive you are aslo incompitent. That is what happened to this project. I was blinded by my need to create an app that helps my peers that I have forgotten that testing an idea before bringing it to live is a cornerstone of any development.",
          },
          {
            text: "I made the application over the weekends and I did not really care about making a pretty UI (really, who does?). But even have forgotten to make simple tests of the backend code that I wrote.",
          },
          {
            text: "So, when beta testing of the application has began in the dorm, to things happened: Firstly, the program did not funciton. I spend all weekends sitting in my room trying to understand how to fix the code, while runninng the app.",
          },
          {
            text: "But what the more severe issue: half of my peers found the app useless and simply did not particioned in the testing. When i tried myself using the app I realised - oh, it is useless! It complicated the process too much.",
          },
        ],
      },

      {
        heading: "Interesting things I learned doing project",
        content: [
          {
            text: "JDYkiiBguy bi7STUYjty",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <main className="bg-gray-900">
        {/* Use example: */}
        {/* <ProjectSummaryPage props={washingDisasterSolverContent} /> */}

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
