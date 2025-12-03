import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleAddition = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return
    }
    const newPerson = { name: newName, number: newNumber };
    setPersons([...persons, newPerson]);

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <form onSubmit={handleAddition}>
          <div>
            Name:{" "}
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
          </div>
          <div>
            number:{" "}
            <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
