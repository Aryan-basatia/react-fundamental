export default function PlayerScore({ name, score, onIncrement }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{score}</p>
      {score > 5 && <h3>Winner</h3>}
      <button onClick={onIncrement}>Increase Score</button>
    </>
  );
}
