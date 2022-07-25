function ScreenOverlayContainer(props) {
  return (
      <div className="col-start-1 col-end-13 h-screen" id="screen__overlay__container">
        {props.children}
      </div>
  );
}

export default ScreenOverlayContainer;
