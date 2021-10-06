import "dotenv/config";

import { app } from "./app";

const start = async () => {
    app.listen(3001, () => {
        console.log("Listening on port 3001");
    });
};

start();
