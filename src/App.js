import React from "react";
import ComponentC from "./components/ComponentC";
import "./App.css";

export const PriceContext = React.createContext();
export const ItemContext = React.createContext();

function App() {
  return (
    <div className="App">
      <PriceContext.Provider value={"$200"}>
        <ItemContext.Provider value={"samsung"}>
          <ComponentC />
        </ItemContext.Provider>
      </PriceContext.Provider>
    </div>
  );
}

export default App;
