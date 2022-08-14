import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../utils/store";
import { BrowserRouter } from "react-router-dom";


describe("App", () => {
  it("On load should render select user component", () => {
    render(
        <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId("select-user")).toBeInTheDocument();
  });

  it("Login button should be disabled until user is selected", () => {
    render(
        <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Login")).toBeDisabled();
  });
});