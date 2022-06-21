const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
    devServer: {
        port: 9999
    },
    transpileDependencies: true
});
