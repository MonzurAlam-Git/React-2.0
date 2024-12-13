import { useState } from "react";
import "../../Module 3/AvoidDeepNestedState.css";
import SubProducts from "./SubProducts";

export default function Cart() {
  const initialCategories = {
    0: { id: 0, title: "All Categories", childIds: [1, 2, 3] },
    1: { id: 1, title: "Electronics", childIds: [4, 5, 10] },
    2: { id: 2, title: "Fashion", childIds: [6, 7, 11] },
    3: { id: 3, title: "Home & Kitchen", childIds: [8, 9, 12] },
    4: { id: 4, title: "Mobile Phones", childIds: [13, 14] },
    5: { id: 5, title: "Computers", childIds: [15, 16] },
    6: { id: 6, title: "Men's Clothing", childIds: [17] },
    7: { id: 7, title: "Women's Clothing", childIds: [18] },
    8: { id: 8, title: "Furniture", childIds: [19] },
    9: { id: 9, title: "Kitchen Essentials", childIds: [20] },
    10: { id: 10, title: "Accessories", childIds: [21, 22] },
    11: { id: 11, title: "Kids' Fashion", childIds: [23] },
    12: { id: 12, title: "Decor", childIds: [24, 25] },
    13: { id: 13, title: "iPhones", childIds: [] },
    14: { id: 14, title: "Samsung Galaxy", childIds: [] },
    15: { id: 15, title: "Gaming Laptops", childIds: [] },
    16: { id: 16, title: "MacBooks", childIds: [] },
    17: { id: 17, title: "Formal Suits", childIds: [] },
    18: { id: 18, title: "Evening Gowns", childIds: [] },
    19: { id: 19, title: "Office Chairs", childIds: [] },
    20: { id: 20, title: "Cookware Sets", childIds: [26, 27] },
    21: { id: 21, title: "Wireless Earbuds", childIds: [] },
    22: { id: 22, title: "Portable Power Banks", childIds: [] },
    23: { id: 23, title: "Action Figures", childIds: [] },
    24: { id: 24, title: "Canvas Paintings", childIds: [] },
    25: { id: 25, title: "Table Lamps", childIds: [] },
    26: { id: 26, title: "Non-stick Pans", childIds: [] },
    27: { id: 27, title: "Pressure Cookers", childIds: [] },
  };

  const [products, setProducts] = useState(initialCategories);

  const handleRemove = (parentId, clickId) => {
    const parent = products[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((childId) => childId !== clickId),
    };

    setProducts({
      ...products,
      [parentId]: nextParent,
    });
  };

  const root = products[0];
  const childs = root.childIds;

  return (
    <ol className="list-decimal ml-5 flex  flex-col items-center">
      {childs.map((childId) => (
        <SubProducts
          key={childId}
          childId={childId}
          parentId={0}
          products={products}
          onRemove={handleRemove}
        />
      ))}
    </ol>
  );
}
