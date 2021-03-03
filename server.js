const path = require('path');
const express =require('express');
const app = express();
// const publicPath = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(express.static(publicPath));

// app.get('*', (req,res) => {
//     res.sendFile(path.join(publicPath, '..' 'index.html'));
// });


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
});



