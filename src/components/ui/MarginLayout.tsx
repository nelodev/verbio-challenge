interface marginLayoutProps {
  children: any;
}

function MarginLayout({children}: marginLayoutProps) {
  return <div className="mx-4">{children}</div>;
}

export default MarginLayout;
