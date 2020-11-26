exports.handle404s = (_, __, next) => {
    const error = {
        statusCode: 404,
        message: "Resource not found",
        status: "Not found"
    };

    next(error);
};

exports.errorHandler =  (error, _, res, next) => {
    res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        status: error.status || "Failed",
        message: error.message,
        stack: error.stack,
        ...error
    });
    next();
};