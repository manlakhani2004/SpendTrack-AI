import { checkUser } from '@/lib/checkUser'
import React from 'react'

function Navbar() {
    const user = checkUser();
  return (
    <div>Navbar</div>
  )
}

export default Navbar