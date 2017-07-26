# rivership-functions

A library of helpful functions to be used for the uShip Riverside (rivership) office. Offers general information, such as:
* Where is each conference room located?
* Where does a team sit?
* Where does an individual sit (or on what team)?
* What's for lunch?

# Installation
To install the rivership-functions in a node project:
```
npm install rivership-function
```

# Configuration
You will need to set the following environment variables to use this library:
* `AIRTABLE_KEY` -  The API Key you use to access the [Airtable](https://airtable.com) api, which should have access to the below tables
* `AIRTABLE_CONFERENCEROOMS_ID` - The table id representing the table collection holding conference rooms
* `AIRTABLE_LUNCH_ID` - The table id representing the table collection holding the weekly lunch menu
* `AIRTABLE_PEOPLE_ID` - The table id representing the table collection holding people and their respective teams

# Example usage
To use the library, you can
### Ask where a conference room resides
```
const rivership = require('rivership-functions');
rivership.whereIs('Lone Star'); // Returns a promise with the location of 'Lone Star' if it exists
```
### Ask where a team resides
```
const rivership = require('rivership-functions');
rivership.whereIs('Starship'); // Returns a promise with the location of 'Starship' if the team exists
```
### Ask where an individual room resides
```
const rivership = require('rivership-functions');
rivership.whereIs('Stephen Guerra'); // Returns a promise with the location of Stephen (he should exist)
```
### Ask what is for lunch today
```
const rivership = require('rivership-functions');
rivership.whatIsLunch(); // Returns a promise with today's lunch menu
```
### Ask what is for lunch today
```
const rivership = require('rivership-functions');
rivership.whatIsLunch('Tuesday'); // Returns a promise with a given day's lunch menu (hopefully not fish)
```
# Troubleshooting
## Configuring usage in stdlib
If you are using stdlib, you will need to set these variables in your env.json file before deploying, e.g.
```
{
    "local": {
        "AIRTABLE_KEY": "***",
        "AIRTABLE_CONFERENCEROOMS_ID": "***",
        "AIRTABLE_LUNCH_ID": "***",
        "AIRTABLE_PEOPLE_ID": "***"
    },
    "dev": {
        "AIRTABLE_KEY": "***",
        "AIRTABLE_CONFERENCEROOMS_ID": "***",
        "AIRTABLE_LUNCH_ID": "***",
        "AIRTABLE_PEOPLE_ID": "***"
    },
    "release": {
        "AIRTABLE_KEY": "***",
        "AIRTABLE_CONFERENCEROOMS_ID": "***",
        "AIRTABLE_LUNCH_ID": "***",
        "AIRTABLE_PEOPLE_ID": "***"
    }
}
```

## Configuring usage in Visual Studio Code
If you are using visual studio code, it is recommended you set these variables in the `.vscode/launch.json` file, e.g.
```
{
    "version": "0.2.0",
    "configurations": [{
        "name": "Run mocha",
        "type": "node",
        "request": "launch",
        "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
        "stopOnEntry": false,
        "args": ["test/**/*.js", "--no-timeouts"],
        "cwd": "${workspaceRoot}",
        "runtimeExecutable": null,
        "env": {
            "NODE_ENV": "test",
            "AIRTABLE_KEY": "***",
            "AIRTABLE_CONFERENCEROOMS_ID": "***",
            "AIRTABLE_LUNCH_ID": "***",
            "AIRTABLE_PEOPLE_ID": "***"
        }
    }]
}
```
