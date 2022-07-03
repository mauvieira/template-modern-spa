import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, waitFor } from "../../../../test/utils";
import { useUserData } from "../useUserData";

type WrapperProps = {
  children: ReactNode;
};

describe("useUserData hook", () => {
  it("should return the loading status", () => {
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
    const { result } = renderHook(() => useUserData(), { wrapper });

    expect(result.current.isLoading).toBe(true);
  });

  it("should return the user data after loading", async () => {
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

    const { result } = renderHook(() => useUserData(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeTruthy();
  });
});
