# Utility Tool

# Installation
## From Git
```sh
npm install munk-tool --sav-dev
```

# Usage
## Debugging
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

## Bump
Bump accepts a semantic version argument and type to increment the version.

Using the version bump:

```javascript
const util = require('../util-tool.js');
const patch = util.bump('1.1.1', 'patch');
```
