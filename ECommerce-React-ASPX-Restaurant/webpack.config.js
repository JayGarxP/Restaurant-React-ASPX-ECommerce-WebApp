module.exports = {
    // windows style relative pathname for entrypoint
    // without ./ or .\\ rel path webpack will look in node_modules folder in webpack install dir
    entry: '.\\Content\\src\\food.tsx',
    mode: 'development',
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    },

    devtool: 'source-map',

    // Add the loader for .ts files.
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};