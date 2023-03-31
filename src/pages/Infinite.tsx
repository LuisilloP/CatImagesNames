import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useImageCatName from '../hooks/useImageCatName'
const Infinite = () => {
    const { urlCat, setNNames } = useImageCatName(false)
    const { ref, inView } = useInView({})
    useEffect(() => {
        setTimeout(() => {
            const dataNamesReload = inView ? 10 : 9
            setNNames(dataNamesReload)
        }, 1000)

    }, [inView])
    return (
        <div className='py-5'>
            <h1 className='pb-5 text-center text-2xl'>Gatos infinitos!!!</h1>
            <div className='flex flex-col md:grid grid-cols-99 gap-7 '>
                {urlCat ? urlCat.map((url, i) => (
                    <div key={i} className="" >
                        <img src={url + ""} className="object-cover w-full  h-[25rem] md:min-w-[25rem]" loading="lazy" />

                    </div>)) : <p></p>}
            </div>
            <div ref={ref}>{ }</div>
        </div>
    )
}

export default Infinite