import { render } from "@testing-library/react";
import React from "react";
import Missing from "../components/Missing/Missing";

describe("Missing", () => {
  it("will match snapshot", () => {
    const { container } = render(<Missing />);
    expect(container).toMatchSnapshot();
  });
});