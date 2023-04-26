const openJson = require("./jsonReader.js")

const facilities = (query = {}) => {
  let data = openJson("mimaropa")

  // Loop through keys in query
  for (const key in query) {
    // Filter data by query
    data = data.filter((d) => {
        // check if key exists in data
        if(!d[key]) {
            throw new Error(`Key ${key} does not exist in data`)
        }

        // check if d[key] is string
        if(typeof d[key] == "string"){
            return d[key].toLowerCase() == query[key].toLowerCase()
        }

        return d[key] == query[key]
    })
  }

  return data
}

module.exports = facilities
