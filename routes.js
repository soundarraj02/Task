const loginRouter = require("./routes/LoginRoutes");

module.exports = function(app) {
    // app.use('/api/v1/logo', logoRouter);
    app.use('/api/v1/', loginRouter);

}