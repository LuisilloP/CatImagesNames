import { useEffect, useState } from 'react'

const useRandomName = () => {
    const [names, setNames] = useState<any[]>([]);
    const [nNames, setNNames] = useState(0)
    useEffect(() => {
        console.log(nNames)
        if (nNames != 0) {
            fetch(`https://randomuser.me/api/?results=${nNames}`)
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