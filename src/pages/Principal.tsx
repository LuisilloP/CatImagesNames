import React, { useEffect, useState } from 'react'
import useImageCatName from '../hooks/useImageCatName'
const Principal = () => {
    const [number, setNumber] = useState<number>(0)
    const { urlCat, setNNames } = useImageCatName(true)
    useEffect(() => {
        setNNames(number)

    }, [number])

    return (
        <div>
            <div className='flex justify-center gap-4 pt-8'>
                <label>Random cats by name</label>
                <select onChange={(event) => { setNumber(parseInt(event.target.value)) }}>
                    <option>0</option>
                    <option>1</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                </select>
            </div>
            <div className='flex flex-col md:grid grid-cols-99 gap-7 '>
                {urlCat ? urlCat.map((url, i) => <div key={i} className="" > <img src={url + ""} className="object-cover w-full  h-[25rem] md:min-w-[25rem]" loading="lazy" /></div>) : <p></p>}
            </div>
        </div >
    )
}

export default Principal