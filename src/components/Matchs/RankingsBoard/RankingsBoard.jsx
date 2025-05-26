import Table from '../../Tables/Table'

const RankingsBoard = () => {

    const teamsList =
        [
            {
                id: 1,
                teamName: 'Chalalas F.C',
                matchesPlayed: 0,
                matchesWins: 0,
                matchesDraws: 0,
                matchesLosses: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
                points : 0
            },
            {
                id: 2,
                teamName: 'Las Barza F.C',
                matchesPlayed: 0,
                matchesWins: 0,
                matchesDraws: 0,
                matchesLosses: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
                points: 0
            },
            {
                id: 3,
                teamName: 'Indepe Fem F.C',
                matchesPlayed: 0,
                matchesWins: 0,
                matchesDraws: 0,
                matchesLosses: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
                points: 0
            },
            {
                id: 4,
                teamName: 'Albicelestes F.C',
                matchesPlayed: 0,
                matchesWins: 0,
                matchesDraws: 0,
                matchesLosses: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
                points: 0
            },
            {
                id: 5,
                teamName: 'Indecisas F.C',
                matchesPlayed: 0,
                matchesWins: 0,
                matchesDraws: 0,
                matchesLosses: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
                points: 0
            }

        ];

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3>Tabla de posiciones</h3>
                        <div className="container-table-ranking">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Equipo</th>
                                        <th scope="col">PJ</th>
                                        <th scope="col">PG</th>
                                        <th scope="col">PE</th>
                                        <th scope="col">PP</th>
                                        <th scope="col">GF</th>
                                        <th scope="col">GC</th>
                                        <th scope="col">GD</th>
                                        <th scope="col">PTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        teamsList.map(( team, index ) => (
                                            <tr key={ index }>
                                                <td>{ team.id }</td>
                                                <td>{ team.teamName }</td>
                                                <td>{ team.matchesPlayed }</td>
                                                <td>{ team.matchesWins }</td>
                                                <td>{ team.matchesDraws }</td>
                                                <td>{ team.matchesLosses }</td>
                                                <td>{ team.goalsFor }</td>
                                                <td>{ team.goalsAgainst }</td>
                                                <td>{ team.goalDifference }</td>
                                                <td>{ team.points }</td>
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

export default RankingsBoard;