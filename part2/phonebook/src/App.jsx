import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";

/**
 * The main application component.
 * This component displays a list of persons, a form to add a new person, and a filter to filter the list of persons.
 * The component also handles the deletion of a person and the addition of a new person.
 * @returns {JSX.Element} A JSX element representing the App component.
 */
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleFilterChange = (e) => setFilter(e.target.value);

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
/**
 * Handles the deletion of a person from the list.
 * It prompts the user for confirmation before deleting the person.
 * If the user confirms, it removes the person from the list by calling the remove function from the person service and updating the state with the new list of persons.
 * @param {Object} person - The person to be deleted.
 */
  const handleDelete = (person) => {
    if (!window.confirm(`Delete ${person.name}?`)) {
      return;
    }

    personService.remove(person.id).then(() => {
      setPersons((current) => current.filter((p) => p.id !== person.id));
    });
  };

/**
 * Handles the addition of a new person to the list.
 * If the person already exists, it prompts the user for confirmation before updating the person's number.
 * If the user confirms, it updates the person's number by calling the update function from the person service and updating the state with the new list of persons.
 * If the person does not already exist, it creates a new person by calling the create function from the person service and updating the state with the new list of persons.
 * Finally, it resets the new name and number to empty strings.
 */
  const handleAddition = (e) => {
    e.preventDefault();

    const duplicate = persons.find(({ name }) => name === newName);
    if (duplicate) {
      const confirmReplace = window.confirm(
        `${newName} is already added, replace the old number with a new one?`
      );
      if (!confirmReplace) return;

      const updatedPerson = { ...duplicate, number: newNumber };
      personService.update(duplicate.id, updatedPerson).then((updated) => {
        setPersons((current) =>
          current.map((person) =>
            person.id !== duplicate.id ? person : updated
          )
        );
      });
    }
    else {
      const newPerson = { name: newName, number: newNumber };
      personService.create(newPerson).then((created) => {
        setPersons((current) => current.concat(created));
      });
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        onSubmit={handleAddition}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} onDelete={handleDelete} />
    </div>
  );
};

export default App;
