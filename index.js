const fs = require("fs");

const facilities = (query = {}) => {
  let data = [];

  fs.readdirSync("./db").forEach(file => {
    const contents = fs.readFileSync(`./db/${file}`, 'utf8');

    data = data.concat(JSON.parse(contents))
  })

  // Loop through keys in query
  for (const key in query) {
    // Filter data by query
    data = data.filter((d) => {
        // check if key exists in data
        if(!d[key]) {
            throw new Error(`Key ${key} does not exist in data`)
        }

        // check if d[key] is string
        if(typeof query[key] === "string" && typeof d[key] === "string"){
            return d[key].toLowerCase() == query[key].toLowerCase()
        }

        return d[key] == query[key]
    })
  }

  return data
}

module.exports = facilities
