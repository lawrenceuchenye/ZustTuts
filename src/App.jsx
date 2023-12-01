import { useState } from "react";
import Column from "./components/Column";

function App() {
  return (
    <div className="app">
      <h1>Hellobworld!</h1>
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </div>
  );
}

export default App;
