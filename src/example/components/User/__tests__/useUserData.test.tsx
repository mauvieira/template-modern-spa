import { renderHook, waitFor } from "../../../../test/utils";
import { useUserData } from "../useUserData";

describe("useUserData hook", () => {
  it("should return the loading status", () => {
    const { result } = renderHook(() => useUserData());

    expect(result.current.isLoading).toBe(true);
  });

  it("should return the user data after loading", async () => {
    const { result } = renderHook(() => useUserData());

    // TODO: add an isSuccess property to replace
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toBeTruthy();
  });
});
