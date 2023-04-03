import React from 'react'
import SpinnerCharge from './SpinnerCharge'

type Props =
    {
        CatArray: string[]
        NumberImg: number
    }

const ChargeCats = (props: Props) => {
    const { CatArray, NumberImg } = props
    return (
        <div className='flex flex-col md:grid grid-cols-99 gap-7 '>
            {CatArray.length >= 1 ? CatArray.map((url, i) => <div key={i} className="" > <img src={url + ""} className="object-cover w-full  h-[25rem] md:min-w-[25rem]" loading="lazy" /></div>) : NumberImg >= 1 ?
                (
                    <SpinnerCharge></SpinnerCharge>
                ) : ""}
        </div>
    )
}

export default ChargeCats