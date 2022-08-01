import ProjectLogo from "./ProjectLogo";
import FullGridScreen from "../screenLayout/FullGridScreen";
import Paragraph from "./paragraph/Paragraph";
import Footer from "../footer/Footer";
import Epigraph from "./Epigraph";

function ProjectSummaryPage(props) {
  const content = props.props;

  const paragraphs = [];
  for (let i = 0; i < content.paragraphs.length; i++) {
    const paragraph = content.paragraphs[i];
    console.log(i);
    paragraphs.push(
      <Paragraph
        key={`Paragraph_${i}`}
        heading={paragraph.heading}
        content={paragraph.content}
      />
    );
  }

  return (
    <div className="bg-yellow-400">
      <FullGridScreen>
        <ProjectLogo
          image={content.imageScr}
          projectName={content.projectName}
        />
        <Epigraph quote={content.quote} author={content.quoteAuthor}/>
        {paragraphs}
      </FullGridScreen>
      <Footer/>
    </div>
  );
}

export default ProjectSummaryPage;
