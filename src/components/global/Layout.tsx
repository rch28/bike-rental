

const Layout = ({children,}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div className="w-11/12 xl:w-[1200px] mx-auto">
        {children}
    </div>
  )
}

export default Layout