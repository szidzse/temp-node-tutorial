//communicate with the file system
const { readFileSync, writeFileSync } = require("fs");

console.log("start");
//read files
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

//write/create files
// "{ flag: "a" } will append to the file instead of overwrite the file"
writeFileSync(
  "./content/result-sync.txt",
  `Here is the third text file which is the result of ${first} and ${second}`,
  { flag: "a" }
);

console.log("I am done with this task");
console.log("Starting the next task");