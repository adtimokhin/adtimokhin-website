import ProjectLogo from "./ProjectLogo";
import FullGridScreen from "../screenLayout/FullGridScreen";
import Paragraph from "./paragraph/Paragraph";
import Footer from "../footer/Footer";
import Epigraph from "./Epigraph";

function ProjectSummaryPage(props) {
  const content = props.props;
  const colourScheme = content.colourscheme

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
    <div className={`bg-${colourScheme}-300`}>
      <FullGridScreen>
        <ProjectLogo
          image={content.imageScr}
          projectName={content.projectName}
        />
        <Epigraph quote={content.quote} author={content.quoteAuthor} colourScheme ={colourScheme}/>
        {paragraphs}
      </FullGridScreen>
      <Footer />
    </div>
  );
}

export default ProjectSummaryPage;
