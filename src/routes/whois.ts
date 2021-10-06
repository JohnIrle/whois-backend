import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request";

const router = express.Router();

router.post(
    "/api/whois",
    [
        body("IPorDomain").custom((value) => {
            return (
                value.match(
                    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
                ) ||
                value.match(
                    /^((?!-)[A-Za-z0-9-]{1, 63}(?<!-)\\.)+[A-Za-z]{2, 6}$/
                )
            );
        }),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        res.status(400);
    }
);

export { router as whoisRouter };
