module.exports = function (grunt) {
  grunt.initConfig({
    cucumberjs: {
      options: {
          format: 'html',
          output: 'report.html',
          saveJson: true
      },
      features: ['features/google.feature'],
    }
  });

  grunt.loadNpmTasks('grunt-cucumberjs');

  grunt.registerTask('default', ['cucumberjs']);
};