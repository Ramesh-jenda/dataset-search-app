const SearchFilters = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="space-y-4 flex-1">
      {/* General Search Input */}
      <input
        type="text"
        name="query"
        value={filters.query || ""}
        onChange={handleInputChange}
        placeholder="Search datasets"
        className="p-2 px-3 border-2 border-neutral-300 rounded-md w-full outline-0"
      />
    </div>
  );
};

export default SearchFilters;
