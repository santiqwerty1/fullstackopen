/**
 * A button that removes a person from the list when clicked.
 * The button expects the following props:
 * - person: the person to be removed.
 * - onDelete: a function to call when the button is clicked.
 */
const RemovePersonButton = ({ person, onDelete }) => (
    <button type="button" onClick={() => onDelete(person)}>
        delete
    </button>
);

export default RemovePersonButton;
