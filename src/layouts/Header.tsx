import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {
    return (
        <div>
            <nav className=' flex place-content-around bg-cyan-700 h-14 justify-centere items-center
             '>
                <NavLink to={"/"}>Gatos randoms por cantidad</NavLink>
                <NavLink to={"/MyName"}>Gato random por nombre</NavLink>
                <NavLink to={"/Infinite"}>Gatos sin limiteeeeee</NavLink>
            </nav>
        </div>
    )
}

export default Header