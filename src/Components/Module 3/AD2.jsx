import { useState } from "react";

const initialItems = [
  { title: "BBQ FIsh", id: 0 },
  { title: "Chicken Broast", id: 1 },
  { title: "Grill chicken", id: 2 },
];

export default function AD2() {
  const [items, setItems] = useState(initialItems);
  //   const [selectedItem, setSelectedItem] = useState(items[0]);
  const [selectedId, setSelectedId] = useState(0);
  //derived state
  const selectedItem = items.find((item) => item.id === selectedId);

  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>Whats your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li className="mb-2" key={item.id}>
            <input
              className="border border-indigo-600"
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}</p>
    </>
  );
}
