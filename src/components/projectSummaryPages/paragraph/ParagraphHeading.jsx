function ParagraphHeading(props) {
  return (
    <h3 className="font-semibold text-4xl mb-4 text-wds-50 selection:text-wds-800 selection:bg-wds-200">
      {props.text}
    </h3>
  );
}

export default ParagraphHeading;
