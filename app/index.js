const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req,res) =>
res.send(`appid: ${appid} home page: Hello from lightweight container`))

app.get("/app1", (req,res) =>
res.send(`appid: ${appid} app1 page: Hello from lightweight container`))

app.get("/app2", (req,res) =>
res.send(`appid: ${appid} app2 page: Hello from lightweight container`))

app.get("/admin", (req,res) =>
res.send(`appid: ${appid} ADMIN page: Hello from lightweight container`))

app.listen(9999, ()=>console.log(`${appid} Listening on 9999`))