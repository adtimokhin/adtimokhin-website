import ParagraphHeading from "./ParagraphHeading";
import ParagraphContextList from "./paragraphContext/ParagraphContextList";
import ParagraphContextText from "./paragraphContext/ParagraphContextText";
import ParagraphContextLinkList from "./paragraphContext/ParagraphContextLinkList";

function Paragraph(props) {
  const content = props.content;
  const colourScheme = props.colourScheme;
  const contentElements = [];
  for (let i = 0; i < content.length; i++) {
    const element = content[i];
    if (element.text) {
      // If it has a text
      contentElements.push(
        <ParagraphContextText text={element.text} colourScheme={colourScheme} key={`Content_${i}_${colourScheme}`}/>
      );
    } else if (element.list) {
      // If it is a list without links
      contentElements.push(
        <ParagraphContextList list={element.list} colourScheme={colourScheme} key={`Content_${i}_${colourScheme}`}/>
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
      className={`col-start-2 col-end-12 text-${colourScheme}-600 font-serif mb-20`}
    >
      <ParagraphHeading text={`${props.heading}:`}/>
      <div className="grid grid-cols-12">
        <div
          className={`col-start-2 col-end-13 group selection:text-${colourScheme}-200 selection:bg-${colourScheme}-800`}
        >
          {contentElements}
        </div>
      </div>
    </div>
  );
}

export default Paragraph;
