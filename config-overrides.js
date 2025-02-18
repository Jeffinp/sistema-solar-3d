module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.(jpg|png|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'textures/'
                }
            }
        ]
    });

    return config;
}