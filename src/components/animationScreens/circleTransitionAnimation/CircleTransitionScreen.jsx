import FullGridScreen from "../../screenLayout/FullGridScreen";
import Circle from "./Circle";

import { useState } from "react";

function CircleTransitionScreen(props) {
  //props
  const extraClasses = props.extraContainerClasses;
  const onAnimationTermination = props.onAnimationTermination;

  //states
  const [isDrawCircle, setIsDrawCircle] = useState(false);
  const [isFirstTimeDrawingCircle, setIsFirstTimeDrawingCircle] =
    useState(true);
  const [mousePoition, setMousePosition] = useState({
    mouseX: -1,
    mouseY: -1,
  });

  function drawCircle(event) {
    if (!isDrawCircle && isFirstTimeDrawingCircle) {
      setIsDrawCircle(true);
      setIsFirstTimeDrawingCircle(false);
      setMousePosition({
        mouseX: event.clientX,
        mouseY: event.clientY,
      });
    }
  }

  return (
    <div
      className={"h-screen col-span-12" + extraClasses}
      id="draw_screen"
      onClick={drawCircle}
    >
      {isDrawCircle ? (
        <Circle
          x={mousePoition.mouseX}
          y={mousePoition.mouseY}
          onReachingMaximumRadius={() => {
            // TODO: pass ids of projects that need to be displayed
            // NOTE: only one id must be passed at any given time! Otherwise it looks crap
            onAnimationTermination([0]);
            setIsDrawCircle(false);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default CircleTransitionScreen;
