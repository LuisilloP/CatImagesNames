import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useImageCatName from '../hooks/useImageCatName'
const Infinite = () => {
    const { urlCat, setNNames } = useImageCatName(false)
    const { ref, inView } = useInView({})
    useEffect(() => {
        const dataNamesReload = inView ? 10 : 9
        setNNames(dataNamesReload)
    }, [inView])
    return (
        <div>
            <div className='flex flex-col md:grid grid-cols-99 gap-7 '>
                {urlCat ? urlCat.map((url, i) => (
                    <div key={i} className="" >
                        <img src={url + ""} className="object-cover w-full  h-[25rem] md:min-w-[25rem]" loading="lazy" />
                        {urlCat.length - 1 === i ? <div ref={ref}>{ }</div> : ""}
                    </div>)) : <p></p>}
            </div>
        </div>
    )
}

export default Infinite