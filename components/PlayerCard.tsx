import { User } from "../pages/interfaces/interfaces";
interface AppProps {
  user: User;
}

export default function PlayerCard({ user }: AppProps) {
  return (
    <>
      <div className="user-container" style={{ display: "flex" }}>
        <h2>{user.name}</h2>
        <img src={user.icon} alt="user icon" />
      </div>
      <h3>{user.gamesWon} Games Won</h3>
      <p></p>
    </>
  );
}
