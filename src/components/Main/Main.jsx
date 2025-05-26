import Matchs from "../Matchs/Matchs";
import RankingsBoard from "../Matchs/RankingsBoard/RankingsBoard";
import GoalLeaderBoard from "../Matchs/GoalLeaderBoard/GoalLeaderBoard";

const Main = () => {
  return (
    <main className="container-fluid">
      <Matchs />
      <RankingsBoard />
      <GoalLeaderBoard />
    </main>
  )
  }

export default Main;
