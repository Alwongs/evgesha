module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/evgesha/" : "/",
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
}