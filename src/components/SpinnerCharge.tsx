import React from 'react'

const SpinnerCharge = () => {
    return (
        <div className='flex justify-center pt-5'>
            <div
                className="inline-block h-28 w-28 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-cyan-500"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading</span>
            </div>
        </div>
    )
}

export default SpinnerCharge