import React, { useEffect, useState } from 'react'
import useImageCatName from '../hooks/useImageCatName'
const MyName = () => {
    const { urlCat, setMyName } = useImageCatName(true)
    const [btn, setBtn] = useState<boolean>(false)
    const inputName = document.querySelector('[name="name"]') as HTMLInputElement
    useEffect(() => {
        //ssetMyName()
        if (inputName?.value) {
            setMyName(inputName.value)
            console.log("cambio nombre " + inputName.value)
        }
    }, [btn])


    return (
        <div className=''>
            <h1>Gato prr mi nombre</h1>
            <div>
                <input type={"text"} name="name"></input>
                <input type={"submit"} onClick={() => {
                    if (inputName) {
                        setBtn(!btn)
                    }
                }} ></input>
                {urlCat ? urlCat.map((url, i) => <div key={i}> <img src={url + ""} loading="lazy" /></div>) : <p></p>}
            </div>
        </div >

    )
}

export default MyName