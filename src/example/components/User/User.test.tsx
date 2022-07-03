import { render, screen, waitForElementToBeRemoved } from "../../../test/utils";
import { User } from "./User";

describe("User info component", () => {
  it("should show the loading status correctly", () => {
    render(<User />);

    const loading = screen.getByText(/loading\.\.\./i);
    expect(loading).toBeInTheDocument();
  });

  it("should remove the loading status and show the user data", async () => {
    render(<User />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading\.\.\./i));

    const user = screen.getByText(
      /\{ "id": 1, "username": "mauvieira", "name": "mauricio vieira", "email": "mauvieira@gmail\.com" \}/i
    );

    expect(user).toBeInTheDocument();
  })
});
