import { useEffect, useState } from "react";

import { fetchAllScripts } from "../utils/scriptsServices";
import SearchBar from "./searchBar";

//Put a function to fetch urls here.

function ItemListComponent() {
  //Function for getting list.
  const [filteredItemList, setFilteredItemList] = useState<string[]>([]);
  const [fullItemList, setFullItemList] = useState<string[]>([]);

  //Api call.
  useEffect(() => {
    const getItems = async () => {
      const data: string[] = await fetchAllScripts();
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

  //Return html.
  return (
    <>
      <SearchBar onChangeCallback={filterItems} />

      <ul>{filteredItemList}</ul>
    </>
  );
}

export default ItemListComponent;
