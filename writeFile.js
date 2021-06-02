const fs = require("fs");

const dataToWrite = "foo bar";

fs.writeFile("newReadme.txt", dataToWrite, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
