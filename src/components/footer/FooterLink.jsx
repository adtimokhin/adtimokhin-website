function FooterLink(props) {
  const link = props.link;
  const linkTitle = props.linkTitle;

  return (
    <a
      href={link}
      className="text-gray-500 hover:text-gray-400 transition-all duration-300 ease-linear"
      target="_blank"
    >
      {linkTitle}
    </a>
  );
}

export default FooterLink;
