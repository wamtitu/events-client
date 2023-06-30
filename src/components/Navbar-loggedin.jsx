import { Link } from "react-router-dom"

function NavbarLoggedin() {
  return (
    <div className="loggedin-nav">
        <h3>HELLO what kind of events are you intrested in?</h3>
        <ul>
            <li><Link to='/'>Events</Link></li>
            <li><Link to='/online events'>online</Link></li>
            <li><Link to='/onsight events'>concerts&live events</Link></li>
        </ul>
    </div>
  )
}

export default NavbarLoggedin