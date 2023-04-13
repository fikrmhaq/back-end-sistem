import dotenv from "dotenv"
// const dotenv = require('dotenv');

dotenv.config();

export const PORT = {
    server: {
        port: process.env.PORT || 1122
    }
}
