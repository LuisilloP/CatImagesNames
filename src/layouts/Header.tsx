import React from 'react'
import { NavLink } from 'react-router-dom'
import cat from "/cat.svg"



const Header = () => {

    const urls: string[][] = [["/", "Gatos Nombre Aleatorio"], ["/MyName", "Gato Aleatorio por nombre"], ["/Infinite", "Gatos ∞"]]
    return (
        < header className='header sticky top-0 bg-cyan-700 shadow-md flex items-center justify-between px-8 py-02 font-montserrat  h-14 z-10' >
            <NavLink className={"flex items-center gap-2 z-10"} to={"/"}>
                <img src={cat}></img> Gatos Api Luis Dev
            </NavLink>
            <input type='checkbox' name='hamburger' id='hamburger' className='peer' hidden />
            <label htmlFor='hamburger' className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'>
                <div aria-hidden='true' className='m-auto h-0.5 w-6 rounded bg-gray-700 transition duration-300' />
                <div aria-hidden='true' className='m-auto mt-2 h-0.5 w-6 rounded bg-gray-700 transition duration-300' />
            </label>
            <div className='navigation-bar peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-cyan-700 border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0'>
                <div className='flex flex-col h-full justify-between lg:items-center lg:flex-row'>
                    <ul className='pt-32 text-gray-300 space-y-8  lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0'>
                        {urls.map(value => (
                            <li className='border-b border-gray-700  lg:border-none' key={value[0] + 1}>
                                <NavLink to={value[0]} className='hover:text-gray-200 px-12 lg:px-0  '>{value[1]} </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </header >
    )


}

export default Header