import React from 'react'
import { NavLink } from 'react-router-dom'
import cat from "/cat.svg"


const Header = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-cyan-700">
                <div className=" flex flex-wrap items-center justify-between mx-auto px-2 lg:p-4">
                    <NavLink className={"flex items-center gap-2 z-10"} to={"/"}>
                        <img src={cat}></img> Gatos Api Luis Dev </NavLink>
                    <input type='checkbox' name='hamburger' id='hamburger' className='peer' hidden />
                    <label htmlFor='hamburger' className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'>
                        <div aria-hidden='true' className='m-auto h-0.5 w-6 rounded bg-gray-300 transition duration-300' />
                        <div aria-hidden='true' className='m-auto mt-2 h-0.5 w-6 rounded bg-gray-300 transition duration-300' />
                    </label>
                    <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0" id="navbar-default">
                        <div className='flex flex-col h-full justify-between lg:items-center lg:flex-row dark:bg-cyan-700 z-20'>
                            <ul className='pt-32 text-gray-300 space-y-8  lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0'>
                                <li>

                                    <NavLink to={"/"}>
                                        <input type='checkbox' name='hamburger' id='hamburger' className='peer' hidden />
                                        Gatos Nombre Aleatorio</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/MyName"}>Gato Aleatorio por nombre</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/Infinite"}>Gatos <span>∞</span></NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header