import LogoScreen from "./components/screenContent/LogoScreen";
import TextScreen from "./components/screenContent/TextScreen";
import ButtonScreen from "./components/screenContent/ButtonScreen";
import FullGridScreen from "./components/screenLayout/FullGridScreen";
import ScreenOverlayContainer from "./components/screenLayout/ScreenOverlayContainer";
import CanvasScreen from "./components/screenContent/CanvasScreen";

import { useState } from "react";

function App() {
  const [startAnimate, setStartAnimate] = useState(false);
  const startAnimation = () => {
    setStartAnimate(true);
  };
  return (
    <main className="bg-gray-900">
      <FullGridScreen>
        <LogoScreen />

        <TextScreen
          text="This is a website where I list my little projects."
          textCount="0"
        />
        <TextScreen
          text="I made this website solely for my own amusement and I do not want to show off what I do with my free time. In fact, I don't know what you are doing on this website..."
          textCount="1"
        />

        <TextScreen
          text="Here you'll be able to read a short description of projects that I have completed and that, I think, deserve a special acknowledgement from me. I just do not what to forget what I do with my free time :)"
          textCount="2"
        />

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
  );
}

export default App;
