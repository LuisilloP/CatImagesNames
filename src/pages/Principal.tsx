import React, { useEffect, useState } from 'react'
import useImageCatName from '../hooks/useImageCatName'
import ChargeCats from '../components/ChargeCats'
const Principal = () => {
    const [number, setNumber] = useState<number>(0)
    const { urlCat, setNNames } = useImageCatName(true)
    useEffect(() => {
        console.log(number)
        if (number >= 1) {
            setNNames(number)
        }
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
            <ChargeCats CatArray={urlCat} NumberImg={number}></ChargeCats>
        </div >
    )
}

export default Principal