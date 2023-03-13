import React, {Component} from "react";
import "./App.css";
import Home from "./components/js/homepage";
export class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Home />
        </div>
      </>
    );
  }
}

export default App;
