import "@testing-library/jest-dom";
import { setLogger } from "react-query";
import "whatwg-fetch";

import { server } from "@/mocks/server";

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
