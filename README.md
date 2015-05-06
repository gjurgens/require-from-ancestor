# require-from-ancestor

[![Build](https://travis-ci.org/gjurgens/require-from-ancestor.png)](http://travis-ci.org/gjurgens/require-from-ancestor)

Require modules from ancestor modules.

## Install

    $ npm install require-from-ancestor
    
## Usage

This module is useful for large and modularized projects using npm, where some modules requires a common module, but you need to use the same cached module to share state between them.

```javascript
var requireFromAncestor = require('require-from-ancestor'),
    mongoose = requireFromAncestor('mongoose');
```