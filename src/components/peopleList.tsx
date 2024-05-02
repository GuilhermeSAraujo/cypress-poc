interface PeopleListProps {
  people: {
    id: number;
    name: string;
  }[];
  removePerson: (id: number) => void;
}

export function PeopleList({ people, removePerson }: PeopleListProps) {
  return (
    <div style={{ paddingTop: 12 }}>
      <h2>Pessoas</h2>
      {people.length === 0 && (
        <p className="emptyList">Nenhuma pessoa na lista</p>
      )}
      {people.map((person) => (
        <div key={person.id} className="personItem">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => removePerson(person.id)}
          >
            {person.id} - {person.name}
          </span>
        </div>
      ))}
    </div>
  );
}
