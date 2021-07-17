interface iconProps {
  src: string;
  className?: string;
}

function Icon({src, className}: iconProps): JSX.Element {
  return <img className={`w-8 h-8 ${className}`} src={src} />;
}

export default Icon;
