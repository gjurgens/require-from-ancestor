var rootDir = __dirname.replace("/test/lib","");
require('blanket')({
    pattern: [rootDir + "/lib"]
});