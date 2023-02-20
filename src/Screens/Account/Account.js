import React from 'react'
import Create from '../../components/Create/Create'
import Gigs from '../../components/Gigs/Gigs'
import User from '../../components/User/User'

const Account = () => {
  return (
    <div>
        <Create/>
        <User/>
        <Gigs/>
    </div>
  )
}

export default Account