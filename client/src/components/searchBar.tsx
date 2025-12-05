import { useState, type ChangeEvent } from "react";

function SearchBar({ onChangeCallback }: { onChangeCallback: any }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValueInput = e.currentTarget.value;
    setSearchValue(searchValueInput);

    onChangeCallback && onChangeCallback(searchValueInput);
  };

  return (
    <input
      type="text"
      value={searchValue}
      onChange={handleSearch}
      placeholder="Search by name"
    />
  );
}

export default SearchBar;
