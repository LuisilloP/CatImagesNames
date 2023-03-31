import React from 'react'


const Info = () => {
    const urlCat: string = import.meta.env.VITE_URL_IMAGECAT
    const urlNames: string = import.meta.env.VITE_URL_RANDOMNAME
    return (
        <div className=''>
            <h1 className=' text-3xl'>Info</h1>
            <div>
                <h1 className=' text-2xl'>Instrucciones de uso Api gatos</h1>
                <br />
                <p><span className=' text-xl'>Página principal</span><br /> En esta se encuentra la función de generar imágenes gatos por una cantidad delimitada por el sistema, si se presiona una cantidad los gatos se generarán con sus respectivos nombres aleatorios.<br /><br />
                    <span className=' text-xl'>Pagina gato por nombre</span> <br /> Posee una entrada en la cual si se escribe una letra o nombre se generará una imagen de un gato aleatorio con dicho nombre impreso en la imagen.<br /><br />
                    <span className=' text-xl'>Pagina gatos ∞</span> <br />
                    Esta pagina generara imágenes de gatos con sus respectivos nombres aleatorios de manera “ilimitada” al scrollear hacia abajo.<br /><br />
                </p>
            </div>
            <p></p>
            <div><p>
                Esta es una api creada para prueba de fetching específicamente a generadores aleatorios, usando <span className=' text-white underline
                '>{urlNames}</span> para la generación de nombres y <span className=' text-white underline'>{urlCat} </span>para la generación de imágenes de gatos a partir de un nombre en el cual se varia la imagen de igual manera, todo esto aplicando en hooks reutilizables y funciones reutilizables. También se realizó test e2e para probar el renderizado de la pagina y testing de la misma aplicación utilizando cypress.
                El uso del api son para su respectivo testeo, sin fines de lucro.
            </p></div>
        </div>
    )
}

export default Info