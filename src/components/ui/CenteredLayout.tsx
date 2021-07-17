function CenteredLayout({children}: any): JSX.Element {
  return (
    <div className="flex justify-center items-center mx-auto my-0 h-screen">
      {children}
    </div>
  );
}

export default CenteredLayout;
