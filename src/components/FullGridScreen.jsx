function FullGridScreen(props) {
  return (
    <div className="grid grid-cols-12 w-screen">
      {props.children}
    </div>
  );
}

export default FullGridScreen
