import './infos.css';
import Svg2 from '../assets/svg3.svg?react'

export default function Infos({ titre, lieu, type, type2, couleur, adresse, ville, description, photo, lien, insta, facebook }) {

    return (
        <>
        <div className={`infos ${couleur}`}>
            <div className="infos-svg">
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
            </div>
            <div className="infos-textes">
                <h2>{titre}</h2>
                <h3>@ {lieu}</h3>
            </div>
            <div className="infos-svg2">
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
                <Svg2 />
            </div>
        </div>
        </>
    )
}