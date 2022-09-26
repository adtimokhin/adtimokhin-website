import ProjectSelectionCanvas from "../threeJSContent/ProjectSelectionCanvas";

import { useState } from "react";

function CanvasScreen(props) {
  const extraClasses = props.extraContainerClasses;
  const numberOfProjectPages = props.numberOfProjectPages;

  return (
    <div
      className={
        "text-center col-start-1 col-end-13 flex items-center justify-center h-screen" +
        extraClasses
      }
      id="button__container"
    >
      <ProjectSelectionCanvas
        canvasId={props.canvasId}
        startAnimate={props.startAnimate}
        numberOfProjectPages={numberOfProjectPages}
      ></ProjectSelectionCanvas>
    </div>
  );
}

export default CanvasScreen;
