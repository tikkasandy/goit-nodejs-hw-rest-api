const signup = require('./signup')
const verifyEmail = require('./verifyEmail')
const reverifyEmail = require('./reverifyEmail')
const login = require('./login')
const logout = require('./logout')
const getCurrent = require('./getCurrent')
const updateSubscriptionUser = require('./updateSubscriptionUser')
const updateAvatar = require('./updateAvatar')


module.exports = {
    signup,
    verifyEmail,
    reverifyEmail,
    login,
    logout,
    getCurrent,
    updateSubscriptionUser,
    updateAvatar
}