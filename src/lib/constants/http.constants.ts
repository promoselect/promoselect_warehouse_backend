const HTTP_STATUS_CODES = {
    // success
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    
    // client error
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    
    // server error
    INTERNAL_SERVER_ERROR: 500,
} as const;

const HTTP_STATUS_CODES_MESSAGES = {
    // success
    OK: "OK",
    CREATED: "Created",
    NO_CONTENT: "No Content",
    
    // client error
    BAD_REQUEST: "Bad Request",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    NOT_FOUND: "Not Found",
    
    // server error
    INTERNAL_SERVER_ERROR: "Internal Server Error",
} as const;

export { HTTP_STATUS_CODES, HTTP_STATUS_CODES_MESSAGES };