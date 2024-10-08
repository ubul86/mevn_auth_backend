function apiResponseMiddleware(req, res, next) {
    const originalSend = res.send;

    res.send = function (data) {
        const response = JSON.parse(data);
        if (res.statusCode >= 200 && res.statusCode < 300) {
            return originalSend.call(this, JSON.stringify({
                success: true,
                message: response.message || 'Request successful',
                data: response.data || null,
            }));
        } else {
            return originalSend.call(this, JSON.stringify({
                success: false,
                message: response.message || 'An error occurred',
                errors: response.errors || null,
            }));
        }
    };

    next();
}

module.exports = apiResponseMiddleware;