exports.setup = (app) => {
    const login = require('./router/login');
    const user = require('./router/user');
    const hospital = require('./router/hospital');
    const serviceProvider = require('./router/serviceProvider')
    const service = require('./router/service')
    const search = require('./router/search')

    app.use('', login);
    app.use('/user', user);
    app.use('/hospital', hospital);
    app.use('/serviceProvider', serviceProvider)
    app.use('/service', service)
    app.use('/search',search)
}

module.exports = exports;