import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Home from "./index";
import { store } from "@/store";

describe("Home component", () => {
  test("renders Vite and React logos", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test("renders count button with initial value of 0", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    const countButton = screen.getByText("count is 0");
    expect(countButton).toBeInTheDocument();
  });

  test("increments count when count button is clicked", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    const countButton = screen.getByText("count is 0");
    fireEvent.click(countButton);
    expect(countButton).toHaveTextContent("count is 1");
  });
});
