const formidable = require('formidable')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public'))

//Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


    app.post('/upload', (req, res) => {
        const form = new formidable.IncomingForm()
        // form.uploadDir = __dirname + '/public';
        form.keepExtensions = true;
        form.parse(req);
        form.on('fileBegin', function (name, file){
            file.path = __dirname + '/public/uploads/' + file.name;
        });
        console.log(form)
        res.redirect('/')
    })


app.listen(port, () => console.log(`Example app listening on port ${port}! :)`))