import Card from "../../Card/Card";


import escudoChalalas from "../../../assets/pictures/escudoChalalas.jpg"
import escudoAlbiceleste from "../../../assets/pictures/escudoAlbicelestes.jpg"
import escudoBarzas from "../../../assets/pictures/escudoLasBarza.jpg"
import escudoIndepeFem from "../../../assets/pictures/escudoIndepefem.jpg"
import escudoIndecisas from "../../../assets/pictures/escudoIndecisas.jpg"

const MatchDay = () => {
    return (
        <>
            <section>
                <h3 className="text-center mt-4">Programacion del dia</h3>
                <div className="match-day">
                    <Card imageTeamLocal={escudoAlbiceleste} nameTeamLocal={"Albiceleste"} />
                    <Card imageTeamLocal={escudoIndecisas} nameTeamLocal={"Indecisas"} imageTeamVisit={escudoBarzas} nameTeamVisit={"Las Barza"} date="29 de Mayo a las 21:00HRS" />
                    <Card imageTeamLocal={escudoIndepeFem} nameTeamLocal={"Indepe Fem"} imageTeamVisit={escudoChalalas} nameTeamVisit={"Chalalas F.C"} date="29 de Mayo a las 22:00HRS" />
                </div>
            </section>
        </>
    )
}

export default MatchDay;