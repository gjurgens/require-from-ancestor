var chai = require("chai");
chai.should();
var expect = chai.expect;

var path = require("path");
var rootDir = path.join(__dirname, "../..");

var fooBar = require(path.join(rootDir,"test/fixtures/foo-bar"));
var requireFromAncestor = require(path.join(rootDir,"lib/require-from-ancestor"));

describe("Interface",function(){
    it("Should be a function", function(){
        expect(requireFromAncestor).to.be.a("function");
    });
    describe("requiring a non existing module", function(){
        it("should throw an error", function(){
            function requireInexistent() {
                requireFromAncestor("inexistent");
            }
            expect(requireInexistent).to.throw("Error: Cannot find module \'inexistent\' in ancestors chain.");
        });
    });
});

describe("Resolved dependencies", function(){
    it("Should return correct dependencies when NOT using ancestor require", function(){
        expect(fooBar.foo.name).to.equals("foo");
        expect(fooBar.bar.regularFoo.name).to.equals("foo deeper");
        expect(fooBar.bar.qux.name).to.equals("qux");
        expect(fooBar.bar.qux.regularFoo.name).to.equals("foo deeper deeeeeeper");
        expect(fooBar.bar.qux.libBar.name).to.equals("lib/bar deeeeeeper");
        expect(fooBar.bar.name).to.equals("bar");
        expect(fooBar.lib.name).to.equals("lib/bar");
    });
    it("Should return correct dependencies when using ancestor require", function(){
        expect(fooBar.bar.ancestorFoo.name).to.equals("foo");
        expect(fooBar.bar.qux.ancestorFoo.name).to.equals("foo");
        expect(fooBar.bar.qux.ancestorLibBar.name).to.equals("lib/bar");
    });
});