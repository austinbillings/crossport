# Crossport

Dynamically import a directory and export its contents all at once.

### Usage

Basic use:
```javascript
const crossport = require('crossport');
crossport(require, exports);
```

Crossport uses the `require` you pass to get the contents of the current directory by default, import them all and attach them as iterable properties to the same `exports` you pass. Since `exports` is passed by reference, the calling file now exposes all the modules available in the directory.
