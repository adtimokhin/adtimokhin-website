import FullGridScreen from "../../screenLayout/FullGridScreen";
import Circle from "./Circle";

import { useState } from "react";

function CircleTransitionScreen(props) {
  const extraClasses = props.extraContainerClasses;
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
