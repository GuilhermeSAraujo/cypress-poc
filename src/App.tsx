import { useState } from "react";
import "./App.css";
import cypressLogo from "./assets/cypress.svg";
import reactLogo from "./assets/react.svg";
import { ModalAddPerson } from "./components/modalAddPerson";
import { PeopleList } from "./components/peopleList";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [people, setPeople] = useState([
    {
      id: 1,
      name: "João da Silva",
    },
    {
      id: 2,
      name: "Maria dos Santos",
    },
    {
      id: 3,
      name: "Givanildo Vieira",
    },
  ]);

  function addPerson(name: string) {
    if (name) {
      const newId = people.length === 0 ? 1 : people[people.length - 1].id + 1;
      setPeople([
        ...people,
        {
          id: newId,
          name: name,
        },
      ]);
      setModalOpen(false);
    }
  }

  function removePerson(id: number) {
    setPeople(people.filter((person) => person.id !== id));
  }

  return (
    <>
      <ModalAddPerson
        addPerson={addPerson}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <div>
        <a href="https://cypress.io" target="_blank">
          <img src={cypressLogo} className="logo react" alt="Cypress logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Cypress + React</h1>
      <div style={{ paddingTop: 24 }}>
        <button onClick={() => setModalOpen(true)}>Adicionar pessoa</button>
        <PeopleList people={people} removePerson={removePerson} />
      </div>
    </>
  );
}

export default App;
