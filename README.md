# Philippine National Health Facility Registry (NHFR) Library

This package provides a function for accessing a list of health facilities from the [National Health Facility Registry](https://nhfr.doh.gov.ph/).

## Installation
To install the package, run the following command.
```
npm install phil-nhfr
```

## Importing
```
// Javascrip ES Modules
import facilities from 'phil-nhfr';

// commonJS
const facilities = require('phil-nhfr');
```

## Usage
### Fetching all facilities
To fetch all health facilities, simply call the imported function.
```
const data = facilities();
```

### Filtering Results
You can filter the health facilities by providing an object parameters with key-value pairs matching the properties of the data. For example:
```
const data = facilities({
    "Province Name": "Palawan",
    "Health Facility Type": "Infirmary",
})
```
If the property does not exist, the function will throw an error.