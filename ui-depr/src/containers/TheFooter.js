import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="mfs-auto">
        Copyright © 2021 by CoolCode
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
