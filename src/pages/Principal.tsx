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
            <div className='flex justify-center gap-4 pt-8 pb-4 px-[10%] flex-col'>
                <h1 className='text-center text-2xl'>Gatos por nombre Aleatorio !</h1>
                <label className='text-center text-md'>Elije la cantidad</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(event) => { setNumber(parseInt(event.target.value)) }}>
                    <option>0</option>
                    <option>3</option>
                    <option>6</option>
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