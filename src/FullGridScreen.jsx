function FullGridScreen(props) {
  return (
    <div className="w-screen h-screen bg-gray-900 grid grid-cols-12">
      {props.children}
    </div>
  );
}

export default FullGridScreen
