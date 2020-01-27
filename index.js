const path = require('path');
const fs = require('fs');

module.exports = function findupExact(filename, directory = __dirname) {
    while (directory && directory !== '/') {
        const filePath = path.resolve(directory, filename);
        if (fs.existsSync(filePath)) {
            return filePath;
        }

        directory = path.resolve(directory, '..');
    }
}
