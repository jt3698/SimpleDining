import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Orders',
    to: '/orders',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info'
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Reviews']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Food',
    to: '/food',
    icon: <CIcon name="cil-dog" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Service',
    to: '/service',
    icon: <CIcon name="cil-dog" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ambience',
    to: '/ambience',
    icon: <CIcon name="cil-dog" customClasses="c-sidebar-nav-icon"/>
  }
]

export default _nav
