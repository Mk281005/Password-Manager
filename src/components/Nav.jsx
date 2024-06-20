import React from 'react'

function Nav() {
  return (
   <nav className='flex gap-4 justify-between p-2 text-slate-50'>
    <div className='logo text-xl font-bold position: relative left-20'> <span className="text-green-600">i</span>PassManage</div>
    {/* <ul>
    <li className='flex gap-3 position: relative right-20'>
        <a className='hover:font-bold' href="">Home</a>
        <a className='hover:font-bold' href="">About</a>
        <a className='hover:font-bold' href="">Contact</a>
    </li></ul> */}
    <div className=" hover:font-bold   font-semibold w-32 rounded-full flex relative h-10 right-32 gap-2 justify-center items-center cursor-pointer ring-2 ring-green-400">
        <a href="https://github.com/Mk281005/Password-Manager" className="flex items-center gap-2">
          <img src="/src/assets/github.png" className="w-8" alt="GitHub" />
          <span>/GitHub</span>
        </a>
      </div>
   </nav>
  )
}

export default Nav
