function getElementColours(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "hover:text-wds-50";

    case "sss":
      return "hover:text-sss-50";

    default:
      return "hover:text-gray-50";
  }
}

function getListColours(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "group-hover:text-wds-800";

    case "sss":
      return "group-hover:text-sss-800";

    default:
      return "group-hover:text-gray-800";
  }
}

function ParagraphContextList(props) {
  const listContent = props.listLink;
  const colourScheme = props.colourScheme;
  const listElements = [];
  for (let i = 0; i < listContent.length; i++) {
    const element = listContent[i];
    const linkElements = element.split("&^");
    listElements.push(
      <li
        key={`Element_${i}_${element[0]}`}
        className={
          "pb-2 text-xl " +
          getElementColours(colourScheme) +
          " transition-all duration-700 ease-linear w-fit"
        }
      >
        <a href={linkElements[0]} target="_blank">
          {linkElements[1]}
        </a>
      </li>
    );
  }
  return (
    <ul
      className={
        "p-4 list-none group-hover:list-decimal " +
        getListColours(colourScheme) +
        " transition-all duration-700 ease-linear"
      }
    >
      {listElements}
    </ul>
  );
}

export default ParagraphContextList;
