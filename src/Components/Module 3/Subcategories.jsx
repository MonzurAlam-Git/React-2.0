// import "../Module 3/AvoidDeepNestedState.css";

export default function Subcategories({ id, placeByID, onRemove, parentId }) {
  const place = placeByID[id];
  const childIDs = place.childIds;

  return (
    <li>
      {place.title}
      <button
        onClick={() => onRemove(id, parentId)}
        className="btn btn-error text-white w-8 m-2"
      >
        X
      </button>
      {childIDs.length > 0 && (
        <ol className="list-disc">
          {childIDs.map((childID) => (
            <li key={childID}>
              <Subcategories
                id={childID}
                placeByID={placeByID}
                onRemove={onRemove}
                parentId={id}
              ></Subcategories>
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}
