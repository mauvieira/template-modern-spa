import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  render,
  screen,
  waitForElementToBeRemoved
} from "../../../../test/utils";
import { User } from "../User";

type WrapperProps = {
  children: ReactNode;
};

describe("User info component", () => {
  it("should show the loading status correctly", () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    const wrapper = ({ children }: WrapperProps) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    render(wrapper({ children: <User /> }));

    const loading = screen.getByText(/loading\.\.\./i);
    expect(loading).toBeInTheDocument();
  });

  it("should remove the loading status and show the user data", async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    const wrapper = ({ children }: WrapperProps) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    render(wrapper({ children: <User /> }));

    await waitForElementToBeRemoved(() => screen.getByText(/loading\.\.\./i));

    const user = screen.getByText(
      /\{ "id": 1, "username": "mauvieira", "name": "mauricio vieira", "email": "mauvieira@gmail\.com" \}/i
    );

    expect(user).toBeInTheDocument();
  });
});
