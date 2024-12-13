import useSTa=
export default function Item({ name, isPacked }) {
  
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}
