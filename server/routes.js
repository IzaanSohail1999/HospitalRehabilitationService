exports.setup = (app) => {
    const login = require('./router/login');
    const user = require('./router/user');
    const hospital = require('./router/hospital');
    const serviceProvider = require('./router/serviceProvider')

    app.use('', login);
    app.use('/user', user);
    app.use('/hospital', hospital);
    app.use('/serviceProvider', serviceProvider)
}

module.exports = exports;