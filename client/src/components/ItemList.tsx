import { useEffect, useState } from "react";

//Put a function to fetch urls here.

function ItemListComponent() {
  const [itemList, setItemList] = useState<string[]>([]); //Replace the string[] later.

  useEffect(() => {
    const getItems = async () => {
      const data: string[] = await ["URL 1", "URL 2", "URL 3"]; //Replace with a function later.
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
