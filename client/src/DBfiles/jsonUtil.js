const fs = require('browserify-fs');

function writeToFile(array, fileName) {

    fs.writeToFile(fileName, array, function(err)    {
        if(err) throw(err);
        console.log("File created");
    });
}

module.exports = {
    writeToFile
}


