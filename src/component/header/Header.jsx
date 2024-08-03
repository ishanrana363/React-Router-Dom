import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' py-3' >
        <h1>header page</h1>
        <Link to={"/user"}  className='mx-5' >User</Link>
        <Link to={"/about"}   className='mx-5' >About</Link>
        <Link to={"/contact"}  Link className='mx-5'>Contack</Link>
        <Link to={"/posts"}  Link className='mx-5'>Posts</Link>
    </div>
  )
}

export default Header
