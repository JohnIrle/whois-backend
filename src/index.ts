import "dotenv/config";

import { app } from "./app";
const PORT = 80;

const start = async () => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

start();
