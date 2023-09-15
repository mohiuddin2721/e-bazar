import React from 'react'
import Notice from './Notice'
import TopNav from './TopNav'
import MiddleNav from './MiddleNav'
import StickyNav from './StickyNav'

function Header() {
  return (
    <div>
      <Notice />
      <TopNav />
      <MiddleNav />
      <StickyNav />
    </div>
  )
}

export default Header