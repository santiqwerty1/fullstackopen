/**
 * A Filter component that displays an input field to filter a list of items by their name.
 * @param {string} filter - The current filter value.
 * @param {function} onFilterChange - A function to call when the filter input changes.
 * @returns {JSX.Element} A JSX element representing the Filter component.
 */
const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      Filter:{" "}
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;