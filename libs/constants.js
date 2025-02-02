const HTTP_STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
}

const FOLDER = {
    UPLOAD: 'temp',
    STATIC: 'public',
    AVATAR: 'public/avatars'
}

module.exports = {
    HTTP_STATUS_CODE,
    FOLDER
}