const fs = require('fs'); // stands for fileSystem

exports.save = (people) => {
    fs.writeFileSync('./data.json', JSON.stringify(people));
};

exports.load = () => {
    return JSON.parse(fs.readFileSync('./data.json', 'utf8')); // we need to say it is a text file by adding utf8
}