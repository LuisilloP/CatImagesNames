import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useImageCatName from '../hooks/useImageCatName'
import ChargeCats from '../components/ChargeCats'
import SpinnerCharge from '../components/SpinnerCharge'
const Infinite = () => {
    const { urlCat, setNNames } = useImageCatName(false)
    const { ref, inView } = useInView({})
    useEffect(() => {
        setTimeout(() => {
            const dataNamesReload = inView ? 3 : 4
            setNNames(dataNamesReload)
        }, 1500);



    }, [inView])
    return (
        <div className='py-5'>
            <h1 className='pb-5 text-center text-2xl'>Gatos infinitos!!!</h1>
            <ChargeCats CatArray={urlCat} NumberImg={0}></ChargeCats>
            {inView ? <SpinnerCharge /> : ""}
            <div ref={ref}>{ }</div>
        </div>
    )
}

export default Infinite