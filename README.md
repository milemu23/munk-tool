# Utility Tool

# Installation
## From Git
```sh
npm install munk-tool --sav-dev
```

# Usage
## Debugging
### Logs will be found in ./log file

## start up server in debug mode
```sh
DEBUG=true nodemon src/server.js
```

## start up server without debug mode
```sh
nodemon src/server.js
```

## Debug Code
The debug tool takes 3 parameters.
A title, the object, and the status.
Statuses: 'success', 'error', 'warn'
<br />
Import the tool.
```
const util = require('munk-tool');
```
<br />
Use util.debug to debug.
```
util.debug('Title of Message', object, 'error');
```


## Message Example
```sh
success
*********DEBUG*********
Server is using
*********DEBUG*********
 Object: "3000"

TIME: 3/9/2017, 9:23:10 PM
```
