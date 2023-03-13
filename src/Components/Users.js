import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export default function Users() {

    const [searchParam,setSearchParam] = useSearchParams()
    const showActiveUsers = searchParam.get('filter') === 'active'
  return (
    <div>
      <h2>user 1</h2>
      <h2>user 2</h2>
      <h2>user 3</h2>
      <Outlet/>
      <div>
        <button onClick={()=>{setSearchParam({filter:'active'})}}>Active Users</button>
        <button onClick={()=>{setSearchParam({})}}>Reset</button>
      </div>
      <div>
        {showActiveUsers?<h2>Showing active users</h2>:<h2>Showing all users</h2>}
      </div>
    </div>
  )
}
