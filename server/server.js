let express = require('express');

let app = express();
let port = 3000;

app.use('/', express.static('../client/public/'));

app.listen(port, () => {
  console.log(`[Server] Listening on port ${port}`)
})