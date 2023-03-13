import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <>
    <div>
      Home Page
    </div>
    <button onClick={()=>navigate('order-summary', {replace: true})}>Place order</button>
    </>
  )
}

//use of useNavigate hook

//history stack
// if you want to replace the component on click with the new component so that
// on pressing back button at new component, it will not come back to the last component page,
// use {replace:true} as an argument in useNavigate hook. For eg: while dealing with order summary.
