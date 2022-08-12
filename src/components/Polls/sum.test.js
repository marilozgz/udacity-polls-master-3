import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@babel/plugin-syntax-jsx'
import Polls from "./sum";
import React from "react";
// afterEach function runs after each test suite is executed
describe("<Polls />", () => {
    test("should display the product page", () => {
      render(<Polls />);
      expect(
          screen.getByText(/Completed/)
      ).toBeInTheDocument();
    });
  });