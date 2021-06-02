const fs = require("fs");

const dataToAppend = "\nbaz";

fs.writeFile("newReadme.txt", dataToAppend, { flag: "a" }, function (err) {
  if (err) console.log(err);
  console.log("Successfully appended to File.");
});
