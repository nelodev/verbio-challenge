function CenteredLayout({children, className}: any): JSX.Element {
  return (
    <div
      className={`flex justify-center items-center mx-auto my-0 h-screen ${className}`}
    >
      {children}
    </div>
  );
}

export default CenteredLayout;
