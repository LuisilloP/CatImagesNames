import { useEffect, useState } from 'react'
import useRandomName from './useRandomName'
import getImageCat from '../components/getImageCat'

const useImageCatName = (reset: boolean) => {
    const urlImgCat = import.meta.env.VITE_URL_IMAGECAT
    const [urlCat, setUrlCat] = useState<string[]>([])
    const { names, setNNames } = useRandomName();
    const [myName, setMyName] = useState<string>()
    const [btn, setBtn] = useState<boolean>(false)
    useEffect(() => {

        reset ? setUrlCat([]) : ""
        if (names) {

            names.map((name) => {
                getImageCat(name.name.first)
                    .then(data => {
                        setUrlCat(prev => [...prev, urlImgCat + data.url])
                    })
            })
        }
        if (myName) {
            getImageCat(myName)
                .then((data) => {
                    setUrlCat([urlImgCat + data.url])

                }).then()
        }
    }, [names, myName, btn])
    return { urlCat, setNNames, setMyName, btn, setBtn }
}

export default useImageCatName