function FullGridScreen(props) {
  return (
    <div className="w-screen h-screen grid grid-cols-12">
      {props.children}
    </div>
  );
}

export default FullGridScreen
