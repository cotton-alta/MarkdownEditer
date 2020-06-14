import express from "express";
import socket from "socket.io";
import mongoose from "mongoose";
import * as contentController from "./controllers/contentController";
const app: express.Express = express();

require('dotenv').config();

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// body-parserに基づいた着信リクエストの解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = {
  user: process.env.MONGO_USERNAME,
  pass: process.env.MONGO_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect("mongodb://mongo:27017/markdown", options);

// GetとPostのルーティング
app.get('/', (req:express.Request, res:express.Response) => {
  res.send("OK")
});

// 4000番ポートでAPIサーバ起動
const server = app.listen(4000, () => {
  console.log('listening on port 4000!');
});

const io = socket(server);
io.sockets.on("connection", (socket: any) => {
  let editPath: string,
      initData: string;

  socket.on("create connection", () => {
    console.log("server ok!");
  });

  socket.on("path connection", (path: any) => {
    editPath = path;
    contentController.getContent(editPath)
    .then((result: string) => {
      initData = result;
      console.log("path : ", path);
      console.log("initData : ", initData);

      socket.emit("init data", initData);
    });
  });

  socket.on("change text", (data: any) => {
    contentController.updateContent(data);
    // socket.emit("server change", data.text);
  });

  socket.on('disconnect', function() {
    console.log('disconnected');
  });
});