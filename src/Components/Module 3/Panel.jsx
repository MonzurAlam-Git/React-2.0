export default function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className="btn btn-primary w-12 p-2" onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
