import React, { createContext, useState } from "react";
import Routes from "./src/Navigations/Routes";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
