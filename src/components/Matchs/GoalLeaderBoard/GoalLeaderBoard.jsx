import Table from "../../Tables/Table"

const GoalLeaderBoard = () => {
    const goldenPlayer = [ 
        {
            id : 1,
            namePlayer : 'Maricela Silva',
            nameTeam : 'Las Barza',
            totalGoals : 9
        },
        {
            id : 2,
            namePlayer : 'Gabriela Toledo',
            nameTeam : 'Albiceleste',
            totalGoals : 5
        },
        {
            id : 3,
            namePlayer : 'Dessire Perez',
            nameTeam : 'Las Barza',
            totalGoals : 5
        },
        {
            id : 4,
            namePlayer : 'Valeria Herrera',
            nameTeam : 'Las Barza',
            totalGoals : 4
        },
        {
            id : 5,
            namePlayer : 'Cristina Garrido',
            nameTeam : 'Las barza',
            totalGoals : 4
        },
        {
            id : 6,
            namePlayer : 'Romina Robles',
            nameTeam : 'Albiceleste',
            totalGoals : 3
        },
        {
            id : 7,
            namePlayer : 'Susan Silva',
            nameTeam : 'Las Barza',
            totalGoals : 3
        },
        {
            id : 8,
            namePlayer : 'Patricia Veloso',
            nameTeam : 'Indecisas',
            totalGoals : 2
        },
        {
            id : 9,
            namePlayer : 'Myshico López',
            nameTeam : 'Las Barza',
            totalGoals : 2
        },
        {
            id : 10,
            namePlayer : 'Maria Hidalgo',
            nameTeam : 'Albiceleste',
            totalGoals : 2
        }

     ];
    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3>Tabla de goleadoras</h3>
                        <div className="container-table-ranking">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Jugadora</th>
                                        <th scope="col">Equipo</th>
                                        <th scope="col">Goles</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        goldenPlayer.map(( player, index ) => (
                                            <tr key={index}>
                                                <td>{ player.id }</td>
                                                <td>{ player.namePlayer }</td>
                                                <td>{ player.nameTeam }</td>
                                                <td>{ player.totalGoals }</td>
                                            </tr>
                                        ))
                                    }                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GoalLeaderBoard;