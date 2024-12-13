import { useState } from "react";

export default function AvoidDuplication() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
  ]);

  const [selectedItemId, setSelectedItemId] = useState(null); // Just the id!

  function handleSelect(id) {
    setSelectedItemId(id); // Only store the id
  }

  const selectedItem = items.find((item) => item.id === selectedItemId); // Derive the item

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <span className="border border-red-400 bg-red-500 p-2 mb-5">
            {item.name}
          </span>
          <button
            className="btn btn-secondary ml-5"
            onClick={() => handleSelect(item.id)}
          >
            Select
          </button>
        </div>
      ))}
      {selectedItem && <p>Selected: {selectedItem.name}</p>}
    </div>
  );
}
