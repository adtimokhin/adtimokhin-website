function Epigraph(props) {
  const colourScheme = props.colourScheme;
  return (
    <div
      className={`col-start-1 col-span-12 grid grid-cols-12 w-screen first-letter:text-center text-${colourScheme}-800 selection:text-${colourScheme}-200 selection:bg-${colourScheme}-800 p-32 font-thin`}
    >
      <h4 className="col-start-4 col-end-10 text-7xl pb-2 text-center">
        "{props.quote}"
      </h4>
      <div className="col-start-10 col-end-12"></div>
      <p
        className={`text-4xl text-${colourScheme}-600 col-start-10 col-end-12`}
      >
        {" "}
        - {props.author}
      </p>
    </div>
  );
}

export default Epigraph;
