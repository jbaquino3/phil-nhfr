const fs = require('fs');
const path = require('path');

const openJson = (filename) => {
    if (!filename.endsWith(".json")) {
        filename += ".json";
    }

    const filePath = path.join(__dirname, 'db', filename);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

module.exports = openJson;