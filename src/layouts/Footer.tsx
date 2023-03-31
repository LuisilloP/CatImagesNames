import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='h-[6rem] dark:bg-cyan-700 items-center justify-center flex mt-5'>
            <NavLink to={"/Info"}>Informacion</NavLink>
        </div>
    )
}

export default Footer