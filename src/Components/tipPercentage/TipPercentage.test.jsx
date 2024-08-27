import { render, screen } from "@testing-library/react";
import TipPercentage from "./TipPercentage";

describe("radio button", () => {
  it("should render button with 5%", () => {
    render(<TipPercentage percentage={5} />);
    expect(screen.queryByText("5%")).toBeVisible();
  });
});
