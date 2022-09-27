// div that will contain screens that will be placed one on top of another.
function ScreenOverlayContainer(props) {
  return (
      <div className="col-start-1 col-end-13 h-screen" id="screen__overlay__container">
        {props.children}
      </div>
  );
}

export default ScreenOverlayContainer;
