import express, { Request, Response } from "express";
import request from "superagent";
import validator from "validator";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request";

const router = express.Router();

const BASE_URL =
    "https://whoisapi-whois-v2-v1.p.rapidapi.com/whoisserver/WhoisService";

router.post(
    "/api/whois",
    [
        body("IPorDomain")
            .custom((value) => {
                const isIPorDomain =
                    validator.isIP(value) || validator.isURL(value);
                return isIPorDomain;
            })
            .withMessage("input must be a valid domain or IP"),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        try {
            const externalWhoIs = await request
                .get(BASE_URL)
                .set("x-rapidapi-host", "whoisapi-whois-v2-v1.p.rapidapi.com")
                .set("x-rapidapi-key", `${process.env.RAPID_API_KEY}`)
                .query({ apiKey: process.env.WHOIS_API_KEY })
                .query({ domainName: "whoisxmlapi.com" })
                .query({ outputFormat: "JSON" })
                .query({ da: "0" })
                .query({ ipwhois: "0" })
                .query({ thinWhois: "0" })
                .query({ _parse: "0" })
                .query({ preferfresh: "0" })
                .query({ checkproxydata: "0" })
                .query({ ip: "0" });

            res.status(201).send(externalWhoIs.body);
        } catch (err) {
            console.log(err);
        }
    }
);

export { router as whoisRouter };
