import { rest } from "msw";
const data = require("./whoisResponse.json");

export const handlers = [
    rest.get(
        "https://whoisapi-whois-v2-v1.p.rapidapi.com/whoisserver/WhoisService",
        (req, res, ctx) => {
            return res(ctx.json(data));
        }
    ),
];
