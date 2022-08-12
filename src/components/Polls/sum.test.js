import { render, screen, cleanup } from "@testing-library/react";
import jsdom from "jsdom";
// Importing the jest testing library
import '@babel/plugin-syntax-jsx'
import Polls from "./sum";
import React from "react";


describe("<Polls />", () => {
    test("should display the completed questions", () => {
      render(<Polls />);
      expect(
          screen.getByText(/Completed/)
      ).toBeInTheDocument();
    });
  });