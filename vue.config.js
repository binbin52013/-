module.exports = {
    publicPath: './',
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        open: true,
        proxy: {
            '/api': {
                target: 'http://120.53.31.103:84/api/app', // 线上后端地址
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}