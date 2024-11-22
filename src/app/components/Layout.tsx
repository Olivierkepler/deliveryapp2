import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />
      {/* Main content area */}
      <main className="flex-grow">{children}</main>
      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}

export default Layout
