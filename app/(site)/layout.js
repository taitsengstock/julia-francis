import Sidebar from '../components/Sidebar'
import MobileNav from '../components/MobileNav'

export default function SiteLayout({ children }) {
  return (
    <>
      <div id="closing-layer" />
      <div id="index">
        <div className="container">
          <Sidebar />
        </div>
      </div>
      <div id="exhibit">
        <div className="container">
          {children}
        </div>
      </div>
      <MobileNav />
    </>
  )
}
