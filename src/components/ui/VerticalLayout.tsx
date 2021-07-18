interface verticalLayoutProps {
  children: any;
  className?: string;
}

function VerticalLayout({
  children,
  className,
}: verticalLayoutProps): JSX.Element {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}

export default VerticalLayout;
