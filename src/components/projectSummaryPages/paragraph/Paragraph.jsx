import ParagraphHeading from "./ParagraphHeading";
import ParagraphContextList from "./paragraphContext/ParagraphContextList";
import ParagraphContextText from "./paragraphContext/ParagraphContextText";
import ParagraphContextLinkList from "./paragraphContext/ParagraphContextLinkList";

function getParagraphDivColours(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "text-wds-600";

    default:
      return "text-gray-600";
  }
}

function getContentDivColours(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "selection:text-wds-200 selection:bg-wds-800";

    default:
      return "selection:text-gray-200 selection:bg-gray-800";
  }
}

function Paragraph(props) {
  const content = props.content;
  const colourScheme = props.colourScheme;
  const contentElements = [];
  for (let i = 0; i < content.length; i++) {
    const element = content[i];
    if (element.text) {
      // If it has a text
      contentElements.push(
        <ParagraphContextText
          text={element.text}
          colourScheme={colourScheme}
          key={`Content_${i}_${colourScheme}`}
        />
      );
    } else if (element.list) {
      // If it is a list without links
      contentElements.push(
        <ParagraphContextList
          list={element.list}
          colourScheme={colourScheme}
          key={`Content_${i}_${colourScheme}`}
        />
      );
    } else {
      // If it is a list made out of links
      contentElements.push(
        <ParagraphContextLinkList
          listLink={element.listLink}
          colourScheme={colourScheme}
          key={`Content_${i}_${colourScheme}`}
        />
      );
    }
  }
  return (
    <div
      className={
        "col-start-2 col-end-12 font-serif mb-20 " +
        getParagraphDivColours(colourScheme)
      }
    >
      <ParagraphHeading
        text={`${props.heading}:`}
        colourScheme={colourScheme}
      />
      <div className="grid grid-cols-12">
        <div
          className={
            "col-start-2 col-end-13 group " + getContentDivColours(colourScheme)
          }
        >
          {contentElements}
        </div>
      </div>
    </div>
  );
}

export default Paragraph;
