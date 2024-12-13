export default function Scientists() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "lrWQx8l",
    },
  ];

  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  const chemists = people.filter((person) => person.profession === "chemist");
  const chemistList = chemists.map((chemist) => (
    <li key={chemist.id}>
      <img src={getImageUrl(chemist)} alt={chemist.name} />
      <p>
        <b>{chemist.name}:</b>
        {" " + chemist.profession + " "}
        known for {chemist.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
      <h1>Chemists</h1>
      <ul>{chemistList}</ul>
    </article>
  );
}
