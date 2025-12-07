/**
 * A functional component that displays a form to add a new person.
 * The form contains two input fields for the person's name and number.
 * The component also renders a submit button.
 * The component expects the following props:
 * - onSubmit: a function to call when the form is submitted.
 * - newName: the current value of the name input field.
 * - handleNameChange: a function to call when the name input field changes.
 * - newNumber: the current value of the number input field.
 * - handleNumberChange: a function to call when the number input field changes.
 */
const PersonForm = ({
  onSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{" "}
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number:{" "}
        <input
          type="text"
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default PersonForm;