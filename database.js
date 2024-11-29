const fs = require("fs"); // stands for fileSystem

/* exports.save = (people, cb) => {
    fs.writeFile('./data.json', JSON.stringify(people), cb);
}; */

exports.save = (people, cb) => {
  setTimeout(() => {
    fs.writeFile("./data.json", JSON.stringify(people), cb);
  }, 10000);
}

exports.load = () => {
  return JSON.parse(fs.readFile("./data.json", "utf8")); // we need to say it is a text file by adding utf8
}
