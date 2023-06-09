import Person from "./Person";

const List = ({ people }) => {
  return (
    <section>
      <h3>{people.length} birthday today</h3>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
export default List;
