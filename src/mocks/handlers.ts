import { rest } from "msw";
import { user } from "./constants";

export const handlers = [
  rest.get("/user", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(user)
    )
  })
];
