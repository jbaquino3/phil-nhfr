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
The following is an example of a record from the query result. Use this as your reference for the filters.
```
{
    "Health Facility Code": "DOH000000000000034",
    "Health Facility Code Short": 34,
    "Facility Name": "TIPO-TIPO MAIN HEALTH CENTER",
    "Old Health Facility Name 1": "",
    "Old Health Facility Name 2": "",
    "Old Health Facility Name 3": "",
    "Facility Major Type": "Health Facility",
    "Health Facility Type": "Barangay Health Station",
    "Ownership Major Classification": "Government",
    "Ownership Sub-Classification for Government facilities": "National Government",
    "Ownership Sub-Classification for private facilities": "",
    "Street Name and #": "",
    "Building name and #": "",
    "Region Name": "BANGSAMORO AUTONOMOUS REGION IN MUSLIM MINDANAO (BARMM)",
    "Region PSGC": 1900000000,
    "Province Name": "BASILAN",
    "Province PSGC": 1900700000,
    "City/Municipality Name": "TIPO-TIPO",
    "City/Municipality PSGC": 1900706000,
    "Barangay Name": "TIPO-TIPO PROPER (POB.)",
    "Barangay PSGC": 1900706016,
    "Zip Code": 7304,
    "Landline Number": "",
    "Landline Number 2": "",
    "Fax Number": "",
    "Email Address": "",
    "Alternate Email Address": "",
    "Official Website": "",
    "Service Capability": "",
    "Bed Capacity": 0,
    "Licensing Status": "",
    "License Validity Date": ""
}
```

## Releasing
Before releasing the package, add notable changes to the [changelog](CHANGELOG.md) file.
```
## [Unreleased]

### Added
- Changelog
```
To release the package, trigger the `Release package` workflow from the Actions tab.