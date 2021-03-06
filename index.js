const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ibanLib = require('iban');
const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
const router = express.Router();

let count = 0;

router.post('/validateIBAN', (req, res, next) => {
    const { iban } = req.body;
    try {
        if (++count % 3 === 0) {
            throw new Error('Service is not available');
        }
        if (!iban) {
            return res.status(400).json({message: 'Body should contain iban field'})
        }
        const valid = ibanLib.isValid(iban);
        res.json({ valid });
    } catch (e) {
        res.status(500).json({message: e.message || 'Something went wrong. Please, try again'});
    }
});

app.use('/', router);

require('./server/routes')(app);

app.use(express.static('./'));
app.listen(8080, () => console.log('App listening on port 8080'));
