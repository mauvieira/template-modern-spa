import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

describe("Title component", () => {
  it("renders correctly", () => {
    const { container } = render(<Title />);

    const component = screen.getByRole('heading', {
      name: /title/i
    });

    expect(container).toMatchSnapshot();
    expect(component).toBeInTheDocument();
  });
});
