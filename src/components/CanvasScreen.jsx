function setClassNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

function CanvasScreen(props) {
  const extraClasses = props.extraContainerClasses;
  return (
    <div
      className={
        "text-center col-start-1 col-end-13 flex items-center justify-center h-screen" +
        extraClasses
      }
      id="button__container"
    >

      <img src="public/ADTIMOKHIN_MAROON.jpg"/>

    </div>
  );
}

export default CanvasScreen;
