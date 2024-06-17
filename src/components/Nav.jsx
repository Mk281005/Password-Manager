import React from 'react'

function Nav() {
  return (
   <nav className='flex gap-4 justify-between p-2 text-slate-50'>
    <div className='logo font-bold position: relative left-20'> <span className="text-green-600">i</span>PassManage</div>
    <ul>
    <li className='flex gap-3 position: relative right-20'>
        <a className='hover:font-bold' href="">Home</a>
        <a className='hover:font-bold' href="">About</a>
        <a className='hover:font-bold' href="">Contact</a>
    </li></ul>
   </nav>
  )
}

export default Nav
