const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware("/api/**", { 
        // target: "http://diginet-server:5000",
        target: "http://localhost:5000/",
        // target: "https://clustering-dev.azurewebsites.net",
        // target: "http://ec2-18-195-224-0.eu-central-1.compute.amazonaws.com/",
        secure: false
    }));
};
