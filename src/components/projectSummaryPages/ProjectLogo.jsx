function ProjectLogo(props) {
  const imgScr = props.image;
  const projectName = props.projectName

  return (
    <div className="col-start-1 col-span-12 flex content-center p-4">
      <img
        src={imgScr}
        alt={`${projectName} logo`}
        className="select-none"
      />
    </div>
  );
}

export default ProjectLogo;
