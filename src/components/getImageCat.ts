
const getImageCat = (name: string) => {
    const urlImgCat = import.meta.env.VITE_URL_IMAGECAT
    const getCat = fetch(`${urlImgCat}/cat/says/${name}?json=true`)
        .then(res => res.json())
    return getCat
}


export default getImageCat