import React from 'react'
import { hotels } from './ProjectData'
import './style.css'
import HandelCar from './HandelCar'
function Project() {
    return (
        <div className="container">
            {hotels.map((val) => (
                <div className='card' key={val.id}>
                    <img src={val.img} alt="" />
                    <p><span>HotelName:</span> {val.name}</p>
                    <p><span>PricePerNight:</span>{val.price}</p>
                    <p><span>AboutHotel:</span>{val.description}</p>
                    <p><span>Rate:</span>{val.category}</p>
                    <HandelCar/>
                </div>
            ))}
        </div>
    )
}
export default Project;