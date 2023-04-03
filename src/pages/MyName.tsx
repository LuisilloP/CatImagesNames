import React, { useEffect } from 'react'
import useImageCatName from '../hooks/useImageCatName'
import cat from "../../public/cat.svg"
import SpinnerCharge from '../components/SpinnerCharge'
import miauAudio from "../../public/cat-miau.mp3"
const MyName = () => {
    const { urlCat, setMyName, btn, setBtn } = useImageCatName(true)
    const audioMiau = new Audio(miauAudio)
    audioMiau.volume = 0.5
    const inputName = document.querySelector('[name="name"]') as HTMLInputElement
    useEffect(() => {
        if (inputName?.value) {
            setMyName(inputName.value)
        }
    }, [btn])


    return (
        <div className=''>

            <div className='flex justify-center gap-4 pt-8 pb-4 px-[10%] flex-col '>
                <h1 className='text-center text-2xl'>Gato prr mi nombre !!</h1>
                <input type={"text"} name="name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></input>
                <div >
                    <button type="submit" onClick={() => {
                        if (inputName) {
                            setBtn(!btn)
                            audioMiau.play()
                        }
                    }} className="text-white w-[13rem] h-[3rem] bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex gap-2 items-center ">  <img src={cat} />Buscar a mi gato!!!</button>
                </div>
                {urlCat[0] != undefined ? urlCat.map((url, i) => <div key={i}> <img src={url + ""} loading="lazy" /></div>) : inputName?.value ? <SpinnerCharge /> : ""}


            </div>
        </div >

    )
}

export default MyName