import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const pass = "Uzair@secret";

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if(pass === req.body.password) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(port, (req, res)=> {
    console.log(`Server is live on port ${port}!`);
})

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
