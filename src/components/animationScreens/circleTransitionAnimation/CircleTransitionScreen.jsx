import FullGridScreen from "../../screenLayout/FullGridScreen";
import Circle from "./Circle";

import { useState } from "react";

function CircleTransitionScreen(props) {
  const extraClasses = props.extraContainerClasses;
  const [isDrawCircle, setIsDrawCircle] = useState(false);
  const [mousePoition, setMousePosition] = useState({
    mouseX: -1,
    mouseY: -1,
  });

  function drawCircle(event) {
    if (!isDrawCircle) {
      setIsDrawCircle(true);
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
        <Circle x={mousePoition.mouseX} y={mousePoition.mouseY} />
      ) : (
        ""
      )}
    </div>
  );
}

export default CircleTransitionScreen;
