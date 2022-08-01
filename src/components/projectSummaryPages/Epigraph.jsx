function Epigraph(props) {
  return (
    <div className="col-start-1 col-span-12 grid grid-cols-12 w-screen first-letter:text-center text-gray-600 selection:text-gray-200 selection:bg-gray-800 p-32 font-thin">
        <h4 className="col-start-4 col-end-10 text-7xl pb-2 text-center">
          "{props.quote}"
        </h4>
        <div className="col-start-10 col-end-12"></div>
        <p className="text-4xl text-gray-600 col-start-10 col-end-12 "> - {props.author}</p>
    </div>
  );
}

export default Epigraph;
