import { http, HttpResponse } from "msw";
import shoes from "../shoes.json";

export const handlers = [
  http.get("/api/products", (req, res, ctx) => {
    return HttpResponse.json(shoes);
  }),
    http.get("/api/products/:id", (req, res, ctx) => {
        const { id } = req.params;
        const product = shoes.find((shoe) => shoe.id == id);
        if (!product) {
          return HttpResponse.json({ message: "Product not found" }, {
            status: 404,
          });
        }
        return HttpResponse.json(product);
    }),
];
