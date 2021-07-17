interface headingProps {
  text: string;
  as: string;
  className: string;
}

function Heading({text, as, className}: headingProps) {
  function getHeading(text: string, as: string) {
    if (as === 'h1') return <h1 className={className}>{text}</h1>;
    if (as === 'h2') return <h2 className={className}>{text}</h2>;
    if (as === 'h3') return <h3 className={className}>{text}</h3>;
    return <h1 className={className}>{text}</h1>;
  }

  return getHeading(text, as);
}

export default Heading;
