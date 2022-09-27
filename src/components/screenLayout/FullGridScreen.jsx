// Basic div that will split the screen to 12 columns. This div has width of the screen.
function FullGridScreen(props) {
  return <div className="grid grid-cols-12 w-screen">{props.children}</div>;
}

export default FullGridScreen;
