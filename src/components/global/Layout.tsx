

const Layout = ({children,}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div className="md:w-11/12 mx-auto">
        {children}
    </div>
  )
}

export default Layout