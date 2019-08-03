const express = require('express')
const app = express()
const port = 3000

app.get('/runpy', (req, res) => {
    // PythonShell.run('./scripts/script1.py', {}, function (err, results) {
    //     if (err) throw err;
    //     // results is an array consisting of messages collected during execution
    //     console.log('results: %j', results);
    //     res.send(results);
    //   });

      const exec = require('child_process').exec;
        var yourscript = exec('python /scripts/script1.py',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})