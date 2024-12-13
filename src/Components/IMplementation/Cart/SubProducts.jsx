export default function SubProducts({ childId, parentId, products, onRemove }) {
  const product = products[childId];
  const childProduct = product.childIds;

  return (
    <li>
      {product.title} with ID : {product.id}
      <button
        onClick={() => onRemove(parentId, childId)}
        className="btn btn-error w-16 m-1"
      >
        Remove
      </button>
      {childProduct.length > 0 && (
        <ol className="list-[lower-roman] ml-5">
          {childProduct.map((product) => (
            <SubProducts
              key={product}
              childId={product}
              parentId={childId}
              products={products}
              onRemove={onRemove}
            ></SubProducts>
          ))}
        </ol>
      )}
    </li>
  );
}
