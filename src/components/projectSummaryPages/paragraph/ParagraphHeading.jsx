function getHeadingColours(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "text-wds-50 selection:text-wds-800 selection:bg-wds-200";

    default:
      return "text-gray-50 selection:text-gray-800 selection:bg-gray-200";
  }
}

function ParagraphHeading(props) {
  const colourScheme = props.colourScheme;
  return (
    <h3
      className={
        "font-semibold text-4xl mb-4 " + getHeadingColours(colourScheme)
      }
    >
      {props.text}
    </h3>
  );
}

export default ParagraphHeading;
