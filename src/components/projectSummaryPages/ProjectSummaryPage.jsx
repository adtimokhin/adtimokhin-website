import ProjectLogo from "./ProjectLogo";
import FullGridScreen from "../screenLayout/FullGridScreen";
import Paragraph from "./paragraph/Paragraph";
import Footer from "../footer/Footer";
import Epigraph from "./Epigraph";

function getDivColours(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "bg-wds-300";
    case "sss":
      return "bg-sss-300";  
    default:
      return "bg-gray-300";
  }
}

function ProjectSummaryPage(props) {
  const content = props.props;
  const colourScheme = content.colourscheme;

  const paragraphs = [];
  for (let i = 0; i < content.paragraphs.length; i++) {
    const paragraph = content.paragraphs[i];
    paragraphs.push(
      <Paragraph
        key={`Paragraph_${i}_${colourScheme}`}
        heading={paragraph.heading}
        content={paragraph.content}
        colourScheme={colourScheme}
      />
    );
  }

  return (
    <div>
      <div className={"pb-20 " + getDivColours(colourScheme)}>
        <FullGridScreen>
          <ProjectLogo
            image={content.imageScr}
            projectName={content.projectName}
          />
          <Epigraph
            quote={content.quote}
            author={content.quoteAuthor}
            colourScheme={colourScheme}
          />
          {paragraphs}
        </FullGridScreen>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectSummaryPage;
