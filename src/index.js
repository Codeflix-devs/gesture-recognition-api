const express = require('express');
const http = require('http');
const cors = require('cors');

const { MongoConfig, serverConfig } = require('./config');
const apiRoutes = require('./routes');
const ApiError = require('./utils/utils-ApiError');

const app = express();

MongoConfig.connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());
app.options("*", cors());

app.use("/api", apiRoutes)

app.use((req, res, next) => {
    next(new ApiError(httpstatus.NOT_FOUND, "Not Found"))
})

const server = http.createServer(app);

server.listen(serverConfig.port, () => {
    console.log(`server started the server on PORT :${serverConfig.port}`);
})