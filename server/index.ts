import express from "express";
import socket from "socket.io";
const app: express.Express = express();

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// body-parserに基づいた着信リクエストの解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// GetとPostのルーティング
app.get('/', (req:express.Request, res:express.Response) => {
  res.send("OK")
})

// 4000番ポートでAPIサーバ起動
const server = app.listen(4000,()=>{ console.log('Example app listening on port 4000!') });

const io = socket(server);
io.sockets.on("connection", (socket: any) => {
  socket.on("create connection", () => {
    console.log("server ok!");
  });
  let state_text = "";

  socket.on("change text", (text: string) => {
    state_text = text;
    console.log(state_text);
  });

  socket.on('disconnect', function() {
    console.log('disconnected');
  });
});