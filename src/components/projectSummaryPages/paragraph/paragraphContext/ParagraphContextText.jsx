function getTextColour(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "group-hover:text-wds-800";

    default:
      return "group-hover:text-gray-800";
  }
}

function ParagraphContextText(props) {
  const colourScheme = props.colourScheme;

  return (
    <p
      className={
        "text-xl p-4 " +
        getTextColour(colourScheme) +
        " transition-all duration-700 ease-linear"
      }
    >
      &nbsp; {props.text}
    </p>
  );
}

export default ParagraphContextText;
