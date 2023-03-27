import React from 'react'
import _Header from './Header'
import Menu from './Menu'
import Selecter from './Selecter'
import { Outlet } from 'react-router-dom'

function _Layout() {
  return (
    <React.Fragment>
      <_Header/>
      <Menu/>
      <Outlet/>
      <Selecter/>
    </React.Fragment>
  )
}

export default _Layout

