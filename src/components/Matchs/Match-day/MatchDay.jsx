import Card from "../../Card/Card";


import escudoChalala from "../../../assets/pictures/escudoChalalas.png"
import escudoAlbiceleste from "../../../assets/pictures/escudoAlbiceleste.png"
import escudoBarzas from "../../../assets/pictures/escudoBarzas.png"
import escudoIndepeFem from "../../../assets/pictures/escudoIndepefem.png"

const MatchDay = () => {
    return (
        <>
            <section>
                <h3 className="text-center mt-4">Programacion del dia</h3>
                <div className="match-day">
                    <Card imageTeamLocal={escudoChalala} nameTeamLocal={"Chalalas F.C"} imageTeamVisit={escudoAlbiceleste} nameTeamVisit={"Albiceleste F.C"} date="22 de Mayo a las 21:00HRS" />
                    <Card imageTeamLocal={escudoBarzas} nameTeamLocal={"Barzas F.C"} imageTeamVisit={escudoIndepeFem} nameTeamVisit={"Indepe Fem F.C"} date="22 de Mayo a las 22:00HRS" />
                </div>
            </section>
        </>
    )
}

export default MatchDay;