import React, { Component } from "react";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

const reduxStore = configureStore();

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div>
          <Navbar />
          <Cart />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;