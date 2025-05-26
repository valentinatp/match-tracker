const Card = (props) => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Fecha 3</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary text-center">Campeonato Todas juntas a la gloria</h6>
                <div className="rivals">
                    <div className="local-team">
                        <img src={props.imageTeamLocal} alt="Escudo equipo" />
                        <p>{props.nameTeamLocal}</p>
                    </div>
                    <div className="versus">
                        V/S
                    </div>
                    <div className="visit-team">
                        <img src={props.imageTeamVisit} alt="Escudo equipo" />
                        <p>{props.nameTeamVisit}</p>
                    </div>
                </div>
                <h6 className="card-subtitle mb-2 text-body-secondary text-center">{props.date}</h6>
            </div>
        </div>
    )
}
export default Card;