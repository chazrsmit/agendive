import './datebar.css'
import Svg from '../assets/art3.svg?react'


export default function Date({ date }) {

    return (

        <>
        <div className="datebar">
            <Svg />
            <Svg />
            <p>{date}</p>
        </div>
        </>
    )
}