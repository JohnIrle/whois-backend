import express, { Request, Response } from "express";
import validator from "validator";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request";

const router = express.Router();

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
        res.status(201).send({ success: true });
    }
);

export { router as whoisRouter };
