import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter hook", () => {
  it("should return the initial number", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.number).toBe(0)
  });

  it("should add one number to the counter when calling the add operation", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.number).toBe(0);
    act(() => result.current.operations.add());
    act(() => result.current.operations.add());
    expect(result.current.number).toBe(2);
  });

  it("should sub one number to the counter when calling the sub operation", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.number).toBe(0);
    act(() => result.current.operations.add());
    act(() => result.current.operations.add());
    act(() => result.current.operations.sub());
    expect(result.current.number).toBe(1);
  });

  it("should not sub one number to the counter if the actual is zero", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.number).toBe(0);
    act(() => result.current.operations.sub());
    expect(result.current.number).toBe(0);
  });
});
