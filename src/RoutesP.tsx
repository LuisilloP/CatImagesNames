import React, { useEffect } from 'react'
import { Route, useLocation, Routes as RoutesContiner } from 'react-router-dom'
import Principal from './pages/Principal'
import MyName from './pages/MyName'
import Infinite from './pages/Infinite'
import Info from './pages/Info'
const Routes = (): JSX.Element => {
    const location = useLocation();
    useEffect(() => {
        const hamburger = document.querySelector("#hamburger") as HTMLInputElement
        hamburger.checked = false
        //ocultar menu
    }, [location])
    return (
        <>
            <div className=' min-h-screen mx-5 rounded text-gray-300 pt-[3.875rem]'>
                <RoutesContiner>
                    <Route path='/' element={<Principal />}></Route>
                    <Route path='/MyName' element={<MyName />}></Route>
                    <Route path='/Infinite' element={<Infinite />}></Route>
                    <Route path='/Info' element={<Info />}></Route>
                </RoutesContiner>
            </div>
        </>
    )
}

export default Routes