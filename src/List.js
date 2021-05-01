const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age } = person;
        return (
          <article key={id} className="person">
            <div>
              <h1>{name}</h1>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
