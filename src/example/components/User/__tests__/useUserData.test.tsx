import { createWrapper, renderHook, waitFor } from "@/test/utils";
import { useUserData } from "../useUserData";

describe("useUserData hook", () => {
  it("should return the loading status", () => {
    const { result } = renderHook(() => useUserData(), { wrapper: createWrapper() });

    expect(result.current.isLoading).toBe(true);
  });

  it("should return the user data after loading", async () => {

    const { result } = renderHook(() => useUserData(), { wrapper: createWrapper() });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeTruthy();
  });
});
