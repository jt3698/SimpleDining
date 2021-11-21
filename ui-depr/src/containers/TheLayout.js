import React, { useState } from 'react'
import LoginPage from 'src/views/LoginPage/LoginPage'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
  const [login, setLogin] = useState(true)
  
  if(login){
    return <LoginPage onLogin={()=>setLogin(false)} />
  }

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
