interface iconProps {
  src: string;
  className?: string;
  size?: string;
}

function getSize(size: string) {
  if (size === 'big') return 36;
  if (size === 'medium') return 24;
  return 12;
}

function Icon({src, className, size = 'small'}: iconProps): JSX.Element {
  return (
    <img
      className={`w-${getSize(size)} h-${getSize(size)} ${className}`}
      src={src}
    />
  );
}

export default Icon;
