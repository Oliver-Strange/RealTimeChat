const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/authRouter");
const usersRouter = require("../modelsAndRoutes/users/users-router");
// const channelsRouter = require("../modelsAndRoutes/channels/channels-router");
// const messagesRouter = require("../modelsAndRoutes/messages/messages-router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
// app.use("/api/channels", channelsRouter);
// app.use("/api/messages", messagesRouter);

const { addUser, removeUser, getUser, getUsersInRoom } = require("../socketUsers");

io.on("connect", socket => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    console.log("someone joined");
    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", { user: "Admin", text: `${user.name} has left.` });
      io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });
    }
  });
});

module.exports = server;
