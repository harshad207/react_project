import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import "../loader/Loader.css"

const Loader = (props) => {
    return (
        <div className='div'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                visible={props.loading}
                wrapperClass="loader"
            />




        </div>
    )
}

export default Loader

