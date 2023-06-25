import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", (ws) => {
  ws.on("close", () => {
    console.log("new socket disconnected");
  });
  console.log("new socket connected");
});

console.log("socket server waiting for connections on ws://localhost:5000");
