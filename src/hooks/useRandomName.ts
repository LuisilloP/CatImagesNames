import { useEffect, useState } from 'react'

const useRandomName = () => {
    const [names, setNames] = useState<any[]>([]);
    const randomUserUrl = import.meta.env.VITE_URL_RANDOMNAME
    const [nNames, setNNames] = useState(0)
    useEffect(() => {

        if (nNames != 0) {
            fetch(`${randomUserUrl}/api/?results=${nNames}`)
                .then(res => res.json())
                .then((data) => {
                    setNames(data.results)

                })
        }

    }, [nNames])
    return {
        names, setNNames
    }
}
export default useRandomName