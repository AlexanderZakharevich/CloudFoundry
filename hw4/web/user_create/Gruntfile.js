module.exports = function(grunt) {
  "use strict";
  grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
  grunt.registerTask("default", [
    "clean",
    "lint",
    "build"
  ]);
  grunt.config.set("deploy_mode", "html_repo");
};