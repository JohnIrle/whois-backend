import "dotenv/config";

import { app } from "./app";
const PORT = 80;

const start = async () => {
    if (process.env.RAPID_API_KEY) {
        console.log("R KEY");
    }
    if (process.env.WHOIS_API_KEY) {
        console.log("W KEY");
    }
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

start();
