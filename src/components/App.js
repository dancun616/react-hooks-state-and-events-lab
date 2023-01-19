import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [appClass, setAppClass] = useState("")

  function updateAppClass() {
    setAppClass(appClass => !appClass)
  }
  if(!appClass) {
    return(
    <div className="App light">
      <header>
        <h2>Shopster</h2>
        <button onClick={updateAppClass}>Light Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  )
  }
  return (
    <div className="App dark">
      <header>
        <h2>Shopster</h2>
        <button onClick={updateAppClass}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
