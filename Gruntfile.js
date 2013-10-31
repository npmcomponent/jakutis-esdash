module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        umd: {
            all: {
                src: './index.js',
                dest: './index.umd.js',
                objectToExport: '_',
                amdModuleId: 'esdash',
                globalAlias: 'esdash'
            }
        }
    });
    grunt.loadNpmTasks('grunt-umd');
    grunt.registerTask('default', ['umd:all']);
};
