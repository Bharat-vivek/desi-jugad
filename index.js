import express from 'express';
const app = express();
import path from 'path';


const __dirname = path.dirname('./public');
app.use(express.static(path.join(__dirname))) //Serve static
// set up ejs for templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.set('public', path.join(__dirname, 'public'))

app.get("/", (req, res) => {
    res.render('home')

})
app.get("/home", (req, res) => {
    res.render("home")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})
app.get("/chat", (req, res) => {
    res.render("chat")
})
app.get("/dashboard", (req, res) => {
    res.render("dashboard")
})
app.get("/subject", (req, res) => {
    res.render("subject")
})

app.get("*", (req, res) => {
    res.status(404).send("404 for all pages not defined in routes")
})
app.listen(3000, () => {
    console.log("listening on port 3000")
})
