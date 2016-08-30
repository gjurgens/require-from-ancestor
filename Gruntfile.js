"use strict";
module.exports = function(grunt) {
    var project = require("./package.json");
    // Project configuration.
    grunt.initConfig({
        version: project.version,
        watch: {
            jshint: {
                files: ["**/*.js"],
                tasks: ["jshint"]
            }
        },
        jshint: {
            options: {
                trailing:true,
                evil:true,
                indent:4,
                undef:true,
                unused:true,
                node:true,
                browser:false,
                loopfunc:true,
                devel:false
            },
            core: {
                 src: ["lib/**/*.js"]
            },
            tests: {
                options: {
                    globals: {
                        describe:true,
                        it:true,
                        before:true,
                        after:true
                    }
                },
                src: ["test/**/*.js"]
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    timeout: 1000
                },
                src: ['test/specs/**/*.js']
            }

        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("test", ["jshint", "mochaTest"]);
};