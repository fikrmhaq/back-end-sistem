// const routes = require('./routes');
// const Hapi = require('@hapi/hapi');
// const { PORT } = require('./config');

import routes from "./routes.js"
import Hapi from "@hapi/hapi"
import { PORT } from "./config.js"

const init = async () => {
    const server = Hapi.server({
        port: PORT.server.port,
        host: '0.0.0.0',
    });
    server.route(routes);


    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();
