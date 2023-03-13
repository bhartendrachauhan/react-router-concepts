import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Products() {
  return (
    <>
    <div>
      <input type={'search'} placeholder='Search Products'/>
    </div>
    <nav>
      <Link to='featured'>featured</Link>
      {/*make sure you don't use the forward slash in links of nested routes
      because then it'll consider the link from root element [use relative links]*/}
      <Link to='new'>new</Link>
    </nav>
    <Outlet/>
    </>
  )
}
