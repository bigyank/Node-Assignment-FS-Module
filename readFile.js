const fs = require("fs");

fs.readFile("readme.txt", function (err, buf) {
  console.log(buf.toString());
});
