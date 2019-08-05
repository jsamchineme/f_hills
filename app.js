const bodyparser       = require('body-parser'),
      mongoose         = require('mongoose'),
      express          = require('express'),
      expressSanitizer = require('express-sanitizer'),
      app = express();

require('dotenv').config();

console.log('database:', process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));
app.use(expressSanitizer());


const fredieSchema = new mongoose.Schema({
    fname: String,
    sname: String,
    text : String,
    phone: Number,
})

const Fredie = mongoose.model('Fredie', fredieSchema);

app.get('/', (req,res)=>{
    res.redirect('/client')
})

app.get('/client', (req,res)=>{
    res.render('client')
})
    
app.post('/client', (req,res)=>{
    req.body.client.text = req.sanitize(req.body.client.text);
    Fredie.create(req.body.client, (err, newClient)=>{
        if (err) {
            res.render('/')
        }else{
            // res.redirect('/client?saved')
            return res.status(200).send({
                message: 'saved',
                data: newClient
            });
        }
    })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`server started on port ${PORT}......`);
})