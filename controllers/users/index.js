const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const getCurrent = require('./getCurrent')
const updateSubscriptionUser = require('./updateSubscriptionUser')
const updateAvatar = require('./updateAvatar')

module.exports = {
    signup,
    login,
    logout,
    getCurrent,
    updateSubscriptionUser,
    updateAvatar
}