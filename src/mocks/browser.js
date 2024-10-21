import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

console.log(handlers);

export const worker = setupWorker(...handlers);
