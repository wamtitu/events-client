import { Link} from "react-router-dom"
import '../styles/Navbarlanding.css'
import {CgEventbrite} from 'react-icons/cg'
import { useNavigate } from "react-router-dom"
import { Context } from "../context/usercontext"
import { useContext } from "react"
import {RxAvatar} from 'react-icons/rx'
//  import { useState, useEffect } from "react"

function Navbarlanding() {
  const {user, dispatch} = useContext(Context)
  
 const  navigate = useNavigate()

 const logout = () =>{
  dispatch({type: "logout"})
  navigate('/')

 }

  
  return (
    <div className="landing-nav">
        <h3><CgEventbrite/> HELLO<span>EVENTS</span></h3>
        <ul className="nav-bar">
          
            { user ===null ?(
            <>
            <li className="nav-links"><Link to='/'>Home</Link></li>
             <li className="nav-links"><Link to='/register'>Register</Link></li>
             <li className="nav-links"><Link to='/login'>Login</Link></li>
            </> ) :
            (
              <>
                <li className="nav-links"><Link to='/events'>Events</Link></li>
                <li><button onClick={logout}>logout</button></li>
                {/* <li className="avater">avatar</li> */}
              </>
            )
            }
             
            </ul>
            <div className="avater"><RxAvatar style={{color:'red', width: '40px', height:'40px'}}/></div>
    </div>
  )
}

export default Navbarlanding