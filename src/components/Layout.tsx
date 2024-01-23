import { ReactNode } from "react"
import Footer from "./Footer"
import NavbarLogin from "./Navbarlogin"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <NavbarLogin />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
