import Person from "./Person";
import RemovePersonButton from "./RemovePersonButton";

/**
 * A component that displays a list of persons and a form to delete each person.
 * The component expects the following props:
 * - personsToShow: an array of persons to display.
 * - onDelete: a function to call when a person is deleted.
 * @returns {JSX.Element} A JSX element representing the Persons component.
 */
const Persons = ({ personsToShow, onDelete }) => (
  <ul>
    {personsToShow.map((person) => (
      <li key={person.id}>
        <Person person={person} />
        {" "}
        <RemovePersonButton person={person} onDelete={onDelete} />
      </li>
    ))}
  </ul>
);

export  default Persons;
