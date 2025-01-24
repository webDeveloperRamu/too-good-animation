"use cleint"
import React, { forwardRef } from 'react'
import Image from "next/image";


const Card = forwardRef(({ id, cardImage, cardAlt, backText }, ref) => {
    return (
        <div className="card" id={id} ref={ref}>
            <div className="card-wrapper">
                <div className="flip-inner">
                    <div className="flip-front">
                        <Image width={300} height={300} src={cardImage} priority alt={cardAlt} />
                    </div>
                    <div className="card-backText">
                        <p dangerouslySetInnerHTML={{__html:backText}}></p>
                    </div>
                </div>
            </div>
        </div>
    )
})


export default Card