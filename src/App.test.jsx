import { getByLabelText, getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("should render app", () => {
    render(<App />);
    expect(screen.queryByText("5%")).toBeVisible();
    expect(screen.queryByText("RESET")).toBeVisible();
  });
  it("should show 2.5$ as total / person", async () => {
    render(<App />);
    const billAmount = screen.getByLabelText("Bill");
    const personAmount = screen.getByLabelText("Number of People");
    const tipPercentage = screen.getByLabelText("25%");
    await userEvent.type(billAmount, "10");
    await userEvent.type(personAmount, "5");
    await userEvent.click(tipPercentage);

    expect(screen.queryByText("$2.5"));
  });

  it("should clear form on reset", async () => {
    render(<App />);
    const billAmount = screen.getByLabelText("Bill");
    const personAmount = screen.getByLabelText("Number of People");
    const tipPercentage = screen.getByLabelText("25%");
    await userEvent.type(billAmount, "10");
    await userEvent.type(personAmount, "5");
    await userEvent.click(tipPercentage);

    const reset = screen.getByText("RESET");
    await reset.click();
    expect(screen.queryByText("$0.00"));
  });
});
