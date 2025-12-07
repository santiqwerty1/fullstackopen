/**
 * A functional component that displays a single person's name and number.
 * @param {{object}} person - An object containing the person's name and number.
 * @returns {JSX.Element} A JSX element representing the person.
 */
const Person = ({ person }) => (
  <>
    {person.name} {person.number}
  </>
);

export default Person;
