const path = require('path')

module.exports = {
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/'),
            '@utilities': path.resolve(__dirname, 'resources/js/Utilities/'),
            '@components': path.resolve(__dirname, 'resources/js/Components/'),
            '@pages': path.resolve(__dirname, 'resources/js/Pages/'),
            '@layouts': path.resolve(__dirname, 'resources/js/Layouts/'),
            '@filters': path.resolve(__dirname, 'resources/js/Components/Filters/'),
            '@ui': path.resolve(__dirname, 'resources/js/Ui/')
        }
    },
}
