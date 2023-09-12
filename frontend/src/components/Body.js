import React from 'react'

function Body() {
    return (
        <div
            className="
            w-56 ml-20 bg-white mt-3 flex
            content-center rounded-xl overflow-hidden justify-center 
            "
        >
            <div className='bg-blak w-full'></div>
            <img
                className="h-7 w-7 rounded-full "
                src={process.env.PUBLIC_URL + "/images/pedro.jpg"}
                alt="me"
            />
        </div>
    )
}

export default Body
