import React from 'react'
import { Route, Routes as RoutesContiner } from 'react-router-dom'
import Principal from './pages/Principal'
import MyName from './pages/MyName'
import Infinite from './pages/Infinite'
const Routes = (): JSX.Element => {
    return (
        <>
            <div className=' min-h-screen mx-5 rounded'>
                <RoutesContiner>
                    <Route path='/' element={<Principal />}></Route>
                    <Route path='/MyName' element={<MyName />}></Route>
                    <Route path='/Infinite' element={<Infinite />}></Route>
                </RoutesContiner>
            </div>
        </>
    )
}

export default Routes