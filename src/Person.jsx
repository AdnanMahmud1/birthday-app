import data from "./data";

const Person = () => {
  console.log(data);
  return (
    <>
      <h3>{data.length} birthday today</h3>
      {data.map((person) => {
        return (
          <div key={person.id}>
            <img
              style={{ height: "150px", width: "150px" }}
              src={person.image}
              alt={person.name}
              className="img"
            />
            <h5>{person.name}</h5>
            <p>{person.age} years old</p>
          </div>
        );
      })}
    </>
  );
};
export default Person;
