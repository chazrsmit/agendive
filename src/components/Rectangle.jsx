import './rectangle.css'

export default function Rectangle({ titre, lieu, type, type2, couleur }) {
    // prendre en props le duo de couleurs, le titre de l'event, le lieu, type d'event
    // pour les couleurs de chaque rectangle, elle serait générée selon un ordre : par exemple, en ayant un set de 3 duos de couleurs, ces couleurs seraient appliquées dans l'ordre. 

    return(
        <>
            <div className={`rectangle ${couleur}`}>
                <div className="left">
                    <h2 className="title">
                        {titre}
                    </h2>
                </div>
                <div className="right">
                    <h3>
                        {lieu}
                    </h3>
                    <div className="tags">
                        <h4>
                            {type}
                        </h4>
                        <h4>{type2}

                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}