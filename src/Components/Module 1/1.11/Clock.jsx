export default function Clock({ time }) {
  let hours = time.getHours();

  return (
    <>
      {hours >= 0 && hours <= 6 ? (
        <h1 className="night">{time.toLocaleTimeString()}</h1>
      ) : (
        <h1 className="day">{time.toLocaleTimeString()}</h1>
      )}
    </>
  );
}
