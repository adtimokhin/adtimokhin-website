function ParagraphContextList(props) {
  const listContent = props.listLink;
  const listElements = [];
  for (let i = 0; i < listContent.length; i++) {
    const element = listContent[i];
    const linkElements = element.split("&^");
    listElements.push(
      <li
        key={`Element_${i}_${element[0]}`}
        className="pb-2 text-xl hover:text-gray-100 transition-all duration-700 ease-linear w-fit"
      >
        <a href={linkElements[0]} target="_blank">
          {linkElements[1]}
        </a>
      </li>
    );
  }
  return (
    <ul className="p-4 list-none group-hover:list-decimal group-hover:text-gray-600 transition-all duration-700 ease-linear">
      {listElements}
    </ul>
  );
}

export default ParagraphContextList;
