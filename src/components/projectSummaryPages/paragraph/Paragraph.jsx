import ParagraphHeading from "./ParagraphHeading";
import ParagraphContextList from "./paragraphContext/ParagraphContextList";
import ParagraphContextText from "./paragraphContext/ParagraphContextText";

function Paragraph(props) {
  const content = props.content;
  const contentElements = [];
  for (let i = 0; i < content.length; i++) {
    const element = content[i];
    if (element.text) {
      // If it has a text
      contentElements.push(<ParagraphContextText text={element.text} />);
    } else {
      contentElements.push(<ParagraphContextList list={element.list} />);
    }
  }
  return (
    <div className="col-start-2 col-end-12 text-gray-200 font-serif mb-20">
      <ParagraphHeading text={`${props.heading}:`} />
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-13 group">{contentElements}</div>
      </div>
    </div>
  );
}

export default Paragraph;
