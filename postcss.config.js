module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                'pug/**/*.pug',
                // 'puplic/*.html',
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) 
        }),

        require('cssnano')({
            preset: 'default',
        }),
    ]
}