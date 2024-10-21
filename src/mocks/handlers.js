import { http, HttpResponse } from "msw";
import shoes from "../shoes.json";

export const handlers = [
  http.get("/products", (req, res, ctx) => {
    return HttpResponse.json(shoes);
  }),
];
