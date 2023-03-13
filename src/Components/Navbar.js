import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Navbar() {
    const navLinkStyles = ({isActive})=>{
        return {
            fontWeight: isActive? 'bold' : 'normal'
        }
    }
    const auth = useAuth()
  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyles} to='/'>Home</NavLink>
      <NavLink style={navLinkStyles} to='/about'>About</NavLink>
      <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
      <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
      {!auth.user && <NavLink style={navLinkStyles} to='/login'>Login</NavLink>}
    </nav>
  )
}

//NavLink provides class named active to the link which is clicked and we can style the active class accordingly.
// we can implement JS based styling as above as well, can also put the styling to active class in index.css or by making new css file.
