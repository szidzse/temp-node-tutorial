const path = require("path");

//returns my platform specific seperator
console.log(path.sep);

//make a path from strings
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//returns the file path last portion
const base = path.basename(filePath);
console.log(base);

//returns an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
