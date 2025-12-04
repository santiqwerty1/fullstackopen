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