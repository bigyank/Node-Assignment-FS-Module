const fs = require("fs");

const path = "./newReadme.txt";

fs.unlink(path, (err) => {
  if (err) console.log(err);
  console.log("file removed successfully");
});
