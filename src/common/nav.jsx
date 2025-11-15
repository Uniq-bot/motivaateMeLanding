import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate=useNavigate()
    const navItem=[{
        item:'Home',
        navigate:'/'
    },{
        item:'Idea',
        navigate:'/idea'
    },{
        item:'About',
        navigate:'/about'
    },{
        item:'Contact',
        navigate:'/contact'
    }]
  return (
    <div className='flex  top-0 z-50 gap-105 text-white h-25 w-full items-center py-3 px-10'>
        <div className='w-15 h-15 rounded-full overflow-hidden'>
            <img src='/image.png' alt='logo' className='w-full h-full' />
        </div>
        <div className='flex w-130 bg-white/40 justify-between px-5 py-4 rounded-full list-none gap-5'>
            {navItem.map((item, index)=>{
                return(
                    <li onClick={()=>navigate(`${item.navigate}`)} className='uppercase text-[20px] font-mono leading-none hover:cursor-pointer hover:text-gray-200 transition-all' key={index}>{item.item}</li>
                )
            })}
        </div>
    </div>
  )
}

export default Nav
