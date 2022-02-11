// Popis proxy https://webpack.js.org/configuration/dev-server/#devserverproxy
const PROXY_CONFIG = {
    "/CPS_LOANS_WEB_API/": {
        "target": "https://localhost:44301",
        "secure": false,
        "logLevel": "debug",
        "pathRewrite": {},
        "changeOrigin": true,
        "onError": function onError(err, req, res, target) {
            console.error(err);
        }
    }
}

module.exports = PROXY_CONFIG;
