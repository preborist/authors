function Filter({ inputFilterName, changeFilter }) {
  return (
    <label>
      Find authors by name
      <input
        name="filter"
        type="text"
        value={inputFilterName}
        onChange={changeFilter}
      />
    </label>
  );
}
export default Filter;
