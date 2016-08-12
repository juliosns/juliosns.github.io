module.exports = function (grunt) {
   
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    environment:'development',
                    sassDir: 'Content/sass',
                    cssDir: 'Content/css/min',
                    outputStyle:'compressed',
                    imagesDir:'/content/images'
                }
            },
            
            dev: {
                options: {
                    environment:'development',
                    sassDir: 'Content/sass',
                    cssDir: 'Content/css',
                    outputStyle:'expanded',
                    imagesDir:'/content/images'
                }
            }
        },
        
        watch: {
            css: {
                files: 'Content/sass/*.scss',
                tasks: ['compass']
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // register at least this one task
    grunt.registerTask('default', ['watch']);


};