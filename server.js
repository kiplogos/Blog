import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"

const app  = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index2.html")
    
})



app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})