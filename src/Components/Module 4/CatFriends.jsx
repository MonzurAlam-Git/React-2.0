import { useRef, useState } from "react";

export default function CatFriends() {
  function setupCatList() {
    const catList = [];
    for (let i = 0; i < 20; i++) {
      catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
    }

    return catList;
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
      console.log("itemsRef.current from scratch", itemsRef.current);
    }
    console.log("itemsRef.current", itemsRef.current);
    return itemsRef.current;
  }

  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(catSerial) {
    // retrieving the whole catList from the Map and scrolling it into view.
    const map = getMap();

    const node = map.get(catSerial);

    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
      border: "1px solid red",
    });
  }

  return (
    <>
      <nav className="flex justify-center space-x-4">
        <button
          className="btn btn-primary"
          onClick={() => scrollToCat(catList[10])}
        >
          Neo
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => scrollToCat(catList[14])}
        >
          Millie
        </button>
        <button
          className="btn btn-error"
          onClick={() => scrollToCat(catList[19])}
        >
          Bella
        </button>
      </nav>
      <div>
        <ul className="grid grid-cols-1 justify-center gap-2">
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                const map = getMap();
                map.set(cat, node);
                {
                  /* React will call when the component unmounts or when the ref is reassigned to a different node. */
                }
                return () => {
                  console.log("deleting");
                  map.delete(cat);
                };
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
