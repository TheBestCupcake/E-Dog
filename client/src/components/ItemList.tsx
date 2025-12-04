import { useEffect, useState } from "react";

import { fetchAllScripts } from "../utils/scriptsServices";

//Put a function to fetch urls here.

function ItemListComponent() {
  const [itemList, setItemList] = useState<string[]>([]); //Replace the string[] later.

  useEffect(() => {
    const getItems = async () => {
      const data: string[] = await fetchAllScripts(); //Replace with a function later.
      setItemList(data);
    };

    getItems();
  }, []);

  //Add some additional mapping to convert from the json from function.

  //Return html.
  return (
    <>
      <nav>{itemList}</nav>
    </>
  );
}

export default ItemListComponent;
