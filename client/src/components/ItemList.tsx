import { useEffect, useState } from "react";

import { fetchAllScripts } from "../utils/scriptsServices";
import SearchBar from "./searchbar";

//Put a function to fetch urls here.

function ItemListComponent() {
  //Function for getting list.
  const [filteredItemList, setFilteredItemList] = useState<string[]>([]); //Replace the string[] later.
  const [fullItemList, setFullItemList] = useState<string[]>([]); //Replace the string[] later.

  useEffect(() => {
    const getItems = async () => {
      const data: string[] = await fetchAllScripts(); //Replace with a function later.
      setFullItemList(data);
      setFilteredItemList(data);
    };

    getItems();
  }, []);

  //Function for filtering list.
  const filterItems = (searchValue: string) => {
    const filteredItemList = fullItemList.filter((item) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredItemList(filteredItemList);
  };

  //Add some additional mapping to convert from the json from function.

  //Return html.
  return (
    <>
      <SearchBar onChangeCallback={filterItems} />

      <ul>{filteredItemList}</ul>
    </>
  );
}

export default ItemListComponent;
