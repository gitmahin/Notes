import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
            <ul className="menu">
                {/* if isActive is true the classname will be active */}
                {/* in NavLink we have to use "to" instead of "href" */}
                <NavLink to={'/dashboard'} className={(e) =>{return e.isActive? 'active': ''}} ><li>Dashboard</li></NavLink>
                <NavLink to={'/'} className={(e) =>{return e.isActive? 'active': ''}} ><li>Home</li></NavLink>
                <NavLink to={'/blog'} className={(e) =>{return e.isActive? 'active': ''}} ><li>Blog</li></NavLink>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Header
