import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import stepperRoute from "./routes/stepper.route.js";
import projectRoute from "./routes/project.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import proposalRoute from "./routes/proposal.route.js";
import {createServer} from "node:http";
import {server} from "socket.io";
import {createMessage} from "./controllers/message.controller.js";
import { message } from "antd";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);
const HOST = process.env.HOST || 'localhost';
const DBName = process.env.DBNAME || 'freelyslah';

const connect = async () => {
  try {
    await mongoose.connect(`mongodb://${HOST}/${DBName}`);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/projects", projectRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/stepper", stepperRoute);
app.use("/api/proposals", proposalRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

//create HTTP server and Socket.io
const server = createServer(app);
export const io = new server(server);

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for messages
  socket.on("sendMessage", (message,res,userId) => {
    createMessage.send(message,res,userId)
    // Broadcast the message to all connected clients
    io.emit("receiveMessage", message);
});

  socket.on("req", (res) => {
    createMessage.req(res);
  });
});
app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
