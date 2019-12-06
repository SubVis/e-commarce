module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // require('@fullhuman/postcss-purgecss')({
        //     content: [
        //         'pug/**/*.pug',
        //         'puplic/js/*.js',
        //         'puplic/js/**/*.js',
        //     ],
        //     whitelist: ['parent', 'go-to'],
        //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) 
        // }),

        require('cssnano')({
            preset: 'default',
        }),
    ]
}