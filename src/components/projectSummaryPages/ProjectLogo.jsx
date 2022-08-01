function ProjectLogo(props) {
  const imgScr = props.image;

  return (
    <div className="col-start-1 col-span-12 flex content-center p-4">
      <img src={imgScr} alt={`${props.projectName} logo`} className="" />
    </div>
  );
}

export default ProjectLogo;