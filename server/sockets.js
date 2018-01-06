const connections = [];
// const users = [];

module.exports = (io) => {
  io.sockets.on('connection', (socket) => {
    connections.push(socket);
  });
};
