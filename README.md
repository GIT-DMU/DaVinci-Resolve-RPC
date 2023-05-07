# DaVinci-Resolve-RPC
### This is a small package in JavaScript/Python 3 that enables Discord Rich Presence for DaVinci Resolve.
<br>

# Requirements
>[Python3](https://www.python.org/downloads/) <br>
>[NodeJS](https://nodejs.org/de)

<br>

# Setup
To get started, run `npm run build` to install the necessary Node.js and Python dependencies.

Next, navigate [index.js](/src/index.js) and replace "YOUR APP ID" with the Discord Developer Application ID that you have generated for your application.

That's it! To start your RPC, run `npm run prod`. For automated start-up of the RPC, you can use the [start.bat](start.bat) file. Please make sure to verify the file path inside the [start.bat](start.bat), as it may differ from 
the default location.

<br>

# Sample
Here's an example of what your [index.js](/src/index.js) file might look like:
```javascript
...
/* run RPC */
DAVINCI.runRPC(CLIENT, '12345678987654321', [
    {
        label: 'Github',
        url: 'https://github.com/GIT-DMU'
    },
]);
```

The buttons parameter is optional and can be omitted if not needed.
```javascript
...
/* run RPC */
DAVINCI.runRPC(CLIENT, '12345678987654321');
```