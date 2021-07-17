interface headingProps {
  text: string,
  as: string,
}

function Heading({ text, as }: headingProps) {
  function getHeading(text: string, as: string) {
    if (as === "h1") return <h1>{text}</h1>
    if (as === "h2") return <h2>{text}</h2>
    if (as === "h3") return <h3>{text}</h3>
    return <h1>{text}</h1>
  }

  return getHeading(text, as)
}

export default Heading;