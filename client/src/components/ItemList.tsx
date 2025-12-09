import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchAllScripts } from "../utils/scriptsServices";
import SearchBar from "./searchBar";

interface itemProps {
  id: string;
  name: string;
}

function ItemListComponent() {
  //Function for getting list.
  const [filteredItemList, setFilteredItemList] = useState([]);
  const [fullItemList, setFullItemList] = useState([]);

  //Api call.
  useEffect(() => {
    const getItems = async () => {
      const data = await fetchAllScripts();
      setFullItemList(data);
      setFilteredItemList(data);
    };

    getItems();
  }, []);

  //Function for filtering list.
  const filterItems = (searchValue: string) => {
    const filteredItemList = fullItemList.filter((item: itemProps) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredItemList(filteredItemList);
  };

  const filterItemNames = filteredItemList.map((item: itemProps) => (
    <Link key={`${item.name}`} to={`/${item.name}`}>
      {item.name}
    </Link>
  ));

  //Return html.
  return (
    <>
      <SearchBar onChangeCallback={filterItems} />

      <ul>{filterItemNames}</ul>
    </>
  );
}

export default ItemListComponent;
