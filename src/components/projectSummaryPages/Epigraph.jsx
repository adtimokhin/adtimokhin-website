function getDivColours(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "text-wds-800 selection:text-wds-200 selection:bg-wds-800";

    default:
      return "text-gray-800 selection:text-gray-200 selection:bg-gray-800";
  }
}

function getQuoteColours(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "text-wds-600";

    default:
      return "text-gray-600";
  }
}

function Epigraph(props) {
  const colourScheme = props.colourScheme;
  return (
    <div
      className={
        "col-start-1 col-span-12 grid grid-cols-12 w-screen first-letter:text-center p-32 font-thin " +
        getDivColours(colourScheme)
      }
    >
      <h4 className="col-start-4 col-end-10 text-7xl pb-2 text-center">
        "{props.quote}"
      </h4>
      <div className="col-start-10 col-end-12"></div>
      <p className={`text-4xl col-start-10 col-end-12 ` + getQuoteColours(colourScheme)}>
        {" "}
        - {props.author}
      </p>
    </div>
  );
}

export default Epigraph;
