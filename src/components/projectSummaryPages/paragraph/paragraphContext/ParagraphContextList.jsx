function ParagraphContextList(props) {
  const listContent = props.list;
  const colourScheme = props.colourScheme;
  const listElements = [];
  for (let i = 0; i < listContent.length; i++) {
    const element = listContent[i];
    listElements.push(
      <li
        key={`Element_${i}_${element[0]}`}
        className={`pb-2 text-xl hover:text-${colourScheme}-50 transition-all duration-700 ease-linear w-fit`}
      >
        {element}
      </li>
    );
  }
  return (
    <ul className={`p-4 list-none group-hover:list-decimal group-hover:text-${colourScheme}-800 transition-all duration-700 ease-linear`}>
      {listElements}
    </ul>
  );
}

export default ParagraphContextList;
