interface verticalLayoutProps {
  children: any
}

function VerticalLayout({ children }: verticalLayoutProps): JSX.Element {
  return <div className="flex flex-col">{children}</div>
}

export default VerticalLayout;