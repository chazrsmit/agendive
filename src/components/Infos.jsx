import './infos.css';

export default function Infos({ titre, lieu, type, type2, couleur, adresse, ville, description, photo, lien, insta, facebook }) {

    return (
        <>
        <div className="infos">
            <h2>{titre}</h2>
            <h3>@ {lieu}</h3>
        </div>
        </>
    )
}