import FullGridScreen from "../../screenLayout/FullGridScreen";
import Circle from "./Circle";

import { useState } from "react";

function CircleTransitionScreen() {
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
    <FullGridScreen>
      <div
        className="h-screen bg-gray-50 col-span-12"
        id="draw_screen"
        onClick={drawCircle}
      >
        {isDrawCircle ? (
          <Circle x={mousePoition.mouseX} y={mousePoition.mouseY} />
        ) : (
          ""
        )}
      </div>
    </FullGridScreen>
  );
}

export default CircleTransitionScreen;
