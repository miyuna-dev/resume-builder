import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Pages from "./pages/Routes";

const App= () => {
  return (
    <Router className="App">
      <Pages />
    </Router>
  );
}

export default App;