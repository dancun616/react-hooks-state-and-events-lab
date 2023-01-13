import React from "react";
import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

    const [theme, changeTheme] = useState('App light');

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = (theme === "App light") ? "App dark" : "App light"

  return (
    <div className={theme}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() =>  { 
          changeTheme(appClass)
          }}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
