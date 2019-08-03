const express = require('express')
const app = express()
const port = 3000

app.get('/runpy', (req, res) => {
    PythonShell.run('./scripts/script1.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
        res.send(results);
      });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})