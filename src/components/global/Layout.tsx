

const Layout = ({children,}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto">
        {children}
    </div>
  )
}

export default Layout