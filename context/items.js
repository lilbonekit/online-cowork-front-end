import { createContext, useState } from "react";

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState();

  // for creating an item
  const addItem = async (taskInfo) => {
    try {
      // we will send a POST request with the data required to create an item
      const res = await fetch("/api/createItem", {
        method: "POST",
        body: JSON.stringify(taskInfo),
        headers: { "Content-Type": "application/json" },
      });
      const newItem = await res.json();
      // then we will update the 'items' adding the newly added item to it
      setItems((prevItems) => [newItem, ...prevItems]);
    } catch (error) {
      console.error(error);
    }
  };

  // for updating an existing item
  const updateItem = async (updatedItem) => {
    try {
      // we will send a PUT request with the updated information
      const res = await fetch("/api/updateItem", {
        method: "PUT",
        body: JSON.stringify(updatedItem),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      // then we will update the 'items' by replacing the fields of existing item.
      setItems((prevItems) => {
        const existingItems = [...prevItems];
        const existingItem = existingItems.find(
          (item) => item.id === updatedItem.id
        );
        existingItem.fields = updatedItem.fields;
        return existingItems;
      });
    } catch (error) {
      console.error(error);
    }
  };

  // for deleting an item
  const deleteItem = async (id) => {
    try {
      // we will send a DELETE request to the API with the id of item we want to delete
      const res = await fetch("/api/deleteItem", {
        method: "Delete",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      // them we will update the 'items' by deleting the item with specified id
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        updateItem,
        deleteItem,
        addItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsContext, ItemsProvider };
