module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                'pug/**/*.pug',
                'puplic/js/*.js',
                'puplic/js/**/*.js',
                'puplic/js/libs/*.js',
                'puplic/js/modules/*.js',
            ],
            whitelist: ['parent', 'go-to', 'border-2', 'border-red-500', 'replacement'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) 
        }),

        require('cssnano')({
            preset: 'default',
        }),
    ]
}