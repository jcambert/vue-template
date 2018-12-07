define("index", ["require", "exports", "http", "express", "socket.io"], function (require, exports, http_1, express, socketIo) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Message {
        constructor(from, content) {
            this.from = from;
            this.content = content;
        }
    }
    exports.Message = Message;
    class SocketServer {
        constructor() {
            this.createApp();
            this.config();
            this.createServer();
            this.sockets();
            this.listen();
        }
        createApp() {
            this.app = express();
        }
        createServer() {
            this.server = http_1.createServer(this.app);
        }
        config() {
            this.port = process.env.PORT || SocketServer.PORT;
        }
        sockets() {
            this.io = socketIo(this.server);
        }
        listen() {
            this.server.listen(this.port, () => {
                console.log('Running server on port %s', this.port);
            });
            this.io.on('connect', (socket) => {
                console.log('Connected client on port %s.', this.port);
                socket.on('message', (m) => {
                    console.log('[server](message): %s', JSON.stringify(m));
                    this.io.emit('message', m);
                });
                socket.on('disconnect', () => {
                    console.log('Client disconnected');
                });
            });
        }
        getApp() {
            return this.app;
        }
    }
    SocketServer.PORT = 8080;
    exports.SocketServer = SocketServer;
    exports.default = new SocketServer();
});
//# sourceMappingURL=socketServer.js.map