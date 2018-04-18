module.exports = function(grunt) {
    "use strict";
    grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");

    // sof:fix#2312 fix task devx-updateNeoApp for linux https://github.com/SAPDocuments/Tutorials/issues/2312
    grunt.loadNpmTasks("grunt-replace");
    var config = {
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: /\/webapp\/index.html/g,
                            replacement: "/index.html"
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["dist/neo-app.json"],
                        dest: "dist/"
                    }
                ]
            }
        }
    };
    grunt.config.merge(config);
    // eof:fix#2312

    grunt.registerTask("default", [
        "clean",
        "lint",
        "build",
        "replace"
    ]);
};
