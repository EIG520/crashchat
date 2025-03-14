const express = require('express');
const spawn = require('child_process').spawn;
const path = require('path');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,"public")));
app.get('/', (req, res) => {
    res.sendFile('/public/page.html', { root: __dirname } );
})

app.get('/entries', (req, res) => {
    run(["get", "entries"]).then(data => {
        res.send(data);
    })
})

app.get('/get', (req, res) => {
    const msgid = req.query.id

    run(["path", "msgs", "get", msgid]).then(data => {
        res.send(data)
    })
})

app.get('/send', (req, res) => {
    const text = req.query.text

    get_inc_id().then(id => {
        run(["path", "msgs", "set", id, text]).then(data => {
            res.send(data);
        })
    })
})

async function get_inc_id() {
    const entries = await run(["get", "entries"])
    await run(["set", "entries", "" + ((+entries)+1)])
    return entries.slice(0, -1)
}

async function run(cmd) {
    process = spawn(
        "./cli", cmd
    );

    const result = await new Promise(resolve => {
        process.stdout.on( 'data', (data) => {
            resolve(data);
        })
    });

    return result
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
