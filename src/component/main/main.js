/* eslint-disable react/prop-types */
import React from 'react'

const Main = (props) => {
    return (
        <div className="h-screen w-screen">
            <div>{props.children}</div>
        </div>
    )
}

export default Main
