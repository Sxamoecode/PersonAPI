const {createServer} = require('http');
const app = require('./app');
const server = createServer(app);
const {mongoConnect} = require('./services/mongo');

require('dotenv').config();

const PORT = process.env.PORT || 9921;

async function startServer() {
    mongoConnect();

    server.listen(PORT, (err) => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
}
startServer();